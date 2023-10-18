import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError, map } from 'rxjs';
import { cloudUrl, createHeader } from 'src/app/utils';
import { EmpresaMessage, EmpresaType } from './empresas.types';

@Injectable({
  providedIn: 'root',
})
export class EmpresaService {
  constructor(private empresaService: HttpClient) {}

  private url = `${cloudUrl}/company`;

  public bringCompanies() {
    return this.empresaService.get<EmpresaType[]>(this.url).pipe(
      catchError((error) => {
        return throwError(() => new Error(error));
      }),
    );
  }

  public createOrder(data: EmpresaType): Observable<EmpresaMessage> {
    return this.empresaService.post<EmpresaMessage>(this.url, data, createHeader()).pipe(
      map((data:EmpresaMessage) => {
        return data;
      }),
    );
  }

  public deleteOrder(data: number): Observable<EmpresaMessage> {
    const altUrl = `${cloudUrl}/company/${data}`;

    return this.empresaService.delete<EmpresaMessage>(altUrl, createHeader()).pipe(
      map((data) => {
        return data;
      }),
    );
  }

  public updateCompanie(data: number, body: EmpresaType): Observable<EmpresaMessage> {
    const altUrl = `${cloudUrl}/company/${data}`;
    return this.empresaService.put<EmpresaMessage>(altUrl, body, createHeader()).pipe(
      map((data:EmpresaMessage) => {
        return data;
      }),
    );
  }
}
