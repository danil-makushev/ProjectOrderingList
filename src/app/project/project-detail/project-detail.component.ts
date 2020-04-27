import { Component, OnInit, Input } from "@angular/core";
import { Project } from "../project.model";

@Component({
  selector: "app-project-detail",
  templateUrl: "./project-detail.component.html",
  styleUrls: ["./project-detail.component.scss"],
})
export class ProjectDetailComponent implements OnInit {
  @Input() project = new Project(
    "Test Project",
    "Test description",
    "https://upload.wikimedia.org/wikipedia/commons/4/45/Infinity_Mirror.png"
  );

  constructor() {}

  ngOnInit(): void {}
}
