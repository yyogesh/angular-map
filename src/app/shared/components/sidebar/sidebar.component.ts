import { Component, inject, signal, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  isOpen = signal<boolean>(false);
  isCollapsed = signal<boolean>(false);
  
  @Output() collapsedChange = new EventEmitter<boolean>();
  
  menuItems = [
    { 
      icon: 'dashboard', 
      label: 'Dashboard', 
      route: '/dashboard' 
    },
    { 
      icon: 'description', 
      label: 'Custom reports', 
      route: '/reports' 
    },
    { 
      icon: 'insights', 
      label: 'Predictions & analytics', 
      route: '/analytics' 
    },
    { 
      icon: 'data_object', 
      label: 'Data and event logs', 
      route: '/logs' 
    }
  ];

  toggleSidebar() {
    this.isOpen.update(value => !value);
  }
  
  toggleCollapse() {
    this.isCollapsed.update(value => !value);
    this.collapsedChange.emit(this.isCollapsed());
  }
  
  closeSidebar() {
    this.isOpen.set(false);
  }
}