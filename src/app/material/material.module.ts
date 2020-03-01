import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatMenuModule } from "@angular/material/menu";
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon'; 

const modules: any[] = [MatToolbarModule, MatMenuModule, MatButtonModule, MatIconModule];

@NgModule({
  declarations: [],
  imports: [CommonModule, ...modules],
  exports: [...modules]
})
export class MaterialModule {}
