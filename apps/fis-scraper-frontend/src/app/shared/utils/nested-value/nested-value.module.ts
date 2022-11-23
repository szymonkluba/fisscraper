import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NestedValuePipe } from './nested-value.pipe';

@NgModule({
  declarations: [NestedValuePipe],
  imports: [CommonModule],
  exports: [NestedValuePipe],
})
export class NestedValueModule {}
