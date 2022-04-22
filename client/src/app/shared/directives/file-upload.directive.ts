import { Directive, ElementRef, HostListener } from "@angular/core";

@Directive({
  selector: "[appFileUpload]",
})
export class FileUploadDirective {
  constructor(private el: ElementRef) {}

  @HostListener("mouseenter") onMouseEnter() {
    this.el.nativeElement.innerHTML = "<div class='upload-image'>Wrzuć obrazek</div>";
    this.el.nativeElement.style = "cursor: pointer";
    this.el.nativeElement.children[0].style = "\
      font-size: 50px;\
    ";
    this.highlight("grey");
  }

  @HostListener("mouseleave") onMouseLeave() {
    this.el.nativeElement.innerHTML = "Wrzuć obrazek";
    this.highlight("transparent");
  }

  @HostListener("dragover", ["$event"]) onDragOver(evt: any) {}

  @HostListener("click", ["$event"]) onClick(evt: any) {
    console.log(this.el.nativeElement.children[0]);
    this.el.nativeElement.children[0].style.backgroundColor = "red";
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
    this.el.nativeElement.style.transition = "background 0.5s linear";
  }
}
