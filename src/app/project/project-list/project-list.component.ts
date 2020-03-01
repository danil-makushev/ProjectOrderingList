import { Component, OnInit } from '@angular/core';
import { Project } from '../project.model';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {

  projects: Project[] = [
    new Project("Test Project", "Test description", "https://upload.wikimedia.org/wikipedia/commons/4/45/Infinity_Mirror.png"),
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
