import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarouselModule } from 'ngx-bootstrap/carousel';

@NgModule({
  imports: [CommonModule, CarouselModule.forRoot()],
  exports: [CarouselModule],
})
export class AppBootstrapModule {}
