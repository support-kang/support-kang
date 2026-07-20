import { render, screen, within } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import App from './App.jsx';
import { contact } from './data/textContent.js';

describe('App', () => {
  it('mounts the portfolio document with six sections', () => {
    render(<App />);

    expect(screen.getByRole('main')).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 1, name: 'KANG JIWON' })).toBeInTheDocument();
    expect(screen.getByText('ENTERPRISE APPLICATION DEVELOPER')).toBeInTheDocument();
    expect(screen.getByText('PORTFOLIO REV. 2026.07')).toBeInTheDocument();
    expect(screen.getByText('STATUS: OPERATIONAL')).toBeInTheDocument();

    for (const label of [
      'Identification',
      'Selected Systems',
      'Project Records',
      'Technical Range',
      'Engineering Notes',
      'Contact',
    ]) {
      expect(screen.getAllByText(label).length).toBeGreaterThan(0);
    }

    expect(document.getElementById('identification')).toBeTruthy();
    expect(document.getElementById('selected-systems')).toBeTruthy();
    expect(document.getElementById('project-records')).toBeTruthy();
    expect(document.getElementById('technical-range')).toBeTruthy();
    expect(document.getElementById('engineering-notes')).toBeTruthy();
    expect(document.getElementById('contact')).toBeTruthy();
  });

  it('renders selected systems with gallery evidence', () => {
    render(<App />);

    const systems = document.getElementById('selected-systems');
    expect(within(systems).getByRole('heading', { name: 'Favorfit' })).toBeInTheDocument();
    expect(within(systems).getByRole('heading', { name: 'KeepPay' })).toBeInTheDocument();
    expect(within(systems).getByText(/Fabric\.js를 활용한/)).toBeInTheDocument();
    expect(within(systems).getByAltText('캔버스 에디터')).toBeInTheDocument();
    expect(within(systems).getByAltText('고객용 이용권 관리')).toBeInTheDocument();
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
