import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BookingComponent } from './booking/booking.component';

@Component({
  selector: 'app-reservations',
  imports: [CommonModule, BookingComponent],
  standalone: true,
  templateUrl: './reservations.component.html',
  styleUrl: './reservations.component.scss',
})
export class ReservationsComponent {}
