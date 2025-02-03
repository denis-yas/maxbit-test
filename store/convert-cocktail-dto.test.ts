import { describe, it, expectTypeOf, expect, beforeEach } from "vitest";
import { convertCocktailDTO } from "./convert-cocktail-dto";
import { testData } from "../mocks/response";
import type { CocktailDto } from "~/entities/cocktail-dto.model";

describe("convertCocktailDTO", () => {
  let data: CocktailDto;
  beforeEach(() => {
    data = { ...testData } as unknown as CocktailDto;
    data.strIngredient1 = "ingredient-1";
    data.strIngredient2 = "ingredient-2";
    data.strIngredient3 = "ingredient-3";
    data.strMeasure1 = "measure_1";
    data.strMeasure1 = "measure_2";
    data.strMeasure1 = "measure_3";
  });

  it("should create ingredients array", () => {
    const cocktail = convertCocktailDTO(data);

    expectTypeOf(cocktail.ingredients).toBeArray();
  });

  it("should create first ingredient equal to strIngredient1", () => {
    const cocktail = convertCocktailDTO(data);
    const firstIngredient = cocktail.ingredients[0];

    expect(firstIngredient.ingredient).toBe(data.strIngredient1);
  });

  it("should create first ingredient equal to strMeasure1", () => {
    const cocktail = convertCocktailDTO(data);
    const firstIngredient = cocktail.ingredients[0];

    expect(firstIngredient.measure).toBe(data.strMeasure1);
  });

  it("should create ingredients with count more equal to 3", () => {
    const cocktail = convertCocktailDTO(data);
    expect(cocktail.ingredients.length).toBe(3);
  });

  it("should not create ingredient when there is no strIngredient", () => {
    data.strIngredient4 = "";
    const cocktail = convertCocktailDTO(data);
    expect(cocktail.ingredients.length).toBe(3);
  });
  it("should create ingredient even when there is no strMeasure", () => {
    data.strMeasure4 = "";
    const cocktail = convertCocktailDTO(data);
    expect(cocktail.ingredients.length).toBe(3);
  });
});
