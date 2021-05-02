import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScalarVectorCalcComponent } from './scalar-vector-calc.component';

describe('ScalarVectorCalcComponent', () => {
  let component: ScalarVectorCalcComponent;
  let fixture: ComponentFixture<ScalarVectorCalcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScalarVectorCalcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScalarVectorCalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
