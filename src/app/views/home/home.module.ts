import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeLandingPageComponent } from './home-landing-page/home-landing-page.component';
import { LayoutModule } from '~layout/layout.module';
import { SafeModule } from '~safe/safe.module';


@NgModule({
  declarations: [HomeLandingPageComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    LayoutModule,
    SafeModule
  ]
})
export class HomeModule { }
