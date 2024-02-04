import { Component, Inject } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import { PlanManagerService } from '../../services/plan-manager.service';
import { IPlan } from '../../interfaces/plan';
import { Observable } from 'rxjs';
import { CommonModule, DOCUMENT } from '@angular/common';
import { Plan } from '../../htmlConstants/plan';
import { IconComponent } from '../../reusable-component/icon/icon.component';

@Component({
  selector: 'gb-plan-item',
  standalone: true,
  imports: [CommonModule,  MatCardModule, MatDividerModule, MatListModule, IconComponent],
  templateUrl: './plan-item.component.html',
  styleUrl: './plan-item.component.scss'
})
export class PlanItemComponent {
  public planList$: Observable<IPlan[]>;
  public planHtmlText = Plan;
  constructor(private planManagerService: PlanManagerService, @Inject(DOCUMENT) private _document: Document) {
    this.planList$ = this.planManagerService.fetchPlans();
  }

  selectPlan(event: any) {
    this._document.querySelectorAll('.btn-selected')[0].classList.remove('btn-selected');
    event.target.classList.add('btn-selected');
  }
}
