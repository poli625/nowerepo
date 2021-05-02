import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VectorsAngleComponent } from './vectors-angle.component';

describe('VectorsAngleComponent', () => {
  let component: VectorsAngleComponent;
  let fixture: ComponentFixture<VectorsAngleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VectorsAngleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VectorsAngleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
