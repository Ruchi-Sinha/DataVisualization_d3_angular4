import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DonutchartComponent } from './donutchart.component';

describe('DonutchartComponent', () => {
  let component: DonutchartComponent;
  let fixture: ComponentFixture<DonutchartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonutchartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonutchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
