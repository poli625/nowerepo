import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DotProductGuideComponent } from './dot-product-guide.component';

describe('DotProductGuideComponent', () => {
  let component: DotProductGuideComponent;
  let fixture: ComponentFixture<DotProductGuideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DotProductGuideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DotProductGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
