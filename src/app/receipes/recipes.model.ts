export class Recipe {
    public name: string;
    public description: string;
    public imageSrc: string;
    constructor(recipeName: string, recipeDesc: string, recipeImg: string) {
        this.name = recipeName;
        this.description = recipeDesc;
        this.imageSrc = recipeImg;
    }
}
