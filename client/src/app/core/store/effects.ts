import { Type } from "@angular/core";
import { LoadDataEffects } from "./station";

export * from "./station/station.effects";
export * from "./chart/chart.effects";

export const EFFECTS: Type<any>[] = [LoadDataEffects];
