import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarouselModule } from 'ngx-bootstrap/carousel';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { AlertModule } from 'ngx-bootstrap/alert';
import { ButtonsModule } from 'ngx-bootstrap/buttons';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxNavbarModule } from 'ngx-bootstrap-navbar';

@NgModule({
  imports: [
    CommonModule,
    CarouselModule.forRoot(),
    AccordionModule,
    AlertModule,
    ButtonsModule,
    BrowserAnimationsModule,
    BrowserModule,
    NgxNavbarModule,
  ],
  exports: [CarouselModule, NgxNavbarModule],
})
export class AppBootstrapModule {}
