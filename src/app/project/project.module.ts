import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProjectListComponent } from "./project-list/project-list.component";
import { ProjectItemComponent } from "./project-item/project-item.component";

import { MaterialModule } from "../material/material.module";
import { ProjectDetailComponent } from './project-detail/project-detail.component';

@NgModule({
  declarations: [ProjectListComponent, ProjectItemComponent, ProjectDetailComponent],
  imports: [CommonModule, MaterialModule],
  exports: [ProjectListComponent]
})
export class ProjectModule {}
