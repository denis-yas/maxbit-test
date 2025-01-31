import { defineStore } from 'pinia';
import {
  distinctUntilChanged,
  from,
  Subject,
  switchMap,
  withLatestFrom,
} from 'rxjs';

import { availableCocktails } from '~/consts/availableCocktails.const';

const url =
  'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=<cocktail_code>';

export const useCocktailStore = defineStore('cocktail', () => {
  const currentCode: Ref<string> = ref('');
  const setSubject$ = new Subject<string>();

  setSubject$
    .pipe(
      distinctUntilChanged(),
      switchMap((newCode) => {
        const a = from(
          $fetch(url, {
            query: {
              s: newCode,
            },
          })
        );
        return a;
      }),
      withLatestFrom(setSubject$)
    )
    .subscribe(([a, b]) => {
      currentCode.value = b;
      console.log(a);
    });

  const set = (newCode: string) => {
    setSubject$.next(newCode || availableCocktails[0]);
  };

  return { set, currentCode };
});
