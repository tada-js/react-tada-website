import { tada } from 'react-tada';

interface LangState {
  lang: 'javascript' | 'typescript';
}

interface CountState {
  count: number;
}

export const useLangTada = tada<LangState>({
  lang: 'javascript' as 'javascript' | 'typescript',
});

export const useCountTada = tada<CountState>({
  count: 1,
});
