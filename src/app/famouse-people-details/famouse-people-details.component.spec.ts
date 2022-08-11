import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FamousePeopleDetailsComponent } from './famouse-people-details.component';

describe('FamousePeopleDetailsComponent', () => {
  let component: FamousePeopleDetailsComponent;
  let fixture: ComponentFixture<FamousePeopleDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FamousePeopleDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FamousePeopleDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
