import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminLandingPageComponent } from './pages/admin-landing-page/admin-landing-page.component';
import { LayoutingModule } from '~layout/layout.module';
import { SafeListComponent } from './container/safe-list/safe-list.component';
import { SafeListElementComponent } from './container/safe-list-element/safe-list-element.component';
import { SafeRowComponent } from './components/safe-row/safe-row.component';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { SafeModule } from '~safe/safe.module';


@NgModule({
  declarations: [AdminLandingPageComponent, SafeListComponent, SafeListElementComponent, SafeRowComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    LayoutingModule,
    MatListModule,
    MatIconModule,
    MatTooltipModule,
    SafeModule
  ],
  exports: [SafeListElementComponent, SafeRowComponent]
})
export class AdminModule { }
