import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavComponent } from './navigation/navbar/nav/nav.component';
import { FooterComponent } from './navigation/navbar/nav/footer/footer.component';
import { CustomerProfileComponent } from './customer/customer-profile/customer-profile.component';
import { ReservationsComponent } from './reservations/reservations/reservations.component';
import { ProfileUserComponent } from './user/profile-user/profile-user.component';
import { AdminComponent } from './admin/admin/admin.component';
/**
 * Home component.
 */
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    NavComponent,
    FooterComponent,
    CustomerProfileComponent,
    ReservationsComponent,
    ProfileUserComponent,
    AdminComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Booking-jd-front-end';
  selectedMenu = '';

  onMenuSelected(menu: string) {
    this.selectedMenu = menu;
  }
}
