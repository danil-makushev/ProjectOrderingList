import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ProjectListComponent } from "./project/project-list/project-list.component";
import { OrderListComponent } from "./order/order-list/order-list.component";
import { ProjectEmptyComponent } from "./project/project-empty/project-empty.component";
import { ProjectDetailComponent } from "./project/project-detail/project-detail.component";
import { ProjectEditComponent } from "./project/project-edit/project-edit.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";

const routes: Routes = [
  { path: "", redirectTo: "/projects", pathMatch: "full" },
  {
    path: "projects",
    component: ProjectListComponent,
    children: [
      { path: "", component: ProjectEmptyComponent },
      { path: "new", component: ProjectEditComponent },
      { path: ":id", component: ProjectDetailComponent },
      { path: ":id/edit", component: ProjectEditComponent },
    ],
  },
  { path: "order", component: OrderListComponent },
  { path: "**", component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
