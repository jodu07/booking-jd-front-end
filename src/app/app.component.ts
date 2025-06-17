import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavComponent } from './navigation/navbar/nav/nav.component';
import { FooterComponent } from './navigation/navbar/nav/footer/footer.component';
import { CustomerProfileComponent } from './customer/customer-profile/customer-profile.component';
import { ProfileUserComponent } from './user/profile-user/profile-user.component';
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
    ProfileUserComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'booking-jd-front-end';
  selectedMenu: string | null = null;

  onMenuSelected(menu: string) {
    this.selectedMenu = menu;
    console.log(this.selectedMenu);
  }
}
