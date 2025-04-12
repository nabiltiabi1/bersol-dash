import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReceiptService {
  private apiUrl = 'https://your-dolibarr-instance/api/index.php/receipts';

  constructor(private http: HttpClient) {}

  getReceipts() {
    return this.http.get(this.apiUrl);
  }

  createReceipt(receipt: any) {
    return this.http.post(this.apiUrl, receipt);
  }

  updateReceipt(id: number, receipt: any) {
    return this.http.put(`${this.apiUrl}/${id}`, receipt);
  }

  deleteReceipt(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
