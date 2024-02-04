import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { SideMenuComponent } from '../side-menu/side-menu.component';
import { PlanComponent } from '../plan/plan.component';
import { FaqComponent } from '../faq/faq.component';

@Component({
  selector: 'gb-dashboard',
  standalone: true,
  imports: [HeaderComponent, SideMenuComponent, PlanComponent,FaqComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}
