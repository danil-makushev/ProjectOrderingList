import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { OrderListComponent } from "./order-list/order-list.component";
import { OrderListEditComponent } from "./order-list-edit/order-list-edit.component";

import { MaterialModule } from "../material/material.module";

@NgModule({
  declarations: [OrderListComponent, OrderListEditComponent],
  imports: [CommonModule, MaterialModule],
  exports: [OrderListComponent]
})
export class OrderModule {}
