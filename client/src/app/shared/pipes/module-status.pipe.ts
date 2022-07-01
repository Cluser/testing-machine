import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "moduleStatus",
})
export class ModuleStatusPipe implements PipeTransform {
  transform(value: number): string {
    switch (value) {
      case 1:
        return "Przerywanie";
      case 2:
        return "Przerywanie zakończone";
      case 3:
        return "Bazowanie";
      case 4:
        return "Bazowanie zakończone";
      case 5:
        return "Manual";
      case 6:
        return "Praca";
      case 7:
        return "Praca zakończona";
      case 8:
        return "Wstrzymanie";
      case 9:
        return "Zatrzymywanie";
      case 10:
        return "Zatrzymywanie zakończone";
      default:
        return "Błąd danych";
    }
  }
}
