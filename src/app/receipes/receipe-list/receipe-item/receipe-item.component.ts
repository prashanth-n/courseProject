import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../../recipes.model';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-receipe-item',
  templateUrl: './receipe-item.component.html',
  styleUrls: ['./receipe-item.component.css']
})
export class ReceipeItemComponent implements OnInit {
  @Input() r: Recipe;
  constructor(private recipeSelctd: RecipeService) { }
  afterSelect () {
    this.recipeSelctd.selectedRecipe.emit(this.r);
  }
  ngOnInit() {
  }

}
