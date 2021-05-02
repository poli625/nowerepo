import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrthogonalVectorsGuideComponent } from './orthogonal-vectors-guide.component';

describe('OrthogonalVectorsGuideComponent', () => {
  let component: OrthogonalVectorsGuideComponent;
  let fixture: ComponentFixture<OrthogonalVectorsGuideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrthogonalVectorsGuideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrthogonalVectorsGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
