import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { catchError, of } from 'rxjs';

interface Product {
  id: number;
  label: string;
  price: number;
  [key: string]: any;
}

@Component({
  selector: 'app-product-list',
  template: `
    <input [(ngModel)]="searchTerm" (input)="searchProducts()" placeholder="Search products">
    <div *ngIf="error" class="error">{{ error }}</div>
    <ul>
      <li *ngFor="let product of paginatedProducts">
        {{ product.label }} - {{ product.price }}
      </li>
    </ul>
    <div class="pagination">
      <button (click)="prevPage()" [disabled]="currentPage === 1">Previous</button>
      <span>Page {{ currentPage }} of {{ totalPages }}</span>
      <button (click)="nextPage()" [disabled]="currentPage === totalPages">Next</button>
    </div>
  `,
  styles: [`
    .error { color: red; }
    .pagination {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 20px;
      margin-top: 20px;
    }
    button {
      padding: 8px 16px;
      background: #2c3e50;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }
    button:disabled {
      background: #95a5a6;
      cursor: not-allowed;
    }
  `]
})
export class ProductListComponent {
  products: Product[] = [];
  paginatedProducts: Product[] = [];
  searchTerm = '';
  error: string | null = null;
  currentPage = 1;
  itemsPerPage = 10;
  totalPages = 1;

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.searchProducts();
  }

  searchProducts() {
    this.error = null;
    this.currentPage = 1;
    this.productService.getProducts(this.searchTerm)
      .pipe(
        catchError(err => {
          this.error = 'Failed to load products';
          console.error(err);
          return of([]);
        })
      )
      .subscribe((data: Product[]) => {
        this.products = data;
        this.updatePagination();
      });
  }

  updatePagination() {
    this.totalPages = Math.ceil(this.products.length / this.itemsPerPage);
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.paginatedProducts = this.products.slice(startIndex, endIndex);
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.updatePagination();
    }
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updatePagination();
    }
  }
}
