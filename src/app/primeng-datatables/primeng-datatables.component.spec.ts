import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimengDatatablesComponent } from './primeng-datatables.component';

describe('PrimengDatatablesComponent', () => {
  let component: PrimengDatatablesComponent;
  let fixture: ComponentFixture<PrimengDatatablesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimengDatatablesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimengDatatablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
