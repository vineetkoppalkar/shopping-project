import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

import { Transaction } from './transaction';

@Injectable({
  providedIn: 'root',
})
export class TransactionService {
  private allTransactionsSource = new BehaviorSubject<Transaction[]>([]);
  allTransactions = this.allTransactionsSource.asObservable();
  transactions: Transaction[] = new Array<Transaction>();

  constructor() {}

  addTransaction(transaction: Transaction): void {
    const previousTransactions = this.getTransactions();
    previousTransactions.push(transaction);
    this.allTransactionsSource.next(previousTransactions);
  }

  getTransactions(): Transaction[] {
    return this.allTransactionsSource.getValue();
  }
}
