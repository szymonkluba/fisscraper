import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nestedValue',
})
export class NestedValuePipe implements PipeTransform {
  transform(value: object, path: string): unknown {
    return path.split('-').reduce((obj: object, key: string) => {
      if (hasProperty(obj, key)) {
        return obj[key];
      }
      return obj;
    }, value);
  }
}

function hasProperty(
  obj: object,
  key: string | number | symbol
): key is keyof typeof obj {
  if (obj) {
    return obj.hasOwnProperty(key);
  }
  return false;
}
