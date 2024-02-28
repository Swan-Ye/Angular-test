import { Component } from '@angular/core';
import { Receipes } from '../receipes-list/receipes.model';

@Component({
  selector: 'app-receipes-list',
  templateUrl: './receipes-list.component.html',
  styleUrls: ['./receipes-list.component.css']
})
export class ReceipesListComponent {
  receipes: Receipes[] = [
    new Receipes('A Test Receipe', 'This is simply a test', '')
  ];
}
