import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import { PlanManagerService } from '../../services/plan-manager.service';
import { IPlan } from '../../interfaces/plan';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { Plan } from '../../htmlConstants/plan';
import { IconComponent } from '../../reusable-component/icon/icon.component';

@Component({
  selector: 'gb-plan-item',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatDividerModule, MatListModule, IconComponent],
  templateUrl: './plan-item.component.html',
  styleUrl: './plan-item.component.scss'
})
export class PlanItemComponent {
  public planList$: Observable<IPlan[]>;
  public planHtmlText = Plan;
  constructor(private planManagerService: PlanManagerService) {
    this.planList$ = this.planManagerService.fetchPlans();
  }
}
