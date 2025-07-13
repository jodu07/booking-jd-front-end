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
import { AuthService } from 'src/app/core/auth.service';
import { CustomerService } from 'src/app/core/customer.service';

/**
 * Sign component.
 */
@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatFormFieldModule,
    MatLabel,
    ReactiveFormsModule,
    MatInput,
    MatButtonModule,
  ],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss',
})
export class SignInComponent {
  signForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private customerService: CustomerService,
    private router: Router,
    private authService: AuthService
  ) {}

  /** Initial method. */
  ngOnInit(): void {
    this.signForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  /** Login method. */
  login(): void {
    if (this.signForm.valid) {
      const { username, password } = this.signForm.value;

      this.customerService.login(username, password).subscribe({
        next: (customer) => {
          console.log('Login exitoso:', customer);
          this.authService.setCustomer(customer);
          this.router.navigate(['/profile']);
        },
        error: () => {
          console.error('Credenciales inválidas');
        },
      });
    }
  }
}
