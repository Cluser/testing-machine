import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "moduleStatus",
})
export class ModuleStatusPipe implements PipeTransform {
  transform(value: number): string {
    switch (value) {
      case 0:
        return "Wyłączony";
      case 1:
        return "Pracuje";
      case 2:
        return "Manual";
      case 4000:
        return "Bazowanie";
      default:
        return "Błąd danych";
    }
  }
}
