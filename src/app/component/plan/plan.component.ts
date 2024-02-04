import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { PlanWrapComponent } from '../plan-wrap/plan-wrap.component';

@Component({
  selector: 'gb-plan',
  standalone: true,
  imports: [MatButtonModule, PlanWrapComponent],
  templateUrl: './plan.component.html',
  styleUrl: './plan.component.scss'
})
export class PlanComponent {

}
