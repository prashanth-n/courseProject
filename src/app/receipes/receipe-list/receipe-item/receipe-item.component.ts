import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../../recipes.model';


@Component({
  selector: 'app-receipe-item',
  templateUrl: './receipe-item.component.html',
  styleUrls: ['./receipe-item.component.css']
})
export class ReceipeItemComponent implements OnInit {
  @Input() r: Recipe;
  @Input() index: number;
  ngOnInit() {
  }

}
