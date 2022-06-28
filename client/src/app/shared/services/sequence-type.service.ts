import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class DataShareService {
  constructor() {}

  public selectedSequence = new BehaviorSubject<string>("grinding");
}
