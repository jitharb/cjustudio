/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ServiceItem, ProjectItem, LeadershipMember, ContactChannel } from './types';

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'ui-ux',
    title: 'UI/UX 디자인',
    description: '사용자 심리와 구조적 명확성에 바탕을 둔 직관적인 인터페이스를 설계합니다. 모든 상호작용은 인지 부하를 최소화하고 참여를 극대화하도록 매핑됩니다.',
    iconName: 'LayoutGrid',
    features: [
      '와이어프레임 & 프로토타이핑',
      '디자인 시스템 아키텍처'
    ]
  },
  {
    id: 'web-dev',
    title: '웹 개발',
    description: '성능과 유지보수성을 위해 구축된 견고하고 확장 가능한 프론트엔드 및 백엔드 아키텍처.',
    iconName: 'Terminal'
  },
  {
    id: 'digital-strategy',
    title: '디지털 전략',
    description: '비즈니스 목표와 기술적 역량을 일치시키는 디지털 성장을 위한 데이터 기반 청사진.',
    iconName: 'BarChart'
  }
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'aura-finance',
    title: '아우라 금융 시스템',
    category: '핀테크 플랫폼',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDJAzUdT1S_UCo1bibl0wHOUzu8d4IASkg7PUDH_rAvAsjEhNLx7Hf0ULlvX9CDqDRMLhVCkzVanHPpK8owNq7_1jJ4Uje8Mp2sQDYKmYeDU0GieJliZs_hCMwYwoqTj56NTotZ1MeW3-gzmstsmTVQO2d6rzrtW_rK9exYIqlTs7eIsPQraCaWeNv7AogvXPVV_gl5cfGiKgpS57miPG78Mw1Zcj1ECJHyZSyvDD04BX6ZtLYJj0h5GRy7Du1CMKAn-5LyEw9sxQ',
    description: '고도로 고안된 핀테크 플랫폼을 구축하여 금융 인프라의 가시성과 투명성을 제공합니다.',
    tags: ['금융', '시스템', 'UI/UX']
  },
  {
    id: 'matrix-protocol',
    title: '메트릭스 프로토콜',
    category: '데이터 시각화',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC2ET5hyA40yfsw0SSWVOA8PmvcmUOCj5oJnYdyFFY5UbZi25wGX6Z9luR63SKB8wf05Lz0YIJ7eeFblgOL2Y3mZNjbpMGFNtgyhMoZLgjAPzWUU2TWgwCGk-I-a_mbDVCkuNaO8cisYjGXA7YU3r4sx5Xk1DAoMCqDvASkzsTXWTUUjqAfPtGCMKIsF-lAKfwHxvv-Ch_UGyHnR_ciKCUrcIaZxlfwqM40yjJSGi9CZG1cvaZuxeK88aH322wigxJoWkHN4jwqiA',
    description: '엄격한 격자 설계와 컴포넌트 라이브러리를 통해 방대한 정보 분석의 유용성을 확보합니다.',
    tags: ['시각화', '프로토콜', '엔터프라이즈']
  },
  {
    id: 'nexus-core',
    title: '넥서스 코어',
    category: '엔터프라이즈 SaaS',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD-xdZPqwDenVhyQwZfTW80NCjzVVtKckN0IDrXgOvwfvCr4z-_CZeIwerSTNJoxyErh2r8Aoy0ayKuPCZNX50oAqZgU1zbhZj5SsQSEOzsqPn_Qymdf1iMUKtoeHQxhyM4lXNSoUWh2fkVRLxtAGmuv08r9IgCOzPiG7JJKyJ63ZakWdBJcQn2Ic3iiMBe1017DGV2LWJtyx-PkpDYLCtd-ZhiOG36pV5I2J3JpFo0W8qFphmCwNgYTNgU7mrbq3n6qY3MI5hryQ',
    description: '다분야 클라우드 서비스 플랫폼을 위한 구조화된 디자인 시스템 및 에코 시스템을 설계합니다.',
    tags: ['SaaS', '클라우드', '코어']
  },
  {
    id: 'horizon-logistics',
    title: '호라이즌 물류 허브',
    category: '기업용 웹 앱',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD8RO1XniZpLywhYHDjwV6Ap18y6FXmJJcsEfj0mIUg4JwPSi7espZca_P4WbDki4wisIxDeIinkxTeTqkxkjfbljpKsLVhRxIGG1CA6W4GCfto_FVLydhZPMsEF2DwaboV67XwUm2TYm82ZuRUCbNWBeEepVppYYMUU1G5wYMlQEccUhq_l36t_qozn5nnaUnD75VRBKJ0ZkPJE9KKHGywZr_vHQy-fBPwQildOQmDtu25Dom2mezS_n1r81nUETwf6E1uyLE0Nw',
    description: '스펙터클한 구조 설계로 물류 흐름을 모니터링하고 가시화하는 엔터프라이즈 대시보드.',
    tags: ['통합', '로지스틱스', '관제']
  }
];

export const LEADERSHIP_DATA: LeadershipMember[] = [
  {
    id: 'elena',
    name: 'Elena Rostova',
    role: '대표 파트너 (Managing Partner)',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAFgyMwjySMOqtcMKX1hC_47tdvQvjWAwNDr-OruSxZs1XOUmXkwiq2wULq6A96DpaHAW_DUHivPzJOxJxdEIPs74u5tYoYPqOxjHyRwsQyo3bC8bKb1Xdl_a0TjQSJXi2MEU9XTxrRaN3Vl4aPzy9cfag6ZV_kJxdK5WSq7F-5jwu7GzJUoVdikTBjeXgZWNWVURVjpGPN4Q9xw_HQYqvIkTSIgJCOoogzyZT7-uPr977-IhpZWBwO9ZlIzu1cBepJGfHW-fkOQA'
  },
  {
    id: 'marcus',
    name: 'Marcus Vance',
    role: '엔지니어링 책임자 (Head of Engineering)',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB8W2gP9i0_bfzfeo9zuLZzbDKRMHUN3Q4ILZtE7C6Hns_YLpXsgKJ1oUqDjiLAZhD28bA6iLb2ybf8bbwR2kDrtvXyGG3YNLsqHxL7CI-7zy_PdvhQAo5_pUEth-d8ZevTIc0OJjhINy6K9AZ4TLIy00H3dbj72Z64FOHuI4TIF9TIbEPeciv01QBuvf3lHjNqWzd0bbA6pJZzq-cvnQxjeLWpeq0tMfr2be4T6EsoexxNOpMTBQMzOY0JWNEdOEoWen0B09Sldw'
  },
  {
    id: 'sarah',
    name: 'Sarah Lin',
    role: '디자인 디렉터 (Design Director)',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB7VBtQV7HlneZDaOScAkAJcRcSP48TB6pzb0AqUMCr-u8vxN_XYVjqAC0U_5FwK-fSnhPGEgM23NUY0TsMfyJJ3rbp0AJG3JMw2OUUIn9Z37AJPYMgaHecDVS-uPO-Y_SL8CWCRcZRHuOehhBE7ANei3n82kYnclN7j0hkqQH3HCoworCmBAan-g4SZwmIOHdxpvQM_0upKlLOgVOTS3lR9iWLUipOLNaON1HtoKL6_1benovJjZL0-rxgp6gs1iv_LTTb527j6g'
  },
  {
    id: 'david',
    name: 'David Thorne',
    role: '전략 책임자 (Strategy Lead)',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBPbi8--Hl4SaA7UStuXI3EgIUqqx1fugCGUB91jNEZMElVj0OefeY-mBjEgRxPBfe9-SdcdC_WxbD8vmNlRWM1NkVBW3tOQxhAYJDToUf66ZUKqYAz2NTq8iFzZkLtKU9LMV1mtskjLWr_0kKAi3hXPUpkSvtoYKhmzrSzbKa6MrjXvHBt1YhiCq8E7Bnta4pJ4mct5pevz2uYv0elRKnD8YJWgFj261DZXSNnPmxXG4KVAHC7TCM5vowbKytPtmLxe6jXWNXrFA'
  }
];

export const CONTACT_DATA: ContactChannel[] = [
  {
    id: 'email',
    label: '문의',
    value: 'hello@studioprecision.com',
    iconName: 'Mail'
  },
  {
    id: 'phone',
    label: '본사',
    value: '+1 (212) 555-0198',
    iconName: 'Phone'
  },
  {
    id: 'address',
    label: '뉴욕 오피스',
    value: '450 West 31st Street\nSuite 1200\nNew York, NY 10001',
    iconName: 'MapPin'
  }
];
