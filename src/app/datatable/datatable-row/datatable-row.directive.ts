import { Directive } from '@angular/core';
import { DatatableComponent } from '../datatable/datatable.component';

@Directive({
  selector: '[appDatatableRow]'
})
export class DatatableRowDirective<TData> {

  constructor(public datatable: DatatableComponent<TData>) { }

}
