import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderNavComponent } from './header-nav/header-nav.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { AppBootstrapModule } from './bootstrap.components.module';

@NgModule({
  imports: [CommonModule, RouterModule, AppBootstrapModule],
  exports: [HeaderNavComponent, FooterComponent],
  declarations: [HeaderNavComponent, FooterComponent],
})
export class ComponentsModule {}
