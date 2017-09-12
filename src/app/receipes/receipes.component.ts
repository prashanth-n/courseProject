import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipes.model';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-receipes',
  templateUrl: './receipes.component.html',
  styleUrls: ['./receipes.component.css'],
  providers: [RecipeService]
})
export class ReceipesComponent implements OnInit {
  recipeSelected: Recipe;
  constructor(private recipeSelectd: RecipeService) { }

  ngOnInit() {
    this.recipeSelectd.selectedRecipe.subscribe(
      (recipe: Recipe) => {
        this.recipeSelected = recipe;
      }
    );
  }

}
