import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipes.model';
import { RecipeService } from '../recipe.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-receipe-list',
  templateUrl: './receipe-list.component.html',
  styleUrls: ['./receipe-list.component.css']
})
export class ReceipeListComponent implements OnInit {
  recipe: Recipe[];
  constructor(private recipeList: RecipeService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.recipe = this.recipeList.getRecipe();
  }
  onAddingNewRecipe() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }
}
