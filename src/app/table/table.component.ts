import { Component, ContentChild, TemplateRef, Input } from "@angular/core";
import { TableCellDirective } from "./table-cell.directive";
import { TableHeadDirective } from "./table-head.directive";

@Component({
  selector: 'app-table',
  template: `
    <table>
      <tr>
        <th *ngFor="let column of columns; let i = index">
          <ng-container
            *ngTemplateOutlet="tableHeadTemplate; context: {$implicit: column, index: i}"
          >
          </ng-container>
        </th>
      </tr>
      <tr *ngFor="let item of items; let i = index">
        <td *ngFor="let column of columns">
          <ng-container
            *ngTemplateOutlet="tableCellTemplate; context: {$implicit: item[column], index: i, column: column }"
          >
          </ng-container>
        </td>
      </tr>
    <table>
  `,
  styles: [`
    table {
      width: 100%;
    }
  `]
})
export class TableComponent {

  @Input() items: any[] = [];
  @Input() columns: string[] = [];

  @ContentChild(TableHeadDirective, {read: TemplateRef}) tableHeadTemplate;
  @ContentChild(TableCellDirective, {read: TemplateRef}) tableCellTemplate;
}