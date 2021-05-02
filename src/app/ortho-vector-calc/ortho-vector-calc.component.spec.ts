import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrthoVectorCalcComponent } from './ortho-vector-calc.component';

describe('OrthoVectorCalcComponent', () => {
  let component: OrthoVectorCalcComponent;
  let fixture: ComponentFixture<OrthoVectorCalcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrthoVectorCalcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrthoVectorCalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
