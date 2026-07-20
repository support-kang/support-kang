import { render, screen, within } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import App from './App.jsx';
import { contact } from './data/textContent.js';

describe('App', () => {
  it('mounts the portfolio document with five sections', () => {
    render(<App />);

    expect(screen.getByRole('main')).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 1, name: 'KANG JIWON' })).toBeInTheDocument();
    expect(screen.getByText('ENTERPRISE APPLICATION DEVELOPER')).toBeInTheDocument();
    const identity = document.getElementById('identification');
    expect(within(identity).getByText('2026.07')).toBeInTheDocument();
    expect(within(identity).getByText('OPERATIONAL')).toBeInTheDocument();

    for (const label of [
      'Identification',
      'Project Records',
      'Technical Range',
      'Engineering Notes',
      'Contact',
    ]) {
      expect(screen.getAllByText(label).length).toBeGreaterThan(0);
    }

    expect(screen.queryByText('Selected Systems')).not.toBeInTheDocument();
    expect(document.getElementById('identification')).toBeTruthy();
    expect(document.getElementById('selected-systems')).toBeFalsy();
    expect(document.getElementById('project-records')).toBeTruthy();
    expect(document.getElementById('technical-range')).toBeTruthy();
    expect(document.getElementById('engineering-notes')).toBeTruthy();
    expect(document.getElementById('contact')).toBeTruthy();
  });

  it('keeps internship record brief', () => {
    render(<App />);

    expect(screen.getByRole('heading', { name: '웹·모바일 프론트엔드 인턴 업무' })).toBeInTheDocument();
    expect(screen.queryByAltText('캔버스 에디터')).not.toBeInTheDocument();
    expect(screen.queryByText(/인터랙티브 캔버스 에디터/)).not.toBeInTheDocument();
  });

  it('records employment timeline in engineering notes', () => {
    render(<App />);
    const notes = document.getElementById('engineering-notes');

    expect(within(notes).getByText('에스비티글로벌')).toBeInTheDocument();
    expect(within(notes).getByText('디엑스티')).toBeInTheDocument();
    expect(within(notes).getByText('스콥')).toBeInTheDocument();
  });

  it('renders project records as work-spec rows', () => {
    render(<App />);

    const list = document.querySelector('.project-records-list');
    expect(list).toBeTruthy();

    const first = list.querySelector('.project-record');
    expect(first).toBeTruthy();
    expect(first.querySelector('.project-record-meta')).toBeTruthy();
    expect(first.querySelector('.project-record-body')).toBeTruthy();
    expect(within(first).getByText('PRJ-01')).toBeInTheDocument();
    expect(within(first).getByRole('heading', { name: /Salesforce/i })).toBeInTheDocument();
    expect(screen.getAllByText('Problem').length).toBe(9);
    expect(screen.getAllByText('Technical decision').length).toBe(9);
    expect(screen.getAllByText('Outcome').length).toBe(9);
  });

  it('exposes contact channels', () => {
    render(<App />);
    const section = document.getElementById('contact');

    expect(within(section).getByRole('link', { name: contact.email })).toHaveAttribute(
      'href',
      contact.mailto,
    );
    expect(within(section).getByRole('link', { name: contact.githubLabel })).toHaveAttribute(
      'href',
      contact.github,
    );
    expect(within(section).getByRole('link', { name: contact.resumeLabel })).toHaveAttribute(
      'href',
      contact.resumeHref,
    );
  });

  it('keeps technical range groups and avoids banned marketing phrases', () => {
    const { container } = render(<App />);
    const range = document.getElementById('technical-range');
    const text = container.textContent;

    expect(within(range).getByRole('heading', { name: 'Frontend' })).toBeInTheDocument();
    expect(within(range).getByRole('heading', { name: 'Enterprise' })).toBeInTheDocument();
    expect(text).not.toMatch(/혁신적인|열정적인|세상을 바꾸는/);
  });
});
