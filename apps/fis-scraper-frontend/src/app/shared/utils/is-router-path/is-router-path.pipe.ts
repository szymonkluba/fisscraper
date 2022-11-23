import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'isRouterPath',
})
export class IsRouterPathPipe implements PipeTransform {
  transform(value: string | null): boolean {
    return Boolean(value && value.includes('scraper'));
  }
}
