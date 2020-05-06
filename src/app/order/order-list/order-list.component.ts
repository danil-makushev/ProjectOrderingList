import { Component, OnInit, OnDestroy } from "@angular/core";
import { Part } from "src/app/shared/part.model";
import { OrderService } from "../order.service";
import { Subscription } from "rxjs";

@Component({
  selector: "app-order-list",
  templateUrl: "./order-list.component.html",
  styleUrls: ["./order-list.component.scss"],
})
export class OrderListComponent implements OnInit, OnDestroy {
  parts: Part[];
  private partsSubscription: Subscription;

  addNewPart(part: Part) {
    this.orderService.addPart(part);
  }

  constructor(private orderService: OrderService) {}

  ngOnInit(): void {
    this.parts = this.orderService.getParts();
    this.partsSubscription = this.orderService.partsChanged.subscribe(
      (parts: Part[]) => {
        this.parts = parts;
      }
    );
  }

  ngOnDestroy() {
    this.partsSubscription.unsubscribe();
  }
}
