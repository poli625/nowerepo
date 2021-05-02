import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckYourselfComponent } from './check-yourself.component';

describe('CheckYourselfComponent', () => {
  let component: CheckYourselfComponent;
  let fixture: ComponentFixture<CheckYourselfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckYourselfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckYourselfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
