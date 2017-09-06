import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipes.model';

@Component({
  selector: 'app-receipe-list',
  templateUrl: './receipe-list.component.html',
  styleUrls: ['./receipe-list.component.css']
})
export class ReceipeListComponent implements OnInit {
  recipe: Recipe[] = [
    // tslint:disable-next-line:max-line-length
    new Recipe('Recipe Test', 'Recipe desc', 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Banjo_Shark_recipe.jpg/320px-Banjo_Shark_recipe.jpg'),
    new Recipe('Recipe Test 1', 'Recipe desc', 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Banjo_Shark_recipe.jpg/320px-Banjo_Shark_recipe.jpg'),
    // tslint:disable-next-line:max-line-length
    new Recipe('Recipe Test 2', 'Recipe desc', 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Banjo_Shark_recipe.jpg/320px-Banjo_Shark_recipe.jpg')
  ];
  constructor() { }

  ngOnInit() {
  }

}
