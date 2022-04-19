import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { selectUrl } from "src/app/core/store/router";
import { IAppState } from "src/app/core/store/states";
import { Observable, Subscription } from "rxjs";

@Component({
  selector: "app-menu",
  templateUrl: "./menu.component.html",
  styleUrls: ["./menu.component.scss"],
})
export class MenuComponent implements OnInit {
  private subscriptions = new Subscription();
  public selectedUrl: string = "";

  constructor(private store: Store<IAppState>) {}

  ngOnInit(): void {
    this.initSubscriptions();
  }

  ngOnDestroy(): void {
    this.closeSubscriptions();
  }

  private initSubscriptions(): void {
    const url$: Observable<string> = this.store.select(selectUrl);
    this.subscriptions.add(url$.subscribe((url: string) => this.onUrlUpdate(url)));
  }

  private closeSubscriptions(): void {
    this.subscriptions.unsubscribe();
  }

  private onUrlUpdate(url: string): void {
    this.selectedUrl = url;
  }
}
