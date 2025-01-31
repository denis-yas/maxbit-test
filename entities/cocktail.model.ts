import type { CocktailDto } from './cocktail-dto.model';

export type Cocktail = CocktailDto & {
  ingredients: string[];
  measures: string[];
};
