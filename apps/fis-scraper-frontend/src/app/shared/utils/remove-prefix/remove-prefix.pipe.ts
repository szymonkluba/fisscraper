import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'removePrefix',
})
export class RemovePrefixPipe implements PipeTransform {
  transform(value: string, pattern: RegExp): string {
    return value.replace(pattern, '');
  }
}
