import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SumSubVectorsCalcComponent } from './sum-sub-vectors-calc.component';

describe('SumSubVectorsCalcComponent', () => {
  let component: SumSubVectorsCalcComponent;
  let fixture: ComponentFixture<SumSubVectorsCalcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SumSubVectorsCalcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SumSubVectorsCalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
