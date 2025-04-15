import { Component, ViewChild, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/components/header/header.component';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, SidebarComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild(SidebarComponent) sidebarComponent!: SidebarComponent;
  
  title = 'grid-monitoring-dashboard';
  isSidebarCollapsed = signal<boolean>(false);
  
  onSidebarCollapsedChange(collapsed: boolean) {
    this.isSidebarCollapsed.set(collapsed);
  }
}