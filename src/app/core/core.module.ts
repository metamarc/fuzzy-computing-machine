import { TimingInterceptor } from './interceptors/timing.interceptors';
import { SafeInMemDataService } from './services/in-memory-safe.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InMemoryDbService, HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    environment.production
      ? []
      : HttpClientInMemoryWebApiModule.forRoot(SafeInMemDataService, {
          delay: 500,
          dataEncapsulation: false,
          passThruUnknownUrl: true,
        }),
  ],
  providers: [
    { provide: SafeInMemDataService, useExisting: InMemoryDbService },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TimingInterceptor,
      multi: true,
    }
  ],
})
export class CoreModule {}
