import { Type } from "@angular/core";
import { LoadDataEffects } from "./station";

export * from "./station/station.effects";

export const EFFECTS: Type<any>[] = [LoadDataEffects];
