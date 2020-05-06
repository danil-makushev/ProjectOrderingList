import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { Part } from "src/app/shared/part.model";
import { OrderService } from "../order.service";

@Component({
  selector: "app-order-list-edit",
  templateUrl: "./order-list-edit.component.html",
  styleUrls: ["./order-list-edit.component.scss"],
})
export class OrderListEditComponent implements OnInit {
  @ViewChild("nameInput") nameInput: ElementRef;
  @ViewChild("amountInput") amountInput: ElementRef;

  onAddNewPart() {
    this.orderService.addPart(
      new Part(
        this.nameInput.nativeElement.value,
        this.amountInput.nativeElement.value
      )
    );
  }
  constructor(private orderService: OrderService) {}

  ngOnInit(): void {}
}
