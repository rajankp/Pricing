import { Component } from '@angular/core';
import { PlanItemComponent } from '../plan-item/plan-item.component';

@Component({
  selector: 'gb-plan-wrap',
  standalone: true,
  imports: [PlanItemComponent],
  templateUrl: './plan-wrap.component.html',
  styleUrl: './plan-wrap.component.scss'
})
export class PlanWrapComponent {

}
