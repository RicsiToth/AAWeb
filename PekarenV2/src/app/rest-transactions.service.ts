import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

export interface ITransaction {
  getTransactions$: () => Observable<any>
}

@Injectable({
  providedIn: 'root'
})
export class RestTransactionsService implements ITransaction {

  constructor(private http: HttpClient) { }

  getTransactions$(){
    return this.http.get("/api/transaction");
  }
}
