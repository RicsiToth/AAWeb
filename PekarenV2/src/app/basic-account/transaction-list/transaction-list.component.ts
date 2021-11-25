import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {RestTransactionsService} from '../../rest-transactions.service'

interface Transaction {
  fullName: string;
  bankCode: string;
  accountNumber: string;
}

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.css']
})
export class TransactionListComponent implements OnInit {
  
  public config : Transaction = {fullName: "", bankCode: "", accountNumber: ""};

  constructor(public transactionService: RestTransactionsService) { 
    
  }

  ngOnInit(): void {
    this.transactionService.getTransactions$()
    .subscribe((data: any) => this.config = {
      fullName: data.fullName,
      bankCode:  data.bankCode,
      accountNumber: data.accountNumber,
  });
  console.log(this.transactionService.getTransactions$());
  }

}
