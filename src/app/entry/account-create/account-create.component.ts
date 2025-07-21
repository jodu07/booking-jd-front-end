import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { Router } from '@angular/router';
import { CustomerService } from 'src/app/core/customer.service';
import { Customer } from 'src/models/customer';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { TypeUser } from 'src/models/enums/type-user.enum';

@Component({
  selector: 'app-account-create',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatFormFieldModule,
    MatLabel,
    ReactiveFormsModule,
    MatInput,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
  ],
  templateUrl: './account-create.component.html',
  styleUrl: './account-create.component.scss',
})
export class AccountCreateComponent {
  typeUser = TypeUser;
  accountCreateForm!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private customerService: CustomerService,
    private router: Router
  ) {}

  /** Initial method. */
  ngOnInit(): void {
    this.accountCreateForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      username: ['', Validators.required],
      password: ['', Validators.required],
      typeUser: ['', Validators.required],
    });
  }

  /** Send form. */
  submitForm(): void {
    if (this.accountCreateForm.valid) {
      const newCustomer: Customer = {
        ...this.accountCreateForm.value,
        bookings: [],
      };
      this.customerService.createCustomer(newCustomer).subscribe((response) => {
        console.log('Cliente creado:', response);
      });
    }
  }

  /** Go to Login. */
  onAccountCreate(): void {
    this.router.navigate(['/sign']);
  }
}
