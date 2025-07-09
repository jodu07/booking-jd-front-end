import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, input, Output } from '@angular/core';
import { AuthService } from 'src/app/core/auth.service';
import { ServiceMenu, ServiceMenuType } from 'src/models';
import { Customer } from 'src/models/customer';

/**
 * Customer Profile component.
 */
@Component({
  selector: 'app-customer-profile',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './customer-profile.component.html',
  styleUrl: './customer-profile.component.scss',
})
export class CustomerProfileComponent {
  @Input({ required: true }) customerCurrent!: Customer;

  @Output() menuSelected = new EventEmitter<string>();

  constructor(private authService: AuthService) {}

  /** On menu Click. */
  onMenuClick(menu: string) {
    console.log(menu);
    this.menuSelected.emit(menu);
    if (menu === ServiceMenuType.Logout) {
      this.authService.logout();
    }
  }

  /** Menu items. */
  menuItems: ServiceMenu[] = [
    { name: ServiceMenuType.Booking },
    { name: ServiceMenuType.GiftCards },
    { name: ServiceMenuType.FamilyAndFriends },
    { name: ServiceMenuType.Favorites },
    { name: ServiceMenuType.AccountAndSettings },
    { name: ServiceMenuType.Reviews },
    { name: ServiceMenuType.Payments },
    { name: ServiceMenuType.CustomForms },
    { name: ServiceMenuType.FollowUsOnFacebook },
    { name: ServiceMenuType.TermsOfUse },
    { name: ServiceMenuType.PrivacyPolicy },
    { name: ServiceMenuType.Logout },
  ];
}
