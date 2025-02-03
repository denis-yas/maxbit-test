import type { CocktailDto } from "./cocktail-dto.model";

type Ingredient = {
  ingredient: string;
  measure: string;
};

export type Cocktail = CocktailDto & {
  ingredients: Ingredient[];
};
