import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from "@angular/core";

import { FilterItemComponent } from './filter-item.component';

describe('FilterItemComponent', () => {
  let component: FilterItemComponent;
  let fixture: ComponentFixture<FilterItemComponent>;
  let el: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    el = fixture.debugElement;

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call the output on a value change', () => {
    spyOn(component.checked, 'emit').and.callThrough();
    el.query(By.css('input')).triggerEventHandler('checked', true);
    fixture.detectChanges();
    expect(component.checked.emit).toHaveBeenCalledWith(true);
  });

});
