import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScalarVectorGuideComponent } from './scalar-vector-guide.component';

describe('ScalarVectorGuideComponent', () => {
  let component: ScalarVectorGuideComponent;
  let fixture: ComponentFixture<ScalarVectorGuideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScalarVectorGuideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScalarVectorGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
