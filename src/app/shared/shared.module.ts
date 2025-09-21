import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MasterComponent } from "./components/master/master.component";

@NgModule({
  declarations: [
    MasterComponent,
  ],
  imports: [
    CommonModule,
    
  ],
  exports: [
    MasterComponent
  ]
})
export class SharedModule {}