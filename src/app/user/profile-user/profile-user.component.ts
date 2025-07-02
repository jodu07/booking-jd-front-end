import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AdminComponent } from 'src/app/admin/admin/admin.component';
import { AuthService } from 'src/app/core/auth.service';
import { CustomerProfileComponent } from 'src/app/customer/customer-profile/customer-profile.component';
import { ReservationsComponent } from 'src/app/reservations/reservations/reservations.component';
import { Customer } from 'src/models/customer';

@Component({
  selector: 'app-profile-user',
  standalone: true,
  imports: [
    CommonModule,
    CustomerProfileComponent,
    ReservationsComponent,
    AdminComponent,
  ],
  templateUrl: './profile-user.component.html',
  styleUrl: './profile-user.component.scss',
})
export class ProfileUserComponent {
  loggedCustomer!: Customer;
  selectedMenu = '';

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.getCustomerObservable().subscribe((customer) => {
      if (customer) this.loggedCustomer = customer;
    });
  }

  onMenuSelected(menu: string) {
    this.selectedMenu = menu;
  }
}
