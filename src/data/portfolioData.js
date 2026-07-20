export const favorfitShots = [
  {
    title: '로그인 화면',
    image: './assets/favorfit/screenshots/01-login.png',
    caption:
      'OAuth2.0 기반의 소셜 로그인과 자체 회원가입 기능을 제공하는 화면입니다.',
  },
  {
    title: '제작 메인 화면',
    image: './assets/favorfit/screenshots/03-mypage-make.png',
    caption:
      '사용자가 상세페이지 제작을 시작하는 메인 동선을 보여주는 화면입니다.',
  },
  {
    title: '상품 업로드 단계',
    image: './assets/favorfit/screenshots/06-ai-product.png',
    caption: '상품 이미지를 업로드하고 편집 전 상태를 확인하는 단계입니다.',
  },
  {
    title: '추천 결과 화면',
    image: './assets/favorfit/screenshots/07-ai-result.png',
    caption:
      'AI 기반 색상과 배경 추천 결과를 한눈에 비교할 수 있도록 구성된 화면입니다.',
  },
  {
    title: '결과 선택 화면',
    image: './assets/favorfit/screenshots/08-choice.png',
    caption:
      '선택한 결과를 더 큰 화면으로 확인하고 다음 작업으로 이어지는 구간입니다.',
  },
  {
    title: '캔버스 에디터',
    image: './assets/favorfit/screenshots/05-canvas-editor.png',
    caption:
      '실제 편집 기능이 모여 있는 핵심 화면으로, 이미지 배경 제거 및 이미지 편집 기능을 제공합니다.',
  },
];

export const keepayShots = [
  {
    title: '고객용 이용권 관리',
    image: './assets/keepay/screenshots/user-03.webp',
    caption:
      '구매한 이용권을 확인하고 상태를 관리하는 흐름을 보여주는 화면입니다.',
  },
  {
    title: '고객용 이용권 상세',
    image: './assets/keepay/screenshots/user-04.webp',
    caption:
      '시설 상세와 판매 중인 이용권 정보를 함께 확인하는 구매 전환 구간입니다.',
  },
  {
    title: '시설 정보 관리',
    image: './assets/keepay/screenshots/facility-03.webp',
    caption:
      '시설 정보와 사업자 정보를 수정·관리하는 운영자용 관리 화면입니다.',
  },
  {
    title: '판매·정산 관리',
    image: './assets/keepay/screenshots/facility-04.webp',
    caption: '판매된 이용권 내역과 정산 상태를 확인하는 운영 관리 화면입니다.',
  },
];

export const favorfitHighlights = [
  'React 기반 프론트엔드 개발',
  'Fabric.js를 활용한 인터랙티브 캔버스 에디터 구현',
  '비효율적인 컴포넌트 구조를 분리해 재사용 가능한 형태로 리팩토링',
  '다수의 캔버스 렌더링으로 인한 성능 저하를 썸네일 시스템 도입으로 개선',
  'Undo, Redo, Copy, Paste, Flip, 배경 복구, 그림자 생성, 색상 추천 기능 구현',
];

export const keepayHighlights = [
  'React Native 기반 고객용·시설용 크로스플랫폼 앱 구현',
  'AWS Cognito를 활용한 인증, 회원가입, 계정 찾기 흐름 개발',
  'PASS 본인인증 연동',
  '메인페이 연동 결제 플로우 구현',
  '체육시설 검색, 이용권 구매, 이용권 관리, 재구매 지원 신청 화면 개발',
  '시설 정보 관리, 이용권 등록, 판매·취소 관리 화면 개발',
  '안드로이드 폴더블 UI 및 다양한 해상도 대응',
  'iOS·Android 스토어 배포 및 운영 대응',
];

export const selectedSystems = [
  {
    id: 'SYS-01',
    anchorId: 'project-favorfit',
    name: 'Favorfit',
    period: '2023.09 — 2024.02',
    role: '프론트엔드 개발',
    stack: 'React, Axios, Recoil, Fabric.js, AWS',
    team: 'BE 2 / FE 2 중 FE',
    status: 'ARCHIVED',
    summary:
      'AI 기반 쇼핑몰 상품 상세페이지 제작 서비스. 로그인부터 캔버스 편집까지 이어지는 제작 흐름의 프론트엔드를 담당했다.',
    highlights: favorfitHighlights,
    gallery: favorfitShots,
    galleryClassName: '',
    copy: [
      '사용자가 직접 결과물을 만드는 구간에 집중했다. 추천 결과 확인과 Fabric.js 기반 편집기에서 조작 흐름과 렌더링 비용을 함께 다뤘다.',
      '다중 캔버스 렌더링 부하를 썸네일 체계로 줄인 경험은 이후 복잡한 화면 구조를 설계할 때의 기준으로 남았다.',
    ],
  },
  {
    id: 'SYS-02',
    anchorId: 'project-keepay',
    name: 'KeepPay',
    period: '2024.03 — 2024.09',
    role: '모바일 앱 프론트엔드 개발 및 배포',
    stack: 'React Native, TypeScript, Recoil, AWS Cognito, Mendix',
    team: 'BE 2 / FE 2 중 FE',
    status: 'ARCHIVED',
    summary:
      '체육시설 선납 이용료를 보호하는 안심결제 서비스. 고객용·시설용 앱의 핵심 흐름과 스토어 배포를 담당했다.',
    highlights: keepayHighlights,
    gallery: keepayShots,
    galleryClassName: 'gallery-grid-portrait',
    serviceUrl: 'https://www.keepay.org/',
    copy: [
      '고객용 앱의 인증·본인인증·시설 검색·이용권 구매/관리와 시설용 앱의 정보·판매 관리 화면을 구현했다.',
      '공개 앱은 현재 내려가 있어, 당시 스토어 아카이브에 남은 화면을 기준으로 기록한다.',
    ],
  },
];

export const projectRecords = [
  {
    id: 'PRJ-01',
    period: '2026.04 — PRESENT',
    name: '글로벌 제조사 Salesforce 기반 주문·재고 관리 시스템 고도화',
    role: 'Salesforce 풀스택 개발',
    stack: 'Salesforce, Apex, LWC, JavaScript, SOQL, SAP REST API, Queueable Apex',
    scope: '주문·재고·리베이트 관리 기능 고도화 및 SAP 인터페이스 연동',
    team: '에스비티글로벌 / 담당',
    status: 'OPERATIONAL',
    company: '에스비티글로벌',
    problem:
      '주문 변경·승인·EOL 취소와 잔여 오더 모니터링이 분산되어 있으며, SAP와 Salesforce 간 주문·가격·할인 정보가 동기화되어야 한다.',
    decision:
      'Apex Controller/Trigger/Service와 LWC로 업무 프로세스를 구성하고, Queueable Apex로 SAP 비동기 인터페이스와 응답 반영 로직을 분리했다.',
    outcome:
      '주문 수량·저장위치·배치 변경과 EOL 취소, 잔여 오더 모니터링을 시스템화하고 SAP 응답 결과에 따른 데이터 반영을 운영 가능한 형태로 구현했다.',
  },
  {
    id: 'PRJ-02',
    period: '2026.02 — 2026.03',
    name: '사내 개발·스테이징 환경 CI/CD 파이프라인 구축',
    role: '인프라 설계 및 구축',
    stack: 'GitLab, Jenkins, k3s, Docker',
    scope: '개발/스테이징 빌드·배포 자동화 및 실행 환경 구성',
    team: '1인',
    status: 'INTERNAL',
    company: '에스비티글로벌',
    problem:
      '개발과 스테이징 배포가 수동에 의존해 반복 구축과 환경 재현이 어려웠다.',
    decision:
      'GitLab·Jenkins 연계와 k3s·Docker 기반 실행 환경을 코드형으로 구성해 반복 구축 가능한 체계를 우선했다.',
    outcome:
      '빌드·배포 자동화와 스테이징 실행 환경을 마련하고, 코드 기반으로 재구성 가능한 인프라 관리 기반을 확보했다.',
  },
  {
    id: 'PRJ-03',
    period: '2025.12 — 2026.01',
    name: '삼성전자 N-PLM PoC 기획 및 개발',
    role: 'PoC 기획 및 풀스택 개발',
    stack: 'Low-Code Platform, React, Amazon Bedrock, Siemens ALM·PLM',
    scope: 'MVP 기획, 데이터 모델 설계, ALM/PLM 연동, AI 챗봇 연동',
    team: '풀스택 2인 중 1인',
    status: 'CONFIDENTIAL',
    company: '에스비티글로벌',
    problem:
      '짧은 일정 안에 Siemens ALM·PLM 연동과 핵심 요구사항을 검증할 MVP가 필요했다.',
    decision:
      '데이터 모델과 핵심 화면을 먼저 고정하고, Amazon Bedrock Claude 챗봇으로 자연어 요구사항 처리를 보조했다.',
    outcome:
      '1개월 내 핵심 기능 검증용 SaaS형 애플리케이션을 기획·구현했다.',
  },
  {
    id: 'PRJ-04',
    period: '2025.08 — 2025.11',
    name: 'LG화학 SCM·Scope 3 탄소배출량 검증 시스템 PoC',
    role: 'PoC 기획·개발 및 Low-Code 교육',
    stack: 'Low-Code Platform, React, SpreadJS, External Database, Batch',
    scope: 'PoC 범위 수립, 검증 로직, 대용량 조회 화면, 위젯, 고객 교육',
    team: '1인',
    status: 'CONFIDENTIAL',
    company: '에스비티글로벌',
    problem:
      '기존 업무 시스템 위에서 SCM과 Scope 3 탄소배출량 검증을 짧은 PoC로 검증해야 했다.',
    decision:
      '외부 DB와 Batch로 검증 로직을 두고, SpreadJS 기반 React 위젯으로 대용량 조회·검증 UI를 구성했다.',
    outcome:
      'PoC 범위 수립부터 화면·위젯 구현, 고객사 PI 대상 Low-Code 교육까지 일관되게 수행했다.',
  },
  {
    id: 'PRJ-05',
    period: '2025.05 — 2025.08',
    name: '현대자동차 열해석 자동화 SPDM 시스템 개발',
    role: '풀스택 개발',
    stack: 'Java, React, TypeScript, ECharts, AG Grid, SFTP, SMTP',
    scope: '해석 데이터 자동화, 시각화, 파일 전송, 시스템 메일, Low-Code 위젯 통합',
    team: '풀스택 3인 중 1인',
    status: 'CONFIDENTIAL',
    company: '에스비티글로벌',
    problem:
      '열해석 데이터 관리·분석이 수작업에 가깝고, 대용량 결과를 화면에서 다루기 어려웠다.',
    decision:
      'ECharts 2D/3D 시각화와 AG Grid Mendix 위젯으로 조회·분석을 통합하고, SFTP·SMTP로 파일·메일 연계를 붙였다.',
    outcome:
      '해석 결과 변환·표시 로직을 최적화하고 Low-Code 환경과 연동되는 SPDM 기능을 구현했다.',
  },
  {
    id: 'PRJ-06',
    period: '2025.06',
    name: 'LG전자 HS 제품개발통합 PoC 기획 및 개발',
    role: 'PoC 기획 및 개발',
    stack: 'Low-Code Platform, React',
    scope: '통합 관리 앱 기획, 데이터 모델 설계, Gantt Chart 컴포넌트',
    team: '1인',
    status: 'CONFIDENTIAL',
    company: '에스비티글로벌',
    problem:
      '제품개발 현황을 한곳에서 점검할 수 있는 통합 관리 형태가 필요했다.',
    decision:
      'SaaS형 앱으로 데이터 모델을 설계하고, 외부 라이브러리 의존도를 낮춘 React Gantt Chart를 직접 구성했다.',
    outcome:
      '제품·업무 데이터를 관리하는 PoC 애플리케이션과 일정 시각화 컴포넌트를 완성했다.',
  },
  {
    id: 'PRJ-07',
    period: '2024.02 — 2025.05',
    name: '엔터프라이즈 PLM·HSE 시스템 및 React Widget 개발',
    role: '프론트엔드 및 Mendix 풀스택 개발',
    stack: 'React, TypeScript, Java, Mendix',
    scope: 'PLM/사내 솔루션, 플러거블 위젯, HSE 교육 이수 관리',
    team: '디엑스티 / 담당',
    status: 'INTERNAL',
    company: '디엑스티',
    problem:
      '엔터프라이즈 PLM과 HSE 교육 이수 관리에서 재사용 가능한 UI와 조회 성능이 필요했다.',
    decision:
      'React·TypeScript 플러거블 위젯으로 공통 UI를 분리하고, 현장별 교육 조회 로직을 개선했다.',
    outcome:
      '위젯 기반 확장이 가능한 구조를 만들고, 미이수자 조회·관리자 알림과 응답 성능을 개선했다.',
  },
  {
    id: 'PRJ-08',
    period: '2024.03 — 2024.09',
    name: '체육시설 안심결제 서비스 KeepPay 모바일 앱 개발',
    role: '모바일 앱 프론트엔드 개발 및 배포',
    stack: 'React Native, TypeScript, Recoil, AWS Cognito, Mendix',
    scope: '고객용·시설용 앱 핵심 화면, 인증·결제 연동, 스토어 배포',
    team: 'BE 2 / FE 2 중 1인',
    status: 'ARCHIVED',
    company: '디엑스티',
    problem:
      '고객과 시설 운영자가 서로 다른 앱에서 인증·결제·이용권 관리 흐름을 안정적으로 써야 했다.',
    decision:
      'React Native 크로스플랫폼으로 공통 기반을 두고 Cognito·PASS·PG 연동을 화면 단위로 고정했다.',
    outcome:
      '주요 사용자 화면과 폴더블·해상도 대응, iOS/Android 스토어 배포·버전 관리까지 수행했다.',
  },
  {
    id: 'PRJ-09',
    period: '2023.09 — 2024.02',
    name: 'AI 커머스·의약품 관리 서비스 프론트엔드 개발',
    role: '프론트엔드 개발 인턴',
    stack: 'React, React Native, TypeScript, Fabric.js, Recoil, AWS',
    scope: 'Favorfit 에디터/성능 개선, GetMedi PoC 모바일 화면 지원',
    team: '스콥 / 인턴',
    status: 'ARCHIVED',
    company: '스콥',
    problem:
      '상세페이지 제작 에디터의 조작성과 다중 캔버스 성능, 의약품 재고 PoC 화면이 동시에 필요했다.',
    decision:
      'Fabric.js 에디터와 썸네일 렌더링으로 성능을 잡고, 컴포넌트 분리로 프론트엔드 구조를 정리했다.',
    outcome:
      'Favorfit 프론트엔드 기능·리팩터링을 수행하고 GetMedi PoC 모바일 화면 개발을 지원했다.',
  },
];

export const technicalRange = [
  {
    group: 'Frontend',
    items: ['React', 'TypeScript', 'JavaScript', 'Next.js', 'React Native', 'Recoil', 'Fabric.js'],
  },
  {
    group: 'Backend / Data',
    items: ['Java', 'Node.js', 'REST API', 'MySQL', 'PostgreSQL'],
  },
  {
    group: 'Enterprise',
    items: ['Mendix', 'Salesforce', 'Apex', 'LWC', 'SAP Integration', 'SOQL'],
  },
  {
    group: 'Infra / Delivery',
    items: ['Git', 'GitLab', 'Jenkins', 'Docker', 'Docker Compose', 'k3s', 'AWS'],
  },
];

export const engineeringNotes = {
  paragraphs: [
    '화면 구현에 그치지 않고 상태 관리, 데이터 구조, API·인터페이스 연동, 배포 환경까지 함께 설계하는 쪽을 선호한다.',
    '제한된 일정에서는 검증 가능한 MVP와 운영 가능한 인터페이스를 우선한다. Low-Code와 React 위젯, Salesforce·SAP 연동처럼 업무 시스템 경계에서 동작하는 구성을 다뤄왔다.',
    'AI 도구는 생산성과 학습을 위한 보조 수단으로 사용한다. 최종 책임은 데이터 흐름과 장애 지점을 이해할 수 있는 구현에 둔다.',
  ],
  education:
    '국민대학교 건설시스템공학 학사 졸업, 소프트웨어학 부전공 수료 (학점 3.81/4.5)',
  credentials: [
    'OPIC Intermediate High (2025.03)',
    'SQLD (2023.05)',
    'GS칼텍스/N15 해커톤 우수상 (2020.06)',
    '콘크리트산업기사 (2021.09)',
  ],
};

export const experience = [
  {
    company: '에스비티글로벌',
    period: '2025.05 — PRESENT',
    role: 'DX부문 ES담당 / Digital Solution팀',
    summary:
      'Mendix·React 기반 기업용 PoC와 Salesforce·SAP 연동 업무 시스템, 사내 CI/CD를 담당.',
  },
  {
    company: '디엑스티',
    period: '2024.02 — 2025.05',
    role: 'Cloud Development',
    summary: 'React 위젯, Mendix 풀스택, React Native 앱 개발 및 유지보수.',
  },
  {
    company: '스콥',
    period: '2023.09 — 2024.02',
    role: '개발팀 인턴 / 수습',
    summary: 'React·NestJS·AWS 기반 웹/모바일과 프론트엔드 리팩터링, 배포 환경 관리.',
  },
];
