import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize',
})
export class CapitalizePipe implements PipeTransform {
  transform(value: string): string {
    return value
      .toLowerCase()
      .replace(/(^[a-z]|[-_][a-z])/g, group =>
        group.toUpperCase().replace('_', ' ')
      );
  }
}
