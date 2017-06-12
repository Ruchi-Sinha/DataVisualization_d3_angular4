import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PolarareaChartComponent } from './polararea-chart.component';

describe('PolarareaChartComponent', () => {
  let component: PolarareaChartComponent;
  let fixture: ComponentFixture<PolarareaChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PolarareaChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PolarareaChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
