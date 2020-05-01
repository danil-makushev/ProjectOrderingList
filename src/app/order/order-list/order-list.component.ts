import { Component, OnInit } from "@angular/core";
import { Part } from "src/app/sharred/part.model";
import { OrderService } from "../order.service";
import { THIS_EXPR } from "@angular/compiler/src/output/output_ast";

@Component({
  selector: "app-order-list",
  templateUrl: "./order-list.component.html",
  styleUrls: ["./order-list.component.scss"],
})
export class OrderListComponent implements OnInit {
  parts: Part[];

  addNewPart(part: Part) {
    this.orderService.addPart(part);
  }

  constructor(private orderService: OrderService) {}

  ngOnInit(): void {
    this.parts = this.orderService.getParts();
    this.orderService.partsChanged.subscribe((parts: Part[]) => {
      this.parts = parts;
    });
  }
}
