import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FamousPeopleListComponent } from './famous-people-list.component';

describe('FamousPeopleListComponent', () => {
  let component: FamousPeopleListComponent;
  let fixture: ComponentFixture<FamousPeopleListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FamousPeopleListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FamousPeopleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
