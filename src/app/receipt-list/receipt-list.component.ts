import { Component } from '@angular/core';
import { ReceiptService } from '../receipt.service';

@Component({
  selector: 'app-receipt-list',
  templateUrl: './receipt-list.component.html',
  styleUrls: ['./receipt-list.component.css']
})
export class ReceiptListComponent {
  constructor(private receiptService: ReceiptService) {}
}
