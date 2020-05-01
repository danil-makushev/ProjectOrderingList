import { Component, OnInit, Input } from "@angular/core";
import { Project } from "../project.model";
import { ProjectService } from "../project.service";

@Component({
  selector: "app-project-item",
  templateUrl: "./project-item.component.html",
  styleUrls: ["./project-item.component.scss"],
})
export class ProjectItemComponent implements OnInit {
  @Input() project: Project;

  onSelected() {
    this.projectService.projectSelected.emit(this.project);
  }

  constructor(private projectService: ProjectService) {}

  ngOnInit(): void {}
}
