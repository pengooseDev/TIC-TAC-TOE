import { atom } from 'recoil';

export const isDarkAtom = atom({
  key: 'isDarkAtom',
  default: true,
});

export const searchDataAtom = atom({
  key: 'searchDataAtom',
  default: {},
});
