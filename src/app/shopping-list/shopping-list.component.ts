import { Component, OnInit } from '@angular/core';
import { Ingredients } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredients[] = [
    new Ingredients('Ingrident 1', 100),
    new Ingredients('Ingrident 2', 200),
    new Ingredients('Ingrident 3', 300)
  ];
  constructor() { }

  ngOnInit() {
  }

}
