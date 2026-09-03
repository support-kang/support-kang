export interface NavigationItem {
  id: string;
  label: string;
}

export interface ContactContent {
  email: string;
  mailto: string;
  github: string;
  githubLabel: string;
  portfolio: string;
  resumeHref: string;
  resumeLabel: string;
}

export interface CareerStage {
  stage: string;
  technologies: string;
}

export interface HeroContent {
  name: string;
  role: string;
  statement: string;
  stack: string[];
  trajectory: CareerStage[];
  systemFlow: string[];
}

export interface SectionCopyBlock {
  eyebrow: string;
  title: string;
  body: string;
}

export const navigation: NavigationItem[] = [
  { id: 'selected-work', label: 'Work' },
  { id: 'experience', label: 'Experience' },
  { id: 'technical-focus', label: 'Stack' },
  { id: 'engineering-approach', label: 'About' },
];

export const hero: HeroContent = {
  name: 'KANG JIWON',
  role: 'Enterprise Application Developer',
  statement: '기업 업무 시스템의 UI부터 워크플로우, 데이터, 외부 시스템 연동까지 구현합니다.',
  stack: ['Salesforce', 'Apex', 'LWC', 'React', 'TypeScript', 'Mendix', 'Java', 'SAP Integration'],
  trajectory: [
    { stage: 'Frontend', technologies: 'React / TypeScript' },
    { stage: 'Enterprise App', technologies: 'Mendix / Java' },
    { stage: 'Current', technologies: 'Salesforce / SAP Integration' },
  ],
  systemFlow: ['UI', 'Workflow', 'Business Logic', 'Data', 'External Integration'],
};

export const contact: ContactContent = {
  email: 'jiwon.kang.dev@gmail.com',
  mailto: 'mailto:jiwon.kang.dev@gmail.com',
  github: 'https://github.com/support-kang',
  githubLabel: 'github.com/support-kang',
  portfolio: 'https://support-kang.github.io/support-kang/',
  resumeHref: './assets/resume/resume-jiwon-kang.pdf',
  resumeLabel: 'Resume PDF',
};

export const sectionCopy: Record<string, SectionCopyBlock> = {
  selectedWork: {
    eyebrow: 'Selected Work',
    title: '업무 시스템을 연결한 경험',
    body: '화면 구현을 넘어 워크플로우, 데이터 정합성, 외부 시스템 연동까지 책임진 대표 프로젝트입니다.',
  },
  experience: {
    eyebrow: 'Experience',
    title: '프론트엔드에서 엔터프라이즈 통합으로',
    body: 'React·React Native와 TypeScript를 시작으로 Mendix·Java, Salesforce·SAP 연동까지 업무 시스템의 범위를 넓혀왔습니다.',
  },
  technicalFocus: {
    eyebrow: 'Technical Focus',
    title: '기술보다 경험의 중심',
    body: '실제 업무 시스템에서 반복적으로 사용하고 연결해 온 기술을 중심으로 정리했습니다.',
  },
  otherWork: {
    eyebrow: 'Other Work',
    title: '다른 프로젝트와 전달 경험',
    body: '인프라, 제품개발, 모바일, PLM·HSE까지 서로 다른 업무 환경에서 결과물을 전달했습니다.',
  },
  engineeringApproach: {
    eyebrow: 'Engineering Approach',
    title: '운영 가능한 흐름을 설계합니다',
    body: '특정 도구보다 시스템의 경계, 상태, 실패 복구와 실제 전달 가능성을 우선합니다.',
  },
  contact: {
    eyebrow: 'Contact',
    title: '연락처와 이력서',
    body: '업무 경험에 관한 대화는 아래 채널로 연락해 주세요.',
  },
};
