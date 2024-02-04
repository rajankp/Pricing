import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanWrapComponent } from './plan-wrap.component';

describe('PlanWrapComponent', () => {
  let component: PlanWrapComponent;
  let fixture: ComponentFixture<PlanWrapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlanWrapComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlanWrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
