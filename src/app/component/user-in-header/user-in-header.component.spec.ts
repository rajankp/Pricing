import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserInHeaderComponent } from './user-in-header.component';

describe('UserInHeaderComponent', () => {
  let component: UserInHeaderComponent;
  let fixture: ComponentFixture<UserInHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserInHeaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserInHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
