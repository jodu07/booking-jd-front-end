import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { ServiceMenu, ServiceMenuType } from 'src/models';

@Component({
  selector: 'app-customer-profile',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './customer-profile.component.html',
  styleUrl: './customer-profile.component.scss',
})
export class CustomerProfileComponent {
  @Output() menuSelected = new EventEmitter<string>();

  onMenuClick(menu: string) {
    this.menuSelected.emit(menu);
  }

  menuService: ServiceMenu[] = [
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
