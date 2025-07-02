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
    private router: Router
  ) {}

  /** Initial method. */
  ngOnInit(): void {
    this.signForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  login(): void {
    if (this.signForm.valid) {
      const { username, password } = this.signForm.value;

      this.customerService.login(username, password).subscribe({
        next: (customer) => {
          console.log('Login exitoso:', customer);
          // Puedes guardar info en localStorage si deseas
          this.router.navigate(['/profile']); // navega al panel admin
        },
        error: () => {
          console.error('Credenciales inválidas');
          // Aquí podrías mostrar un mensaje visual más adelante
        },
      });
    }
  }
}
