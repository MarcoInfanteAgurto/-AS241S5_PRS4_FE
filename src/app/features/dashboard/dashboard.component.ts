import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  stats = {
    totalUsers: 156,
    activeUsers: 142,
    totalPatients: 1248,
    totalMedications: 342,
    totalSuppliers: 45,
    totalDoctors: 28,
    totalProducts: 156
  };
}
