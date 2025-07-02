import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Customer } from 'src/models/customer';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private customerSubject = new BehaviorSubject<Customer | null>(null);

  constructor() {}

  setCustomer(customer: Customer): void {
    this.customerSubject.next(customer);
    localStorage.setItem('loggedCustomer', JSON.stringify(customer));
  }

  getCustomer(): Customer | null {
    return this.customerSubject.value;
  }

  getCustomerObservable() {
    return this.customerSubject.asObservable();
  }

  loadCustomerFromStorage(): void {
    const customerJson = localStorage.getItem('loggedCustomer');
    if (customerJson) {
      this.customerSubject.next(JSON.parse(customerJson));
    }
  }

  logout(): void {
    this.customerSubject.next(null);
    localStorage.removeItem('loggedCustomer');
  }
}
