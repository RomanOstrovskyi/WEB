import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {AuthService} from "../auth/auth.service";

@Injectable()
export class BasicInterceptor implements HttpInterceptor {

  constructor(private auth: AuthService) {}


  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    request = request.clone({
      setHeaders: {
        Authorization: `Basic ${this.auth.getToken()}`
      }
    });
    return next.handle(request);
  }
}
