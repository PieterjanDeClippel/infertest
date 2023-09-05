import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'infertest';
  people: Person[] = [
    { id: 1, firstName: 'Steve', lastName: 'Jobs' },
    { id: 2, firstName: 'Bill', lastName: 'Gates' },
  ];
}

export interface Person {
  id: number;
  firstName: string;
  lastName: string;
}