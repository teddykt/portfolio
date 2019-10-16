import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScatterTitleComponent } from './scatter-title.component';

describe('ScatterTitleComponent', () => {
  let component: ScatterTitleComponent;
  let fixture: ComponentFixture<ScatterTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScatterTitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScatterTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
