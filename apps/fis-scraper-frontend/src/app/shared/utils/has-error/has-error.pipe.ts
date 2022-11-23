import { Pipe, PipeTransform } from '@angular/core';
import { FormControl } from '@angular/forms';

@Pipe({
  name: 'hasError',
})
export class HasErrorPipe implements PipeTransform {
  transform(formControl: FormControl, errorType: string): boolean {
    return formControl.hasError(errorType);
  }
}
