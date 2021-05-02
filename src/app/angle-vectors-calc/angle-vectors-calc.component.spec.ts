import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngleVectorsCalcComponent } from './angle-vectors-calc.component';

describe('AngleVectorsCalcComponent', () => {
  let component: AngleVectorsCalcComponent;
  let fixture: ComponentFixture<AngleVectorsCalcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngleVectorsCalcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngleVectorsCalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
