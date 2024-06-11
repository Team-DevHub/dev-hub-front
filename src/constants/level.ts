const PATH = '/assets/level/';

export interface LevelType {
  level: string;
  icon: string;
  name: string;
}

export type LevelKeys = keyof typeof LEVEL;

export const LEVEL: {
  [key: number]: LevelType;
} = {
  1: {
    level: 'Lv.1',
    icon: PATH + 'Lv.1.svg',
    name: '나는야 새싹',
  },
  2: {
    level: 'Lv.2',
    icon: PATH + 'Lv.2.svg',
    name: '언제나 고통을 주는 버그',
  },
  3: {
    level: 'Lv.3',
    icon: PATH + 'Lv.3.svg',
    name: '열정열정열정!',
  },
  4: {
    level: 'Lv.4',
    icon: PATH + 'Lv.4.svg',
    name: '이제 디버깅은 껌',
  },
  5: {
    level: 'Lv.5',
    icon: PATH + 'Lv.5.svg',
    name: '개발자에게 밤샘은 기본',
  },
};
