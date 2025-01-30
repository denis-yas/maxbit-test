import { defineStore } from "pinia";
import { from, Subject, switchMap } from "rxjs";

import { availableCocktails } from "~/consts/availableCocktails.const";

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=<cocktail_code>';

export const useCocktailStore = defineStore("cocktail", () => {
  const smth = ref(5);
  const currentCode: Ref<string> = ref('');
  const setSubject$ = new Subject();

  const set = (newCode: string) => {
    setSubject$.next(newCode);
  }

  setSubject$.pipe(switchMap((newCode) => from($fetch(url, {
      query: {
        s: newCode
      }
    }))
  )).subscribe(a => {
    console.log(a);
  });

  return { smth, set };
});