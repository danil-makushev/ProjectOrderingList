import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Project } from "../project.model";

@Component({
  selector: "app-project-item",
  templateUrl: "./project-item.component.html",
  styleUrls: ["./project-item.component.scss"],
})
export class ProjectItemComponent implements OnInit {
  @Input() project = new Project(
    "Test Project",
    "Test description",
    "https://upload.wikimedia.org/wikipedia/commons/4/45/Infinity_Mirror.png"
  );
  @Output() projectSelected = new EventEmitter<void>();

  onSelected() {
    this.projectSelected.emit();
  }

  constructor() {}

  ngOnInit(): void {}
}
