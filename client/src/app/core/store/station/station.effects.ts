import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { ApiService } from "src/app/shared/api/api.service";
import { closeSocket, getData, openSocket, socketClosed, socketOpened } from "./station.actions";
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
      map(() => ({
        type: socketOpened.type,
      }))
    )
  );

  socketOpened$ = createEffect(() =>
    this.actions$.pipe(
      ofType(socketOpened),
      mergeMap(() =>
        this.subject.pipe(
          map((data: any) => ({
            type: getData.type,
            velocity: data.module[0].process[0].spindle_velocity,
            time: 2,
          }))
        )
      )
    )
  );

  closeSocket$ = createEffect(() =>
    this.actions$.pipe(
      ofType(closeSocket),
      tap(() => this.subject.complete()),
      map((data: any) => ({
        type: socketClosed.type,
      }))
    )
  );

  // socketClosed$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(socketClosed)
  //   )
  // );
}
