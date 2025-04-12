import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="app-container">
      <nav class="left-menu">
        <h2>Menu</h2>
        <ul>
          <li><button (click)="currentView = 'products'">Products</button></li>
          <li><button (click)="currentView = 'receipts'">Receipts</button></li>
          <li><button (click)="currentView = 'categories'">Categories</button></li>
        </ul>
      </nav>
      <div class="content">
        <h1>Warehouse Sales Management</h1>
        <app-product-list *ngIf="currentView === 'products'"></app-product-list>
        <app-receipt-list *ngIf="currentView === 'receipts'"></app-receipt-list>
        <div *ngIf="currentView === 'categories'">
          <h2>Categories</h2>
          <!-- Categories content will go here -->
        </div>
      </div>
    </div>
  `,
  styles: [`
    .app-container {
      display: flex;
      min-height: 100vh;
    }
    .left-menu {
      width: 200px;
      background: #2c3e50;
      padding: 20px;
      color: white;
    }
    .left-menu ul {
      list-style: none;
      padding: 0;
    }
    .left-menu li {
      margin-bottom: 10px;
    }
    .left-menu button {
      width: 100%;
      padding: 10px;
      background: #34495e;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }
    .left-menu button:hover {
      background: #3d566e;
    }
    .content {
      flex: 1;
      padding: 20px;
    }
  `]
})
export class AppComponent {
  currentView: 'products' | 'receipts' | 'categories' = 'products';
}
