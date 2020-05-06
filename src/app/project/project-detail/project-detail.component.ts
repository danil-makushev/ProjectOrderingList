import { Component, OnInit } from "@angular/core";
import { Project } from "../project.model";
import { OrderService } from "src/app/order/order.service";
import { Part } from "../../shared/part.model";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { ProjectService } from "../project.service";

@Component({
  selector: "app-project-detail",
  templateUrl: "./project-detail.component.html",
  styleUrls: ["./project-detail.component.scss"],
})
export class ProjectDetailComponent implements OnInit {
  project: Project;

  constructor(
    private orderService: OrderService,
    private route: ActivatedRoute,
    private router: Router,
    private projectService: ProjectService
  ) {}

  onAddParts() {
    this.orderService.addParts(this.project.parts);
  }

  onEditProject() {
    this.router.navigate(["edit"], {
      relativeTo: this.route,
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.project = this.projectService.getProjectById(+params["id"]);
    });
  }
}
