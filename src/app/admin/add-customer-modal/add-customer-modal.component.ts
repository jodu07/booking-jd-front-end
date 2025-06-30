import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {
  MatFormField,
  MatInputModule,
  MatLabel,
} from '@angular/material/input';
import { CustomerService } from 'src/app/core/customer.service';
import { Customer } from 'src/models/customer';

@Component({
  selector: 'app-add-customer-modal',
  standalone: true,
  imports: [
    CommonModule,
    MatFormField,
    MatLabel,
    ReactiveFormsModule,
    MatInputModule,
  ],
  templateUrl: './add-customer-modal.component.html',
  styleUrl: './add-customer-modal.component.scss',
})
export class AddCustomerModalComponent {
  customerSelected!: Customer;
  customerForm!: FormGroup;
  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<AddCustomerModalComponent>,
    private customerService: CustomerService,
    @Inject(MAT_DIALOG_DATA)
    public matData: Customer
  ) {}

  /** Initial method. */
  ngOnInit(): void {
    this.customerSelected = this.matData;
    this.customerForm = this.fb.group({
      name: [this.matData?.name || '', Validators.required],
      email: [
        this.matData?.email || '',
        [Validators.required, Validators.email],
      ],
      username: [this.matData?.username || '', Validators.required],
      password: [this.matData?.password || '', Validators.required],
    });
  }

  /** Send form. */
  submitForm(): void {
    if (this.customerForm.valid) {
      const customerData: Customer = {
        ...this.matData, // conserva el ID si lo trae
        ...this.customerForm.value,
        bookings: this.matData.bookings ?? [],
      };

      const request = customerData.id
        ? this.customerService.updateCustomer(customerData)
        : this.customerService.createCustomer(customerData);

      request.subscribe((response) => {
        this.dialogRef.close(response); // Devuelve el cliente al componente padre
      });
    }
  }

  cancel(): void {
    this.dialogRef.close();
  }
}
