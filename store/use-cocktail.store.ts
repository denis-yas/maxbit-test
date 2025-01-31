import { defineStore } from 'pinia';
import {
  distinctUntilChanged,
  from,
  Subject,
  switchMap,
  withLatestFrom,
} from 'rxjs';

import { availableCocktails } from '~/consts/availableCocktails.const';
import type { Cocktail } from '~/entities/cocktail.model';

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php';

export const useCocktailStore = defineStore('cocktail', () => {
  const currentCode: Ref<string> = ref('');
  const cocktails: Ref<Cocktail[]> = ref([]);
  const setSubject$ = new Subject<string>();

  setSubject$
    .pipe(
      distinctUntilChanged(),
      switchMap((newCode) =>
        from(
          $fetch(url, {
            query: {
              s: newCode,
            },
          })
        )
      ),
      withLatestFrom(setSubject$)
    )
    .subscribe(([a, b]) => {
      currentCode.value = b;
      cocktails.value = a as Cocktail[];
    });

  const set = (newCode: string) => {
    setSubject$.next(newCode || availableCocktails[0]);
  };

  return { set, currentCode };
});
