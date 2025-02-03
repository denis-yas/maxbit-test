import { defineStore } from "pinia";
import {
  catchError,
  distinctUntilChanged,
  EMPTY,
  from,
  map,
  Subject,
  switchMap,
  tap,
  withLatestFrom,
} from "rxjs";

import type { Cocktail } from "~/entities/cocktail.model";
import type { CocktailsDto } from "~/entities/cocktails-dto.model";
import { convertCocktailDTO } from "./convert-cocktail-dto";
import { useLoadingIndicatorStore } from "./use-loading-indicator-store";

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php";

export const useCocktailStore = defineStore("cocktail", () => {
  const currentCode: Ref<string> = ref("");
  const cocktails: Ref<Cocktail[]> = ref([]);
  const setSubject$ = new Subject<string>();
  const loadingIndicator = useLoadingIndicatorStore();

  setSubject$
    .pipe(
      distinctUntilChanged(),
      tap(() => loadingIndicator.set(true)),
      switchMap((newCode) =>
        from(
          $fetch(url, {
            query: {
              s: newCode,
            },
          }) as Promise<CocktailsDto>,
        ),
      ),
      map((a) => {
        if (!Array.isArray(a.drinks)) {
          throw new Error(a.drinks);
        }
        return a.drinks.map(convertCocktailDTO);
      }),
      withLatestFrom(setSubject$),
      catchError((e: Error) => {
        showError({
          statusCode: 500,
          statusMessage: e.message || "Something bad has happened",
        });
        return EMPTY;
      }),
    )
    .subscribe(([response, code]) => {
      currentCode.value = code;
      cocktails.value = response;
      loadingIndicator.set(false);
    });

  const set = (code: string) => {
    setSubject$.next(code);
  };

  return { set, currentCode, cocktails };
});
