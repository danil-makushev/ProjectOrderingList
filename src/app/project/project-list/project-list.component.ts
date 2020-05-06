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

  selectedProject: Project;
  constructor(
    private projectService: ProjectService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.projects = this.projectService.getProjects();
    this.selectedProject = this.projectService.getProjects()[0];
    this.projectService.projectSelected.subscribe((project: Project) => {
      this.selectedProject = project;
    });
  }

  onAddProject() {
    this.router.navigate(["new"], { relativeTo: this.route });
  }
}
