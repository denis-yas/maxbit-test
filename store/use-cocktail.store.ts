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
import type { CocktailsDto } from '~/entities/cocktails-dto.model';

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
          }) as Promise<CocktailsDto>
        )
      ),
      withLatestFrom(setSubject$)
    )
    .subscribe(([response, code]) => {
      currentCode.value = code;
      cocktails.value = response.drinks;
    });

  const set = (newCode: string) => {
    setSubject$.next(newCode || availableCocktails[0]);
  };

  return { set, currentCode, cocktails };
});
