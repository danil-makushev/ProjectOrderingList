import { Injectable, EventEmitter } from "@angular/core";
import { Project } from "./project.model";
import { Part } from "../sharred/part.model";

@Injectable({
  providedIn: "root",
})
export class ProjectService {
  public projectSelected = new EventEmitter<Project>();

  private projects: Project[] = [
    new Project(
      "Project 1",
      "Project 1 description",
      "https://upload.wikimedia.org/wikipedia/commons/4/45/Infinity_Mirror.png",
      [new Part("part 1", 10), new Part("part 2", 20)]
    ),
    new Project(
      "Project 2",
      "Project 2 description",
      "https://upload.wikimedia.org/wikipedia/commons/4/45/Infinity_Mirror.png",
      [new Part("part 1", 10), new Part("part 2", 20)]
    ),
    new Project(
      "Project 3",
      "Project 3 description",
      "https://upload.wikimedia.org/wikipedia/commons/4/45/Infinity_Mirror.png",
      [new Part("part 1", 10), new Part("part 2", 20)]
    ),
  ];

  public getProjects() {
    return this.projects.slice();
  }

  constructor() {}
}
