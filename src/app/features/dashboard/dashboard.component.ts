import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, FormsModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  isDrawerOpen = false;
  lastUpdated = '9:22 PM';
  
  alertTypes = [
    { value: 'all', label: 'All alert types' },
    { value: 'warning', label: 'Warning' },
    { value: 'critical', label: 'Critical' },
    { value: 'info', label: 'Information' }
  ];
  
  alertDurations = [
    { value: 'all', label: 'All alert durations' },
    { value: '1h', label: 'Last hour' },
    { value: '6h', label: 'Last 6 hours' },
    { value: '12h', label: 'Last 12 hours' },
    { value: '24h', label: 'Last 24 hours' }
  ];
  
  selectedAlertType = 'all';
  selectedAlertDuration = 'all';

  constructor() { }

  ngOnInit(): void {
  }

  toggleDrawer(): void {
    this.isDrawerOpen = !this.isDrawerOpen;
  }
}
