import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipes.model';
import { Ingredients } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
    selectedRecipe = new EventEmitter<Recipe>();
    private recipe: Recipe[] = [
        // tslint:disable-next-line:max-line-length
        new Recipe(
            'Recipe Test',
            'Recipe desc',
            'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Banjo_Shark_recipe.jpg/320px-Banjo_Shark_recipe.jpg',
            [
                new Ingredients('MEnu item 1', 5),
                new Ingredients('MEnu item 2', 10),
                new Ingredients('MEnu item 3', 2)
            ]
        ),
        new Recipe(
            'Recipe Test 1',
            'Recipe desc',
            'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Banjo_Shark_recipe.jpg/320px-Banjo_Shark_recipe.jpg',
            [
                new Ingredients('Menu item 21', 5),
                new Ingredients('Menu item 22', 7),
                new Ingredients('Menu item 21', 1)
            ]
        ),
        // tslint:disable-next-line:max-line-length
        new Recipe(
            'Recipe Test 2',
            'Recipe desc',
            'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Banjo_Shark_recipe.jpg/320px-Banjo_Shark_recipe.jpg',
            [
                new Ingredients('Menu tiem 31', 2),
                new Ingredients('mwnu ite 31', 22),
                new Ingredients('mwnu ite 33', 12),
            ]
        )
    ];
    constructor(private shListService: ShoppingListService) { }
    getRecipe() {
        return this.recipe;
    }
    recipeSelected() {

    }
    addToShopList(ingridents: Ingredients[]) {
        this.shListService.addIngredients(ingridents);
    }
}
