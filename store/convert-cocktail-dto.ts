import type { CocktailDto } from "~/entities/cocktail-dto.model";
import type { Cocktail } from "~/entities/cocktail.model";

export const convertCocktailDTO = (cocktail: CocktailDto): Cocktail => {
  const sources = getArrayFromProperty("strIngredient", cocktail);
  const measures = getArrayFromProperty("strMeasure", cocktail);
  const ingredients = sources
    .map((source, index) => ({
      ingredient: source,
      measure: measures[index],
    }))
    .filter((a) => !!a);

  const result = {
    ...cocktail,
    ingredients,
  };

  return result;
};

const getArrayFromProperty = (propStart: string, cocktail: CocktailDto) => {
  const result: string[] = [];
  for (const key in cocktail) {
    if (!new RegExp(propStart).test(key)) {
      continue;
    }

    const index = +key.substring(propStart.length);
    const value = cocktail[key as keyof CocktailDto];
    if (value) {
      result[index] = value;
    }
  }
  return result;
};
