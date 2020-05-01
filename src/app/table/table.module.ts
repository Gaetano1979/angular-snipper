import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TableComponent } from "./table.component";
import { TableCellDirective } from "./table-cell.directive";
import { TableHeadDirective } from "./table-head.directive";

@NgModule({
  imports: [ CommonModule ],
  declarations: [ TableComponent, TableCellDirective, TableHeadDirective ],
  exports: [ TableComponent, TableCellDirective, TableHeadDirective ]
})
export class TableModule {}