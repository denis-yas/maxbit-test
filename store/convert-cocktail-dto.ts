import type { CocktailDto } from '~/entities/cocktail-dto.model';
import type { Cocktail } from '~/entities/cocktail.model';

export const convertCocktailDTO = (cocktail: CocktailDto): Cocktail => {
  return {
    ...cocktail,
    ingredients: getArrayFromProperty('strIngredient', cocktail),
    measures: getArrayFromProperty('strMeasure', cocktail),
  };
};

const getArrayFromProperty = (propStart: string, cocktail: CocktailDto) => {
  const result: string[] = [];
  let key: keyof CocktailDto;
  for (key in cocktail) {
    if (new RegExp(propStart).test(key)) {
      continue;
    }

    const index = +key.substring(propStart.length);
    const value = cocktail[key];
    if (value) {
      result[index] = value;
    }
  }
  return result;
};
