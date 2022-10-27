import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarouselModule } from 'ngx-bootstrap/carousel';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { AlertModule } from 'ngx-bootstrap/alert';
import { ButtonsModule } from 'ngx-bootstrap/buttons';

@NgModule({
  imports: [
    CommonModule,
    CarouselModule.forRoot(),
    AccordionModule,
    AlertModule,
    ButtonsModule,
  ],
  exports: [CarouselModule],
})
export class AppBootstrapModule {}
