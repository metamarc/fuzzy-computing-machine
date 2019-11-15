import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';

import { LayoutingModule } from '~layout/layout.module';

import { HomeRoutingModule } from './home-routing.module';
import { HomeLandingPageComponent } from './home-landing-page/home-landing-page.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { AdminEmailValidatorDirective } from './directives/admin-email-validator.directive';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [HomeLandingPageComponent, RegisterFormComponent, AdminEmailValidatorDirective],
  imports: [
    CommonModule,
    HomeRoutingModule,
    LayoutingModule,
    MatListModule,
    MatFormFieldModule,
    FormsModule,
    MatSelectModule,
    MatInputModule
  ]
})
export class HomeModule { }
