import { Component, OnInit, Input } from "@angular/core";
import { Project } from "../project.model";
import { OrderService } from "src/app/order/order.service";
import { Part } from "../../sharred/part.model";

@Component({
  selector: "app-project-detail",
  templateUrl: "./project-detail.component.html",
  styleUrls: ["./project-detail.component.scss"],
})
export class ProjectDetailComponent implements OnInit {
  @Input() project: Project;

  constructor(private orderService: OrderService) {}

  onAddParts() {
    this.orderService.addParts(this.project.parts);
  }

  ngOnInit(): void {}
}
