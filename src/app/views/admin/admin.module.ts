import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { SafeModule } from '~safe/safe.module';
import { AdminLandingPageComponent } from './admin-landing-page/admin-landing-page.component';
import { LayoutingModule } from '~layout/layouting.module';


@NgModule({
  declarations: [AdminLandingPageComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    LayoutingModule,
    SafeModule
  ]
})
export class AdminModule { }
