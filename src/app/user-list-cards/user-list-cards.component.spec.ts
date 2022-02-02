import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserListCardsComponent } from './user-list-cards.component';

describe('UserListCardsComponent', () => {
  let component: UserListCardsComponent;
  let fixture: ComponentFixture<UserListCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserListCardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserListCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
