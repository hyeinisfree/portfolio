import { Project } from '@/data/types/content';

import matdongsan from '@/public/images/matdongsan.webp';
import hyeinkim from '@/public/images/hyeinkim.webp';
import sswu from '@/public/images/sswu.jpg';
import storeasy from '@/public/images/storeasy.jpg';
import dingdong from '@/public/images/dingdong.jpg';

export const ProjectData: Project[] = [
  {
    id: 1,
    title: '맛동산',
    description: '제철 음식 아카이빙/커뮤니티 서비스',
    startDate: '2021/05',
    endDate: '2022/09',
    thumbnail: matdongsan,
    position: 'Backend Developer',
    techStack: ['SpringBoot', 'Java', 'MySQL', 'AWS'],
    icon: matdongsan,
    year: [2022],
    tags: ['Backend', 'Java/SpringBoot'],
  },
  {
    id: 2,
    title: 'Hyein Kim',
    description: '제철 음식 아카이빙/커뮤니티 서비스',
    startDate: '2021/05',
    endDate: '2022/09',
    thumbnail: hyeinkim,
    position: 'Backend Developer',
    techStack: ['SpringBoot', 'Java', 'MySQL', 'AWS'],
    icon: hyeinkim,
    year: [2022],
    tags: ['Backend', 'Java/SpringBoot'],
  },
  {
    id: 3,
    title: '수정광산',
    description: '성신여자대학교 커뮤니티 서비스',
    startDate: '2021/05',
    endDate: '2022/09',
    thumbnail: sswu,
    position: 'Backend Developer',
    techStack: ['SpringBoot', 'Java', 'MySQL', 'AWS'],
    icon: sswu,
    year: [2022],
    tags: ['Backend', 'Java/SpringBoot'],
  },
  {
    id: 4,
    title: '스토리지',
    description: '성신여자대학교 커뮤니티 서비스',
    startDate: '2021/05',
    endDate: '2022/09',
    thumbnail: storeasy,
    position: 'Backend Developer',
    techStack: ['SpringBoot', 'Java', 'MySQL', 'AWS'],
    award: "2021 원티드 '해,커리어' 예선 진출 (상위 50개팀)",
    icon: storeasy,
    year: [2021],
    tags: ['Backend', 'Java/SpringBoot'],
  },
  {
    id: 5,
    title: '띵-동',
    description: '성신여자대학교 커뮤니티 서비스',
    startDate: '2021/05',
    endDate: '2022/09',
    thumbnail: dingdong,
    position: 'Backend Developer',
    techStack: ['SpringBoot', 'Java', 'MySQL', 'AWS'],
    award: "2021 원티드 '해,커리어' 예선 진출 (상위 50개팀)",
    icon: dingdong,
    year: [2021],
    tags: ['Backend', 'Java/SpringBoot'],
  },
];

export const filterCategories = [
  {
    name: 'Year',
    options: ['2025', '2024', '2022', '2021'],
  },
  {
    name: 'Position',
    options: ['Backend', 'Frontend'],
  },
  {
    name: 'Tech Stack',
    options: ['Java/SpringBoot', 'Ruby'],
  },
];
