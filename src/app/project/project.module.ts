import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProjectListComponent } from "./project-list/project-list.component";
import { ProjectItemComponent } from "./project-item/project-item.component";

import { MaterialModule } from "../material/material.module";
import { ProjectDetailComponent } from "./project-detail/project-detail.component";
import { ProjectEmptyComponent } from "./project-empty/project-empty.component";
import { RouterModule } from "@angular/router";
import { ProjectEditComponent } from "./project-edit/project-edit.component";

@NgModule({
  declarations: [
    ProjectListComponent,
    ProjectItemComponent,
    ProjectDetailComponent,
    ProjectEmptyComponent,
    ProjectEditComponent,
  ],
  imports: [CommonModule, MaterialModule, RouterModule],
  exports: [ProjectListComponent],
})
export class ProjectModule {}
