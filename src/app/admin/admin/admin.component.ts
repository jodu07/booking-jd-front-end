import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CustomerService } from 'src/app/core/customer.service';
import { Customer } from 'src/models/customer';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule, MatTableModule],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss',
})
export class AdminComponent {
  dataSource: Customer[] = [];
  customersData: Customer[] = [];
  displayedColumns: string[] = [
    'id',
    'name',
    'email',
    'username',
    'password',
    'bookings',
  ];

  constructor(private customerService: CustomerService) {}

  ngOnInit(): void {
    this.customerService.getAllCustomers().subscribe((data) => {
      this.customersData = data;
      this.dataSource = data;
    });
  }
}
