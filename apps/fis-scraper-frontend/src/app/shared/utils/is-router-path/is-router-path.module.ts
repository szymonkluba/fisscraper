import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IsRouterPathPipe } from './is-router-path.pipe';

@NgModule({
  declarations: [IsRouterPathPipe],
  exports: [IsRouterPathPipe],
  imports: [CommonModule],
})
export class IsRouterPathModule {}
