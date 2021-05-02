import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatrixMultiplyGuideComponent } from './matrix-multiply-guide.component';

describe('MatrixMultiplyGuideComponent', () => {
  let component: MatrixMultiplyGuideComponent;
  let fixture: ComponentFixture<MatrixMultiplyGuideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatrixMultiplyGuideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatrixMultiplyGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
