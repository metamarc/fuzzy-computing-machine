import { ItemListComponent } from './../../safe/components/item-list/item-list.component';
import { MatIconModule } from '@angular/material/icon';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';

import { LayoutingModule } from '~layout/layout.module';

import { UserRoutingModule } from './user-routing.module';
import { UserLandingPageComponent } from './user-landing-page/user-landing-page.component';
import { SafePageComponent } from './containers/safe-page/safe-page.component';
import { SafeModule } from '~safe/safe.module';


@NgModule({
  declarations: [UserLandingPageComponent, SafePageComponent],
  imports: [
    CommonModule,
    LayoutingModule,
    UserRoutingModule,
    MatListModule,
    MatIconModule,
    SafeModule
  ],
  exports: [SafePageComponent]
})
export class UserModule { }
