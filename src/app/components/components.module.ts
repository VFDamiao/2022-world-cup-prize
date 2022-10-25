import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderNavComponent } from './header-nav/header-nav.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  imports: [CommonModule],
  exports: [HeaderNavComponent, FooterComponent],
  declarations: [HeaderNavComponent, FooterComponent],
})
export class ComponentsModule {}
