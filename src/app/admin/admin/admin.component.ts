import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CustomerService } from 'src/app/core/customer.service';
import { Customer } from 'src/models/customer';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss',
})
export class AdminComponent {
  customers: Customer[] = [];

  constructor(private customerService: CustomerService) {}

  ngOnInit(): void {
    this.customerService.getAllCustomers().subscribe((data) => {
      this.customers = data;
      console.log(data);
    });
  }
}
