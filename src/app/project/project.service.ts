import { Injectable } from "@angular/core";
import { Project } from "./project.model";
import { Part } from "../shared/part.model";
import { Subject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ProjectService {
  public projectSelected = new Subject<Project>();

  private projects: Project[] = [
    new Project(
      1,
      "Project 1",
      "Project 1 description",
      "https://upload.wikimedia.org/wikipedia/commons/4/45/Infinity_Mirror.png",
      [new Part("part 1", 10), new Part("part 2", 20)]
    ),
    new Project(
      2,
      "Project 2",
      "Project 2 description",
      "https://upload.wikimedia.org/wikipedia/commons/4/45/Infinity_Mirror.png",
      [new Part("part 1", 10), new Part("part 2", 20)]
    ),
    new Project(
      3,
      "Project 3",
      "Project 3 description",
      "https://upload.wikimedia.org/wikipedia/commons/4/45/Infinity_Mirror.png",
      [new Part("part 1", 10), new Part("part 2", 20)]
    ),
  ];

  public getProjects() {
    return this.projects.slice();
  }

  public getProjectById(id: number): Project {
    return this.projects.find((project: Project) => {
      return project.id === id;
    });
  }

  constructor() {}
}
