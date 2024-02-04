import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserInHeaderExpandComponent } from './user-in-header-expand.component';

describe('UserInHeaderExpandComponent', () => {
  let component: UserInHeaderExpandComponent;
  let fixture: ComponentFixture<UserInHeaderExpandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserInHeaderExpandComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserInHeaderExpandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
