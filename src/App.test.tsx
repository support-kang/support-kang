import { fireEvent, render, screen, within } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import App from './App';
import { contact } from './data/textContent';

describe('App', () => {
  it('renders the enterprise portfolio IA in the intended order', () => {
    render(<App />);

    const main = screen.getByRole('main');
    const sectionIds = Array.from(main.querySelectorAll(':scope > section')).map((section) => section.id);

    expect(sectionIds).toEqual([
      'top',
      'selected-work',
      'experience',
      'technical-focus',
      'other-work',
      'engineering-approach',
      'contact',
    ]);
    expect(screen.getAllByRole('heading', { level: 1 })).toHaveLength(1);
    expect(screen.getByRole('heading', { level: 1, name: 'Enterprise Application Developer' })).toBeInTheDocument();
    expect(screen.getByText(/기업 업무 시스템의 UI부터 워크플로우/)).toBeInTheDocument();
  });

  it('connects header navigation and preserves external actions', () => {
    render(<App />);
    const nav = screen.getByRole('navigation', { name: 'Primary navigation' });

    expect(within(nav).getByRole('link', { name: 'Work' })).toHaveAttribute('href', '#selected-work');
    expect(within(nav).getByRole('link', { name: 'Experience' })).toHaveAttribute('href', '#experience');
    expect(within(nav).getByRole('link', { name: 'Stack' })).toHaveAttribute('href', '#technical-focus');
    expect(within(nav).getByRole('link', { name: 'About' })).toHaveAttribute('href', '#engineering-approach');

    const githubLinks = screen.getAllByRole('link', { name: /GitHub/i });
    expect(githubLinks[0]).toHaveAttribute('href', contact.github);
    expect(githubLinks[0]).toHaveAttribute('rel', 'noreferrer');
    expect(screen.getAllByRole('link', { name: /Resume/i })[0]).toHaveAttribute('href', contact.resumeHref);
  });

  it('renders four featured projects in the required order', () => {
    render(<App />);
    const section = document.getElementById('selected-work')!;
    const titles = Array.from(section.querySelectorAll('.featured-project h3')).map((heading) => heading.textContent);

    expect(titles).toEqual([
      '글로벌 제조사 주문·재고 관리 시스템 고도화',
      '열해석 자동화 SPDM 시스템 개발',
      '차세대 PLM PoC 기획 및 개발',
      'SCM·Scope 3 탄소배출량 검증 시스템 PoC',
    ]);
  });

  it('opens native project disclosures by default and keeps them toggleable', () => {
    render(<App />);
    const firstProject = document.querySelector<HTMLElement>('.featured-project')!;
    const details = firstProject.querySelectorAll('details');

    expect(details).toHaveLength(3);
    expect(Array.from(details).every((detail) => detail.open)).toBe(true);
    fireEvent.click(within(firstProject).getByText('Problem'));
    expect(details[0].open).toBe(false);
    expect(within(details[0]).getByText(/Salesforce 화면과 SAP 시스템에 분산/)).toBeInTheDocument();
    expect(within(firstProject).getByText('Technical Decision')).toBeInTheDocument();
    expect(within(firstProject).getByText('Outcome')).toBeInTheDocument();
    expect(within(firstProject).getByText('Decision')).toBeInTheDocument();
    expect(within(firstProject).getByText('Result')).toBeInTheDocument();
    expect(within(firstProject).getByText('Salesforce 풀스택 개발')).toBeInTheDocument();
  });

  it('renders compact other work and keeps internship only in experience', () => {
    render(<App />);
    const otherWork = document.getElementById('other-work')!;
    const titles = Array.from(otherWork.querySelectorAll('h3')).map((heading) => heading.textContent);

    expect(titles).toEqual([
      '개발·스테이징 환경 CI/CD 파이프라인 구축',
      '제품개발 통합 관리 PoC',
      '체육시설 안심결제 모바일 앱 개발',
      '엔터프라이즈 PLM·HSE 시스템 및 React Widget 개발',
    ]);
    expect(within(otherWork).queryByText('Frontend Developer Intern')).not.toBeInTheDocument();
    expect(within(document.getElementById('experience')!).getByText('Frontend Developer Intern')).toBeInTheDocument();
  });

  it('prioritizes verified technologies without document-era labels or client names', () => {
    const { container } = render(<App />);
    const text = container.textContent;

    expect(text).toContain('Queueable');
    expect(text).toContain('Low-Code Platform');
    expect(text).not.toMatch(/PRJ-|INTERNAL|EXTERNAL|Revision|Project Records|Technical Range|Identification/);
    expect(text).toContain('글로벌 제조사');
    expect(text).toContain('자동차 제조사');
    expect(text).toContain('전자 제조사');
    expect(text).toContain('화학 제조사');
    expect(container.querySelector('progress')).toBeNull();
  });

  it('exposes email, GitHub and resume in Contact', () => {
    render(<App />);
    const section = document.getElementById('contact')!;

    expect(within(section).getByRole('link', { name: contact.email })).toHaveAttribute('href', contact.mailto);
    expect(within(section).getByRole('link', { name: contact.githubLabel })).toHaveAttribute('href', contact.github);
    expect(within(section).getByRole('link', { name: contact.resumeLabel })).toHaveAttribute('href', contact.resumeHref);
    expect(within(section).queryByText(contact.portfolio)).not.toBeInTheDocument();
  });
});
