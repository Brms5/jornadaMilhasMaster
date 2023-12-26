import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable()
export class ErrosInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<HttpErrorResponse>, next: HttpHandler): Observable<HttpEvent<HttpErrorResponse>> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {

        let errorMessage = 'Ocorreu um erro desconhecido!';

        if(error.error instanceof ErrorEvent) {
          // Erro ocorreu no lado do client
          errorMessage = `Erro: ${error.error.message}`;
        } else if(error.status === 404) {
          // Erro ocorreu no lado do servidor
          errorMessage = `Recurso não encontrado: ${error.url}`;
        } else if(error.status === 403) {
          // Erro ocorreu no lado do servidor
          errorMessage = `Acesso negado: ${error.url}`;
        } else if(error.status === 500) {
          // Erro ocorreu no lado do servidor
          errorMessage = `Erro interno no servidor: ${error.url}`;
        } else if(error.status === 401) {
          // Erro ocorreu no lado do servidor
          errorMessage = `Não autorizado: ${error.url}`;
        }

        console.error(errorMessage);
        console.error(error);

        return throwError(() => new Error(error.message));
      }
    ));
  }
}
