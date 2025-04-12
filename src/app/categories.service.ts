import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

interface DolibarrCategory {
  id: number;
  label: string;
  description: string;
  [key: string]: any;
}

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  private apiUrl = 'https://erp.bersolenergie.store/api/index.php/categories';
  private apiKey = '74s6OOrFtrhYPwks0WP36g9tCCOG696j';

  constructor(private http: HttpClient) {}

  private getHeaders(): HttpHeaders {
    return new HttpHeaders({
      'DOLAPIKEY': this.apiKey,
      'Content-Type': 'application/json'
    });
  }

  getCategories(searchTerm: string = ''): Observable<DolibarrCategory[]> {
    return this.http.get<DolibarrCategory[]>(
      `${this.apiUrl}?search=${searchTerm}`,
      { headers: this.getHeaders() }
    );
  }
}
