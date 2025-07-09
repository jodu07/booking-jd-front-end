import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CustomerService } from 'src/app/core/customer.service';
import { Customer } from 'src/models/customer';
import { MatTableModule } from '@angular/material/table';
import { RouterModule } from '@angular/router';
import { MatButton } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { first } from 'rxjs';
import { AddCustomerModalComponent } from '../add-customer-modal/add-customer-modal.component';

/**
 * Admin component.
 */
@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    RouterModule,
    MatButton,
    MatDialogModule,
  ],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss',
})
export class AdminComponent {
  /** Data list customers for table. */
  customer!: Customer;
  /** Data list customers for table. */
  dataSource: Customer[] = [];
  /** Cusomer Data */
  customersData: Customer[] = [];
  /** Displayed Columns*/
  displayedColumns: string[] = [
    'id',
    'name',
    'email',
    'username',
    'password',
    'bookings',
    'actions',
  ];

  constructor(
    private customerService: CustomerService,
    private dialog: MatDialog
  ) {}

  /** initial method*/
  ngOnInit(): void {
    this.customerService.getAllCustomers().subscribe((data) => {
      this.customersData = data;
      this.dataSource = data;
    });
  }

  /** Open a modal add a Customer. */
  openCustomerModal(customer?: Customer): void {
    this.dialog
      .open(AddCustomerModalComponent, {
        disableClose: true,
        panelClass: ['w-11/12', 'md:w-4/6', 'lg:w-2/4', 'h-[90%]'],
        maxWidth: '600px',
        maxHeight: '900px',
        data: customer ?? {
          name: '',
          email: '',
          username: '',
          password: '',
          bookings: [],
        },
      })
      .afterClosed()
      .pipe(first())
      .subscribe((updatedCustomer: Customer | undefined) => {
        if (updatedCustomer) {
          this.customerService.getAllCustomers().subscribe((data) => {
            this.dataSource = data;
          });
        }
      });
  }

  /** Remove Customer. */
  removeCustomer(id: string): void {
    this.customerService.deleteCustomer(id).subscribe(() => {
      this.dataSource = this.dataSource.filter((c) => c.id !== id);
    });
  }
}
