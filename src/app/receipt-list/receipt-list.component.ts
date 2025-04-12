import { Component } from '@angular/core';
import { ReceiptService } from '../receipt.service';

@Component({
  selector: 'app-receipt-list',
  templateUrl: './receipt-list.component.html'
})
export class ReceiptListComponent {
  constructor(private receiptService: ReceiptService) {}
}
