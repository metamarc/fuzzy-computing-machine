import { environment } from './../../environments/environment.prod';
import { SafeInMemDataService } from './services/in-memory-safe.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InMemoryDbService, HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    environment.production
      ? []
      : HttpClientInMemoryWebApiModule.forRoot(SafeInMemDataService, {
          delay: 500,
          dataEncapsulation: false,
          passThruUnknownUrl: true,
        }),
  ],
  providers: [{ provide: SafeInMemDataService, useExisting: InMemoryDbService }],
})
export class CoreModule {}
