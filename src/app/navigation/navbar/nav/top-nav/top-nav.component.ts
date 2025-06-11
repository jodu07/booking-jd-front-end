import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
/**
 * Top-nav component.
 */
@Component({
  selector: 'app-top-nav',
  standalone: true,
  imports: [CommonModule, MatInputModule, FormsModule],
  templateUrl: './top-nav.component.html',
  styleUrl: './top-nav.component.scss',
})
export class TopNavComponent {}
