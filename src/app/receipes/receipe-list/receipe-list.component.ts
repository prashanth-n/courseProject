import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipes.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-receipe-list',
  templateUrl: './receipe-list.component.html',
  styleUrls: ['./receipe-list.component.css']
})
export class ReceipeListComponent implements OnInit {
  recipe: Recipe[];
  constructor(private recipeList: RecipeService) { }

  ngOnInit() {
    this.recipe = this.recipeList.getRecipe();
  }
}
