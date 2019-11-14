import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { LayoutingModule } from '~layout/layout.module';

import { UserRoutingModule } from './user-routing.module';
import { UserLandingPageComponent } from './user-landing-page/user-landing-page.component';
import { SafePageComponent } from './containers/safe-page/safe-page.component';
import { SafeModule } from '~safe/safe.module';
import { AddSafeItemDialogComponent } from './containers/add-safe-item-dialog/add-safe-item-dialog.component';
import { SafeItemFormComponent } from './components/safe-item-form/safe-item-form.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [UserLandingPageComponent, SafePageComponent, AddSafeItemDialogComponent, SafeItemFormComponent],
  imports: [
    CommonModule,
    LayoutingModule,
    UserRoutingModule,
    MatListModule,
    MatIconModule,
    SafeModule,
    MatToolbarModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule
  ],
  exports: [SafePageComponent, AddSafeItemDialogComponent, SafeItemFormComponent],
  entryComponents: [AddSafeItemDialogComponent]
})
export class UserModule { }
