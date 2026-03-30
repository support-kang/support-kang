const EXPDATE = new Date(new Date() - new Date('2023-09-01'));

export const heroContent = {
  eyebrow: 'Developer Portfolio',
  name: '강지원',
  title: 'React / Java를 중심으로 화면을 만들고, 필요한 영역은 직접 연결해 온 3년차 개발자입니다.',
  lead:
    'React, Java-Mendix 기반 개발, React Native 앱 개발, 기업용 시스템 개발을 함께 경험했습니다. 화면 구현에 그치지 않고 실제 사용자 흐름이 끊기지 않도록 상태 관리, 데이터 구조, API 연동, 배포 환경까지 함께 고민합니다.',
  primaryAction: {
    href: '#project-favorfit',
    label: '대표 프로젝트 보기',
  },
  secondaryAction: {
    href: './assets/resume/3년차 개발자 - 강지원_kk3012001.pdf',
    label: '이력서 열기',
  },
  summaryItems: [
    EXPDATE.getFullYear() - 1970 + '년 ' + (EXPDATE.getMonth() + 1) + '개월차 개발자',
    '주요 기술: React, TypeScript, Java, Mendix, React Native',
    '국민대학교 건설시스템공학 학사, 소프트웨어학 부전공',
  ],
};

export const introContent = {
  label: '소개',
  title: '빠르게 만들되, 제품답게 마무리하는 개발을 지향합니다.',
  paragraphs: [
    '업무에서는 제한된 일정 안에서 요구사항을 빠르게 정리하고, 실제로 동작하는 형태까지 구현하는 일을 주로 맡아왔습니다. 새로운 기술을 빠르게 익히는 편이고, 필요할 때는 AI 도구도 생산성과 학습을 위한 도구로 적극 활용합니다.',
    '특히 React 기반 UI 개발에서 강점을 가지고 있으며, 복잡한 데이터 시각화, 위젯 개발, 에디터 기능, 모바일 앱 화면 구현까지 범위를 넓혀 왔습니다.',
  ],
};

export const projectsText = {
  favorfit: {
    label: '대표 프로젝트',
    title: 'Favorfit',
    body:
      'AI 기반 쇼핑몰 상품 상세페이지 제작 서비스입니다. 스콥에서 프론트엔드 개발자로 참여했으며, 에디터 기능 구현과 리팩토링, 성능 개선, 유지보수를 맡았습니다.',
    overview: [
      { label: '기간', value: '2023.09 - 2024.02' },
      { label: '역할', value: '프론트엔드 개발' },
      { label: '기술', value: 'React, Axios, Recoil, Fabric.js, AWS' },
      { label: '팀 구성', value: 'BE 2인, FE 2인 중 FE' },
    ],
    copy: [
      'Favorfit에서는 사용자가 직접 결과물을 만드는 흐름에 가까운 작업을 맡았습니다. 로그인부터 상세페이지 제작, 추천 결과 확인, 캔버스 편집까지 이어지는 사용자 경험 안에서 실제로 손이 많이 가는 구간을 다뤘습니다.',
      '특히 Fabric.js 기반 에디터 기능과 렌더링 성능 개선 경험은 이후 다른 프로젝트에서도 화면 구조와 사용자 조작 흐름을 설계할 때 큰 기준이 되었습니다.',
    ],
  },
  keepay: {
    label: '대표 프로젝트',
    title: 'KeepPay',
    body:
      '체육시설 선납 이용료를 보호하는 안심결제 서비스입니다. DXT에서 React Native 프론트엔드 개발과 배포를 맡았고, 고객용 앱과 체육시설용 앱의 핵심 흐름을 구현했습니다.',
    overview: [
      { label: '기간', value: '2024.03 - 2024.09' },
      { label: '역할', value: '모바일 앱 프론트엔드 개발 및 배포' },
      { label: '기술', value: 'React Native, TypeScript, Recoil, AWS Cognito, Mendix' },
      {
        label: '서비스',
        link: { href: 'https://www.keepay.org/', label: 'keepay.org' },
      },
    ],
    copy: [
      'KeepPay는 체육시설의 휴업 또는 폐업 상황에서 고객의 선납 이용료를 보호하는 서비스였습니다. 현재 공개 앱은 내려가 있어, 이 포트폴리오에는 당시 스토어 아카이브에 남아 있는 고객용 앱과 시설용 앱 화면을 기준으로 정리했습니다.',
      '저는 고객용 앱의 로그인, 회원가입, 본인인증, 시설 검색, 이용권 구매와 관리 흐름을 개발했고, 시설용 앱에서는 시설 정보 관리, 이용권 등록, 판매·취소 관리 화면을 구현했습니다. React Native 기반 크로스플랫폼 환경에서 다양한 해상도 대응과 스토어 배포까지 함께 맡았습니다.',
    ],
  },
  enterprise: {
    label: '주요 프로젝트',
    title: '그 외 프로젝트들',
    body:
      '기업 내부 시스템 성격의 업무라 화면 이미지를 공개할 수 없는 프로젝트들입니다.',
  },
  skills: {
    label: '기술 스택',
    title: '실무에서 사용한 기술',
  },
  education: {
    label: '학력 및 자격',
    title: '기본 정보',
    copy: '국민대학교 건설시스템공학 학사 졸업, 소프트웨어학 부전공 수료 (학점 3.81/4.5)',
  },
  experience: {
    label: '경력',
    title: '업무 경험',
  },
};
