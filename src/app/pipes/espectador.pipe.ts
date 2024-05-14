import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'espectador',
  standalone: true,
})
export class EspectadorPipe implements PipeTransform {
  transform(value: string): string {
    return value === 'e' ? 'Extranjero' : 'Local';
  }
}
