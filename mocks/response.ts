import type { CocktailDto } from '~/entities/cocktail-dto.model';
import type { CocktailsDto } from '../entities/cocktails-dto.model';

const item = {
  strDrink: 'strDrink',
  strCategory: 'strCategory',
  strAlcoholic: 'strAlcoholic',
  strGlass: 'strGlass',
  strInstructions: 'strInstructions',
  strIngredient1: 'strIngredient1',
  strIngredient2: 'strIngredient2',
  strMeasure1: 'strMeasure1',
  strMeasure2: 'strMeasure2',
  strDrinkThumb: 'mock-image.png',
} as CocktailDto;

const testData = {
  drinks: [],
} as unknown as CocktailsDto;

for (let i = 0; i < 10; i++) {
  (testData.drinks as CocktailDto[]).push(item);
}

export { testData };
