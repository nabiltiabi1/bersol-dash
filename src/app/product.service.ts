import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

interface DolibarrProduct {
  id: number;
  label: string;
  price: number;
  [key: string]: any;
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'https://erp.bersolenergie.store/api/index.php/products';
  private apiKey = '74s6OOrFtrhYPwks0WP36g9tCCOG696j';

  constructor(private http: HttpClient) {}

  private getHeaders(): HttpHeaders {
    return new HttpHeaders({
      'DOLAPIKEY': this.apiKey,
      'Content-Type': 'application/json'
    });
  }

  getProducts(searchTerm: string = ''): Observable<DolibarrProduct[]> {
    let params = new HttpParams();
    if (searchTerm) {
      params = params.set('sqlfilters', `(t.label:'%${searchTerm}%')`);
    }
    
    return this.http.get<DolibarrProduct[]>(this.apiUrl, {
      headers: this.getHeaders(),
      params
    }).pipe(
      map((response: any) => {
        if (Array.isArray(response)) {
          return response;
        }
        return [];
      })
    );
  }
}
