export const projectRecords = [
  {
    id: 'PRJ-01',
    period: '2026.04 — PRESENT',
    name: '글로벌 제조사 Salesforce 기반 주문·재고 관리 시스템 고도화',
    role: 'Salesforce 풀스택 개발',
    stack: 'Salesforce, Apex, LWC, JavaScript, SOQL, SAP REST API',
    scope: '주문·가격·출하·할당 업무 화면 및 SAP 연동',
    team: '에스비티글로벌 / 담당',
    status: 'EXTERNAL',
    company: '에스비티글로벌',
    problem:
      '주문, 가격, 출하, 할당 업무가 Salesforce 화면과 SAP 시스템에 분산. 승인된 변경 사항만 운영 시스템에 안전하게 반영하고, 각 처리 단계의 상태를 추적할 수 있는 구조가 필요.',
    decision:
      '주요 업무를 하나의 Salesforce 화면에서 처리하도록 통합하고, SAP 연동은 비동기 처리 구조로 분리. 요청 접수, 외부 시스템 전송, 처리 결과 반영을 각각 독립 관리해 장애 시 실패 구간 식별·재처리가 가능한 설계.',
    outcome:
      '가격, 주문, 출하, 할당 변경 사항이 승인 절차를 거쳐 Salesforce와 SAP에 일관되게 반영되는 핵심 연동 기능. 요청별 진행 상태·처리 결과 추적으로 운영 안정성과 데이터 정합성 확보.',
    keyFeatures: [
      {
        title: '가격·특가 승인 및 SAP 가격 조건 연동',
        detail:
          '다단계 승인 완료 후 SAP 가격 조건 생성과 Salesforce 상품 가격 정보 자동 반영. 승인 상태와 외부 시스템 처리 상태를 분리해 일부 단계만 완료된 건도 추적 가능.',
      },
      {
        title: '주문 수량·저장 위치·배치 정보 통합 변경',
        detail:
          '주문 수량, 저장 위치, 배치 변경 요청을 하나의 비동기 처리 구조로 통합. 출하 진행 중 저장 위치 변경 시 재주문 처리와 중복 실행 방지 로직으로 데이터 충돌 차단.',
      },
      {
        title: '출하 예약 검증 및 SAP 연동',
        detail:
          '출하 채널, 잔여 수량, 출하 가능 용량 검증 후 예약 데이터를 원자적으로 반영하고 SAP로 전송. 사용자 요청 접수와 SAP 처리 완료 상태를 분리해 진행 상황·실패 지점 확인 가능.',
      },
      {
        title: '할당 수량 실시간 조회 및 재배분',
        detail:
          'SAP 최신 할당 수량 실시간 조회, 전체 수량 유지 범위에서 주문 라인 간 재배분. 처리 중 요청에 대한 중복 변경 제한으로 데이터 정합성 확보.',
      },
    ],
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
      '개발·스테이징 배포가 수동에 의존해 반복 구축과 환경 재현이 어려운 상태.',
    decision:
      'GitLab·Jenkins 연계와 k3s·Docker 기반 실행 환경을 코드형으로 구성해 반복 구축 가능한 체계를 우선.',
    outcome:
      '빌드·배포 자동화와 스테이징 실행 환경 마련. 코드 기반 재구성이 가능한 인프라 관리 기반 확보.',
  },
  {
    id: 'PRJ-03',
    period: '2025.12 — 2026.01',
    name: '삼성전자 N-PLM PoC 기획 및 개발',
    role: 'PoC 기획 및 풀스택 개발',
    stack: 'Low-Code Platform, React, Amazon Bedrock, Siemens ALM·PLM',
    scope: 'MVP 기획, 데이터 모델 설계, ALM/PLM 연동, AI 챗봇 연동',
    team: '풀스택 2인 중 1인',
    status: 'EXTERNAL',
    company: '에스비티글로벌',
    problem:
      '짧은 일정 안에 Siemens ALM·PLM 연동과 핵심 요구사항을 검증할 MVP가 필요.',
    decision:
      '데이터 모델과 핵심 화면을 먼저 고정하고, Amazon Bedrock Claude 챗봇으로 자연어 요구사항 처리를 보조.',
    outcome:
      '1개월 내 핵심 기능 검증용 SaaS형 애플리케이션 기획·구현.',
  },
  {
    id: 'PRJ-04',
    period: '2025.08 — 2025.11',
    name: 'LG화학 SCM·Scope 3 탄소배출량 검증 시스템 PoC',
    role: 'PoC 기획·개발 및 Low-Code 교육',
    stack: 'Low-Code Platform, React, SpreadJS, External Database, Batch',
    scope: 'PoC 범위 수립, 검증 로직, 대용량 조회 화면, 위젯, 고객 교육',
    team: '1인',
    status: 'EXTERNAL',
    company: '에스비티글로벌',
    problem:
      '기존 업무 시스템 위에서 SCM과 Scope 3 탄소배출량 검증을 짧은 PoC로 검증할 필요.',
    decision:
      '외부 DB와 Batch로 검증 로직을 두고, SpreadJS 기반 React 위젯으로 대용량 조회·검증 UI 구성.',
    outcome:
      'PoC 범위 수립부터 화면·위젯 구현, 고객사 PI 대상 Low-Code 교육까지 일관된 수행.',
  },
  {
    id: 'PRJ-05',
    period: '2025.05 — 2025.08',
    name: '현대자동차 열해석 자동화 SPDM 시스템 개발',
    role: '풀스택 개발',
    stack: 'Java, React, TypeScript, ECharts, AG Grid, SFTP, SMTP',
    scope: '해석 데이터 자동화, 시각화, 파일 전송, 시스템 메일, Low-Code 위젯 통합',
    team: '풀스택 3인 중 1인',
    status: 'EXTERNAL',
    company: '에스비티글로벌',
    problem:
      '열해석 데이터 관리·분석이 수작업에 가깝고, 대용량 결과를 화면에서 다루기 어려운 상태.',
    decision:
      'ECharts 2D/3D 시각화와 AG Grid Mendix 위젯으로 조회·분석을 통합하고, SFTP·SMTP로 파일·메일 연계.',
    outcome:
      '해석 결과 변환·표시 로직 최적화, Low-Code 환경과 연동되는 SPDM 기능 구현.',
  },
  {
    id: 'PRJ-06',
    period: '2025.06',
    name: 'LG전자 HS 제품개발통합 PoC 기획 및 개발',
    role: 'PoC 기획 및 개발',
    stack: 'Low-Code Platform, React',
    scope: '통합 관리 앱 기획, 데이터 모델 설계, Gantt Chart 컴포넌트',
    team: '1인',
    status: 'EXTERNAL',
    company: '에스비티글로벌',
    problem:
      '제품개발 현황을 한곳에서 점검할 수 있는 통합 관리 형태가 필요.',
    decision:
      'SaaS형 앱으로 데이터 모델을 설계하고, 외부 라이브러리 의존도를 낮춘 React Gantt Chart를 직접 구성.',
    outcome:
      '제품·업무 데이터 관리용 PoC 애플리케이션과 일정 시각화 컴포넌트 완성.',
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
      '엔터프라이즈 PLM과 HSE 교육 이수 관리에서 재사용 가능한 UI와 조회 성능이 필요.',
    decision:
      'React·TypeScript 플러거블 위젯으로 공통 UI를 분리하고, 현장별 교육 조회 로직 개선.',
    outcome:
      '위젯 기반 확장이 가능한 구조. 미이수자 조회·관리자 알림과 응답 성능 개선.',
  },
  {
    id: 'PRJ-08',
    period: '2024.03 — 2024.09',
    name: '체육시설 안심결제 서비스 KeepPay 모바일 앱 개발',
    role: '모바일 앱 프론트엔드 개발 및 배포',
    stack: 'React Native, TypeScript, Recoil, AWS Cognito, Mendix',
    scope: '고객용·시설용 앱 핵심 화면, 인증·결제 연동, 스토어 배포',
    team: 'BE 2 / FE 2 중 1인',
    status: 'EXTERNAL',
    company: '디엑스티',
    problem:
      '고객과 시설 운영자가 서로 다른 앱에서 인증·결제·이용권 관리 흐름을 안정적으로 사용할 필요.',
    decision:
      'React Native 크로스플랫폼으로 공통 기반을 두고 Cognito·PASS·PG 연동을 화면 단위로 고정.',
    outcome:
      '주요 사용자 화면과 폴더블·해상도 대응, iOS/Android 스토어 배포·버전 관리까지 포함.',
  },
  {
    id: 'PRJ-09',
    period: '2023.09 — 2024.02',
    name: '웹·모바일 프론트엔드 인턴 업무',
    role: '프론트엔드 개발 인턴',
    stack: 'React, React Native, TypeScript, Fabric.js, AWS',
    scope: '담당 기능 구현 보조, 간단한 리팩터링, PoC 화면 지원',
    team: '스콥 / 인턴',
    status: 'INTERNAL',
    company: '스콥',
    problem:
      '배정된 화면·기능 일부 구현과 기존 코드 정리 필요.',
    decision:
      '담당 범위 안에서 React 화면 구현과 작은 단위 리팩터링을 우선.',
    outcome:
      'Favorfit 일부 기능 지원과 GetMedi PoC 화면 지원.',
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
    summary: '웹·모바일 프론트엔드 구현과 유지보수 보조.',
  },
];
