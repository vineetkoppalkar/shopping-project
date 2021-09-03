import { Component, OnInit } from '@angular/core';

import { Product } from '../product';
import { ProductsService } from '../products.service';
import { Transaction } from '../transaction';
import { User } from '../user';
import { UserService } from '../user.service';
import { TransactionService } from '../transaction.service';
import { AlertService } from '../alert.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];
  currentUser: User | undefined;

  constructor(
    private productService: ProductsService,
    private userService: UserService,
    private transactionService: TransactionService,
    private alertService: AlertService
  ) {}

  ngOnInit(): void {
    this.getCurrentUser();
    this.getProducts();
  }

  getCurrentUser(): void {
    this.currentUser = this.userService.getCurrentUser()
  }

  getProducts(): void {
    this.productService
      .getProducts()
      .subscribe((products) => (this.products = products));
  }

  buy(user: User, product: Product): void {
    const transaction: Transaction = { id: Date.now(), user, product };
    this.transactionService.addTransaction(transaction);
    this.alertService.changeMessage(`${user.name} purchased ${product.title}`)
  }
}
