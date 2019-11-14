import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { LayoutingModule } from '~layout/layouting.module';
import { SafeModule } from '~safe/safe.module';

import { HomeLandingPageComponent } from './home-landing-page/home-landing-page.component';
import { HomeRoutingModule } from './home-routing.module';


@NgModule({
  declarations: [HomeLandingPageComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    LayoutingModule,
    SafeModule,
    MatListModule
  ]
})
export class HomeModule { }
