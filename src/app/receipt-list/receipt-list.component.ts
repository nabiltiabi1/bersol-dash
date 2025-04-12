import { Component } from '@angular/core';
import { ReceiptService } from '../receipt.service';

@Component({
  selector: 'app-receipt-list',
  template: `
    <div>
      <h2>Receipts</h2>
      <!-- Receipt list will be implemented here -->
    </div>
  `
})
export class ReceiptListComponent {
  constructor(private receiptService: ReceiptService) {}
}
