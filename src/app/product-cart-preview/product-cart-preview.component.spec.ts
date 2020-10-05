import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCartPreviewComponent } from './product-cart-preview.component';

describe('ProductCartPreviewComponent', () => {
  let component: ProductCartPreviewComponent;
  let fixture: ComponentFixture<ProductCartPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductCartPreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductCartPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
