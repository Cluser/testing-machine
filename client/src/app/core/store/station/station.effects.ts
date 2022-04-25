import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { ApiService } from "src/app/shared/api/api.service";
import { closeSocket, getStationData, openSocket, socketClosed, socketOpened } from "./station.actions";
import { map, mergeMap, tap } from "rxjs/operators";
import { webSocket } from "rxjs/webSocket";
import { addChartData } from "../chart";

// Efect wykonuje sie zawsze po reducerze
@Injectable()
export class LoadDataEffects {
  constructor(private actions$: Actions, private apiService: ApiService) {}

  public subject = webSocket("ws://localhost:8000/ws");
  public date = new Date();

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
            type: getStationData.type,
            station: data,
          }))
        )
      )
      // tap((x) => console.log(x))
    )
  );

  closeSocket$ = createEffect(() =>
    this.actions$.pipe(
      ofType(closeSocket),
      tap(() => this.subject.complete()),
      map(() => ({
        type: socketClosed.type,
      }))
    )
  );

  getStationData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getStationData),
      map((data) => ({
        type: addChartData.type,
        chartData: [
          { name: data.station.timestamp, value: data.station.module[0].process[0].spindle_velocity },
          { name: data.station.timestamp, value: data.station.module[1].process[0].spindle_velocity },
          { name: data.station.timestamp, value: data.station.module[2].process[0].spindle_velocity },
        ],
      }))
    )
  );
}
