import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatFormField, MatLabel } from '@angular/material/input';
import { CustomerService } from 'src/app/core/customer.service';
import { Customer } from 'src/models/customer';

@Component({
  selector: 'app-add-customer-modal',
  standalone: true,
  imports: [CommonModule, MatFormField, MatLabel, ReactiveFormsModule],
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

  /** Envía el formulario */
  submitForm(): void {
    if (this.customerForm.valid) {
      const newCustomer: Customer = {
        ...this.customerForm.value,
        bookings: [],
      };
      this.customerService.createCustomer(newCustomer).subscribe((response) => {
        console.log('Cliente creado:', response);
        this.dialogRef.close(response); // Cierra el modal y devuelve el cliente
      });
    }
  }

  cancel(): void {
    this.dialogRef.close();
  }
}
