import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatatableComponent } from './datatable/datatable.component';
import { DatatableRowDirective } from './datatable-row/datatable-row.directive';

@NgModule({
  declarations: [
    DatatableComponent,
    DatatableRowDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DatatableComponent,
    DatatableRowDirective
  ]
})
export class DatatableModule { }
