import { Ingredients } from '../shared/ingredient.model';

export class Recipe {
    public name: string;
    public description: string;
    public imageSrc: string;
    public menuItems: Ingredients[];
    constructor(recipeName: string, recipeDesc: string, recipeImg: string, menuItems: Ingredients[]) {
        this.name = recipeName;
        this.description = recipeDesc;
        this.imageSrc = recipeImg;
        this.menuItems = menuItems;
    }
}
