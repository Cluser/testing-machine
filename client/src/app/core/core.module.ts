import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from "@angular/common/http";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { REDUCERS } from "./store/reducers";
import { EFFECTS } from "./store/effects";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    StoreModule.forRoot(REDUCERS),
    EffectsModule.forRoot(EFFECTS),
    StoreDevtoolsModule.instrument({
      maxAge: 25, //  Retains last 25 states
    }),
  ],
})
export class CoreModule {}
