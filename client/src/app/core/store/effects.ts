import { Type } from "@angular/core";
import { LoadDataEffects } from "./station";
import { ChartEffects } from "./chart";
import { RecipeEffects } from "./recipe";

export * from "./station/station.effects";
export * from "./chart/chart.effects";
export * from "./recipe/recipe.effects";

export const EFFECTS: Type<any>[] = [LoadDataEffects, ChartEffects, RecipeEffects];
