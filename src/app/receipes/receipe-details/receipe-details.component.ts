import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipes.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-receipe-details',
  templateUrl: './receipe-details.component.html',
  styleUrls: ['./receipe-details.component.css']
})
export class ReceipeDetailsComponent implements OnInit {
  showDetailList = false;
  id: number;
  @Input() recipe: Recipe;
  constructor(private recipeService: RecipeService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.recipe = this.recipeService.getRecipes(this.id);
      }
    );
  }
  addToShoppingList() {
    this.recipeService.addToShopList(this.recipe.menuItems);
  }

}
