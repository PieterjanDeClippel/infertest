import { Directive, TemplateRef } from '@angular/core';
import { DatatableComponent } from '../datatable/datatable.component';

class DatatableRowContext<T> {
  constructor(public $implicit: T, public templateRef: TemplateRef<DatatableRowContext<T>>) {}
  // $implicit!: T;

  // constructor(value: T) {
  //   this.$implicit = value;
  // }
}

@Directive({
  selector: '[appDatatableRow]'
})
export class DatatableRowDirective<TData> {

  constructor(public datatable: DatatableComponent<TData>, public template: TemplateRef<TData>) { }

  static ngTemplateContextGuard<TData>(dir: DatatableRowDirective<TData>, ctx: unknown)
    : ctx is DatatableRowContext<TData> {
      return true;
    }

}
