import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserLandingPageComponent } from './user-landing-page/user-landing-page.component';
import { SafeModule } from '~safe/safe.module';
import { LayoutingModule } from '~layout/layouting.module';


@NgModule({
  declarations: [UserLandingPageComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    LayoutingModule,
    SafeModule
  ]
})
export class UserModule { }
