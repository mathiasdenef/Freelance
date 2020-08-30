import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SimulatieService {

  private apiUrl = "api/simulaties"

  constructor(private http: HttpClient) { }

  getAll(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}`);
  }

  getById(id: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/${id}`);
  }

  // addProxy(proxy: Proxy): Observable<Proxy> {
  //     return this.httpClient.post<Proxy>(`${this.apiUrl}`, proxy);
  // }

  // updateProxy(proxy: Proxy): Observable<Proxy> {
  //     return this.httpClient.put<Proxy>(`${this.apiUrl}`, proxy);
  // }

  // deleteProxy(proxyId: number): Observable<number> {
  //     return this.httpClient.delete<number>(`${this.apiUrl}/${proxyId}`);
  // }
}
