import {Injectable} from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest
} from '@angular/common/http';

import {Observable} from 'rxjs';

/** Pass untouched request through to the next request handler. */
@Injectable()
export class NoSlashInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any>> {

    if (req.url.charAt(req.url.length - 1) === '/') {
      const newReq = req.clone({
        url: req.url.slice(0, -1)
      });
      return next.handle(newReq);
    }
    return next.handle(req);
  }
}
