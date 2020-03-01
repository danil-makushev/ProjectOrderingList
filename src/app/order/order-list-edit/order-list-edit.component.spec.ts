import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderListEditComponent } from './order-list-edit.component';

describe('OrderListEditComponent', () => {
  let component: OrderListEditComponent;
  let fixture: ComponentFixture<OrderListEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderListEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderListEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
