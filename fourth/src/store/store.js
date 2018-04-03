export const registrationUrl = ''

export const colors = {
  green: '#42b883',
  navy: '#35495e'
}

export const generalInfo = {
  date: '2018. 04. 17 (화)',
  time: '19:30 ~ 21:30',
  location: '@구글 캠퍼스 서울 메인 이벤트 홀',
  intro: 'Vuetiful Korea(뷰티풀 코리아)는 Vue.js에 대한 관심주제 발표를 듣고 서로 관련 경험을 공유하며 네트워킹하는 모임으로, 2017년 4월 19일에 개최된 Vue.js 한국어 사용자 모임에서 시작하였습니다.'
}

export const presentations = [
  {
    time: '19:35',
    title: '아뇨, 난 Vue.js 사용할건데요?',
    presenter: {
      imgUrl: '/static/img/presenters/hax0r.jpg',
      name: '우영준',
      affiliation: 'Logispot',
      keywords: '새로운 패러다임, 이전 코드의 문제점, vue.js 를 도입하기전 신경써야하는 부분, 실제 서비스에 적용해본 vue.js, 느낀점',
      description: '로지스팟에서 리드 개발을 하고 있는 24 우영준입니다!'
    }
  },
  {
    time: '20:00',
    title: 'Vue.js와 Electron으로 데스크탑 앱 만들기',
    presenter: {
      imgUrl: '/static/img/presenters/irodong.jpg',
      name: '고은정',
      affiliation: 'NHN Bugs',
      keywords: 'electron, desktop, chromium, node.js, cross-platform',
      description: '게임과 개발을 좋아하는 웹개발자입니다.'
    }
  },
  {
    time: '20:30',
    title: 'Apollo로 알아보는 Vue in the GraphQL',
    presenter: {
      imgUrl: '/static/img/presenters/june.png',
      name: '최준석',
      affiliation: 'NHN Bugs',
      keywords: 'graphql, api, apollo, vue',
      description: '[3회 발표자료](https://github.com/seouldrinker/seoulDrinkerGraphql)를 ~~재탕(?)~~ 확장시켜서 최대한 쉽게 발표할 예정이에요 :) 잘부탁드립니다.<br/>**본 세션은 GraphQL에 대한 약간의 사전 지식이 필요로 하며, Server feature에 대한 설명이 포함될 수 있습니다.**'
    }
  }
]

export const program = [
  {
    time: '19:30',
    title: '소개'
  },
  presentations[0],
  presentations[1],
  {
    time: '20:25',
    title: '휴식'
  },
  presentations[2],
  {
    time: '20:55',
    title: '스폰서 광고'
  },
  {
    time: '21:00',
    title: '뷰티풀 코리아 일주년 기념 이벤트 feat 에반 유'
  },
  {
    time: '21:05',
    title: '네트워킹 파티'
  },
  {
    time: '21:25',
    title: '경품 추첨'
  },
  {
    time: '21:30',
    title: '폐회 및 정리'
  }
]

export const sponsors = [
  {
    pageUrl: 'http://www.logi-spot.com',
    imgUrl: '/static/img/sponsors/logispot.png',
    name: 'Logispot'
  },
  {
    pageUrl: 'http://coinone.co.kr',
    imgUrl: '/static/img/sponsors/coinone.png',
    name: 'Coinone'
  }
]

export const volunteers = [
  {
    pageUrl: 'http://seungmin.kr',
    imgUrl: '/static/img/volunteers/profile/smilee.jpg',
    backgroundImageUrl: '/static/img/volunteers/background-image/smilee.jpg',
    name: '이승민',
    description: '@smilee'
  },
  {
    pageUrl: 'http://github.com/vuetiful',
    imgUrl: '/static/img/volunteers/profile/sam.png',
    backgroundImageUrl: '/static/img/volunteers/background-image/vue.jpeg',
    name: '박새미',
    description: '잠만보'
  },
  {
    pageUrl: 'http://github.com/vuetiful',
    imgUrl: '/static/img/volunteers/profile/chris.jpg',
    backgroundImageUrl: '/static/img/volunteers/background-image/vue.jpeg',
    name: '양성민',
    description: '조금 큰 사진요정'
  },
  {
    pageUrl: 'https://www.hax0r.info',
    imgUrl: '/static/img/volunteers/profile/hax0r.jpg',
    backgroundImageUrl: '/static/img/volunteers/background-image/hax0r.jpg',
    name: '우영준',
    description: 'a.k.a hax0r'
  },
  {
    pageUrl: 'https://www.facebook.com/kkd927',
    imgUrl: '/static/img/volunteers/profile/kkd927.png',
    backgroundImageUrl: '/static/img/volunteers/background-image/kkd927b2.png',
    name: '권경덕',
    description: 'kkd927'
  },
  {
    pageUrl: 'https://wickso.me/',
    imgUrl: '/static/img/volunteers/profile/wicksome.png',
    backgroundImageUrl: '/static/img/volunteers/background-image/vue.jpeg',
    name: '김영준',
    description: 'SGkgZ3V5cyEgSSdtIHdpY2tzb21lIHNvZnR3YXJlIGVuZ2luZWVyISA6RA=='
  },
  {
    pageUrl: 'http://github.com/vuetiful',
    imgUrl: '/static/img/volunteers/profile/chayeoi.png',
    backgroundImageUrl: '/static/img/volunteers/background-image/vue.jpeg',
    name: '김찬연',
    description: '설명을 입력해주세요.'
  },
  {
    pageUrl: 'http://github.com/vuetiful',
    imgUrl: '/static/img/volunteers/profile/no-profile.jpg',
    backgroundImageUrl: '/static/img/volunteers/background-image/vue.jpeg',
    name: '김범연',
    description: '설명을 입력해주세요.'
  },
  {
    pageUrl: 'http://github.com/vuetiful',
    imgUrl: '/static/img/volunteers/profile/kelly.png',
    backgroundImageUrl: '/static/img/volunteers/background-image/vue.jpeg',
    name: '우경화',
    description: '설명을 입력해주세요.'
  },
  {
    pageUrl: 'http://github.com/vuetiful',
    imgUrl: '/static/img/volunteers/profile/no-profile.jpg',
    backgroundImageUrl: '/static/img/volunteers/background-image/vue.jpeg',
    name: '고예슬',
    description: '설명을 입력해주세요.'
  },
  {
    pageUrl: 'https://github.com/kciter',
    imgUrl: '/static/img/volunteers/profile/kciter.png',
    backgroundImageUrl: '/static/img/volunteers/background-image/vue.jpeg',
    name: '이선협',
    description: '화이팅!'
  }
]

export const participantSponsors = [
  '이선협'
]

export const regularParticipants = [
  '정재훈',
  '김인숙',
  '진유정'
]

export const prevMeetups = [
  {
    name: 'Vuetiful Korea 1회',
    pageUrl: 'http://vuejs.kr/meetup/#/first'
  },
  {
    name: 'Vuetiful Korea 2회',
    pageUrl: 'http://vuejs.kr/meetup/#/second'
  },
  {
    name: 'Vuetiful Korea 3회',
    pageUrl: 'http://vuejs.kr/meetup/#/'
  }
]

export const sns = [
  {
    name: 'Facebook',
    pageUrl: 'https://www.facebook.com/groups/vuejs.korea',
    faClass: 'fab fa-facebook'
  },
  {
    name: 'Slack',
    pageUrl: 'https://vuejs-korea.herokuapp.com',
    faClass: 'fab fa-slack'
  },
  {
    name: 'Github',
    pageUrl: 'https://github.com/vuejs-kr',
    faClass: 'fab fa-github'
  }
]
