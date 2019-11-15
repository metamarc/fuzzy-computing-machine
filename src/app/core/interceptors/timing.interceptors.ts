import { LoggerService } from './../services/logger.service';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest, HttpResponse } from '@angular/common/http';

export class TimingInterceptor implements HttpInterceptor {

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const start = Date.now();
    return next.handle(request)
      .pipe(
        tap(event => {
          if (event instanceof HttpResponse) {
            const elapsed = Date.now() - start;
            LoggerService.log(`Request took ${elapsed} ms`);
          }
        })
      );
  }

}
