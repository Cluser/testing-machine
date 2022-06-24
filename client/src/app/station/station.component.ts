import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { closeSocket, getStation, openSocket } from "src/app/core/store/station";
import { IAppState, IStationState } from "src/app/core/store/states";
import { Observable, Subscription } from "rxjs";
import { initRecipes } from "../core/store/recipe";
import { SimpleModalService } from "ngx-simple-modal";
import { ModalConfirmComponent } from "../shared/modals/modal-confirm/modal-confirm.modal";
import { ApiService } from "../shared/api/api.service";

@Component({
  selector: "app-station",
  templateUrl: "./station.component.html",
  styleUrls: ["./station.component.scss"],
})
export class StationComponent implements OnInit {
  private subscriptions = new Subscription();
  private modalOpened: boolean = false;

  constructor(private store: Store<IAppState>, private simpleModalService: SimpleModalService, private apiService: ApiService) {}

  ngOnInit() {
    this.initSubscriptions();
    this.openSocket();
    this.initRecipes();
  }

  ngOnDestroy() {
    this.closeSubscriptions();
    this.closeSocket();
  }

  private initSubscriptions() {
    const station$: Observable<IStationState> = this.store.select(getStation);
    this.subscriptions.add(
      station$.subscribe((station: IStationState) => {
        if (station.module[0].process[0].status === 0) {
          this.openChangePlateModal();
        }
      })
    );
  }

  public openChangePlateModal(): void {
    if (!this.modalOpened) {
      this.modalOpened = true;
      this.simpleModalService.addModal(ModalConfirmComponent, { title: "Montowanie plate'a", message: "Czy zamontowałeś plate?" }).subscribe((isConfirmed) => {
        this.modalOpened = false;
        this.apiService.plc.confirmPlateChange(1).subscribe();
      });
    }
  }

  private closeSubscriptions() {
    this.subscriptions.unsubscribe();
  }

  private openSocket() {
    this.store.dispatch(openSocket());
  }

  private closeSocket() {
    this.store.dispatch(closeSocket());
  }

  private initRecipes() {
    this.store.dispatch(initRecipes());
  }
}
