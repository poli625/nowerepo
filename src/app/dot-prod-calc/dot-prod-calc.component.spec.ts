import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DotProdCalcComponent } from './dot-prod-calc.component';

describe('DotProdCalcComponent', () => {
  let component: DotProdCalcComponent;
  let fixture: ComponentFixture<DotProdCalcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DotProdCalcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DotProdCalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
