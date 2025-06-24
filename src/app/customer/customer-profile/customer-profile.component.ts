import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';

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
    { name: 'Booking' },
    { name: 'Gift Cards' },
    { name: 'Family & Friends' },
    { name: 'Favorites' },
    { name: 'Account & Settings' },
    { name: 'Reviews' },
    { name: 'Payments' },
    { name: 'Custom Forms' },
    { name: 'Follow us on Facebook' },
    { name: 'Terms of Use' },
    { name: 'Privacy Policy' },
    { name: 'Logout' },
  ];
}
