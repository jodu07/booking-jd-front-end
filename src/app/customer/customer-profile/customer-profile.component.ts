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
    console.log(menu);
    this.menuSelected.emit(menu);
  }
}
