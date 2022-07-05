import { Directive, ElementRef } from "@angular/core";

@Directive({
  selector: "[appAlarmBlink]",
})
export class AlarmBlinkDirective {
  constructor(private el: ElementRef) {}

  ngOnInit() {
    this.blinkRed();
  }

  private blinkRed() {
    this.el.nativeElement.style.backgroundColor = "red";
    this.el.nativeElement.style.color = "black";
    setTimeout(() => this.blinkBlack(), 500);
  }

  private blinkBlack() {
    this.el.nativeElement.style.backgroundColor = "black";
    this.el.nativeElement.style.color = "red";
    setTimeout(() => this.blinkRed(), 500);
  }
}
