import { Ingredients } from '../shared/ingredient.model';
export class ShoppingListService {
    ingredients: Ingredients[] = [
        new Ingredients('Ingrident 1', 100),
        new Ingredients('Ingrident 2', 200),
        new Ingredients('Ingrident 3', 300)
    ];
    getIngredients() {
        return this.ingredients.slice();
    }
    addNewIngredient(newIng: Ingredients) {
        this.ingredients.push(newIng);
    }
    addIngredients(ingredients: Ingredients[]) {
        this.ingredients.push(...ingredients);

    }
}
