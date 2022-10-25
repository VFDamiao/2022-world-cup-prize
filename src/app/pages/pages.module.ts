import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FormPageComponent } from './form-page/form-page.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { TutorialComponent } from './tutorial/tutorial.component';
import { ComponentsModule } from '../components/components.module';
import { AppBootstrapModule } from '../components/bootstrap.components.module';

@NgModule({
  imports: [CommonModule, ComponentsModule, AppBootstrapModule],
  exports: [
    AboutComponent,
    ContactComponent,
    FormPageComponent,
    LandingPageComponent,
    TutorialComponent,
  ],
  declarations: [
    AboutComponent,
    ContactComponent,
    FormPageComponent,
    LandingPageComponent,
    TutorialComponent,
  ],
})
export class PagesModule {}
