import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuantityCounterComponent } from './quantity-counter.component';

describe('QuantityCounterComponent', () => {
  let component: QuantityCounterComponent;
  let fixture: ComponentFixture<QuantityCounterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuantityCounterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuantityCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    component.value = 0;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should decrement correctly', () => {
    component.increment();
    expect(component.value).toBe(1);
    component.decrement();
    expect(component.value).toBe(0);
  });

  it('should not decrement below the minimum value', () => {
    component.increment();
    expect(component.value).toBe(1);
    component.decrement();
    expect(component.value).toBe(0);
    component.decrement();
    expect(component.value).toBe(0);
  });

  it('should not increment below the maximum value', () => {
    for (let i = 0; i < 1005; i++) {
      component.increment();
    }
    expect(component.value).toBe(1000);
  });

  it('should not increment over the maximum value', () => {
    component.step = 20;
    component.max = 20;
    component.increment();
    component.increment();
    expect(component.value).toBe(20);
  });

});
