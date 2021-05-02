import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSubVectorsGuideComponent } from './add-sub-vectors-guide.component';

describe('AddSubVectorsGuideComponent', () => {
  let component: AddSubVectorsGuideComponent;
  let fixture: ComponentFixture<AddSubVectorsGuideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSubVectorsGuideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSubVectorsGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
