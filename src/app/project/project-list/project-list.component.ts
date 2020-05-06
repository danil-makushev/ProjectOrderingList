import { Component, OnInit } from "@angular/core";
import { Project } from "../project.model";
import { ProjectService } from "../project.service";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-project-list",
  templateUrl: "./project-list.component.html",
  styleUrls: ["./project-list.component.scss"],
})
export class ProjectListComponent implements OnInit {
  projects: Project[] = [];

  constructor(
    private projectService: ProjectService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.projects = this.projectService.getProjects();
  }

  onAddProject() {
    this.router.navigate(["new"], { relativeTo: this.route });
  }
}
