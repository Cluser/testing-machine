import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { ApiService } from "src/app/shared/api/api.service";
import { closeSocket, getData, increment, openSocket } from "./station.actions";
import { map, mergeMap, tap } from "rxjs/operators";

import { webSocket } from "rxjs/webSocket";

// Efect wykonuje sie zawsze po reducerze
@Injectable()
export class LoadDataEffects {
  constructor(private actions$: Actions, private apiService: ApiService) {}

  public subject = webSocket("ws://localhost:8000/ws");

  openSocket$ = createEffect(() =>
    this.actions$.pipe(
      ofType(openSocket),
      tap((x) => console.log(x)),
      mergeMap(() =>
        this.subject.pipe(
          map((data: any) => ({
            type: data.message,
            step: 1,
          })),
          tap((x) => console.log(x))
        )
      )
    )
  );

  closeSocket$ = createEffect(() =>
    this.actions$.pipe(
      ofType(closeSocket),
      tap(() => this.subject.complete()),
      mergeMap(() =>
        this.subject.pipe(
          map((data: any) => ({
            type: data.message,
            step: 1,
          })),
          tap((x) => console.log(x))
        )
      )
    )
  );
}
