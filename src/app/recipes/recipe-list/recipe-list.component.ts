import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe';
import { RecipeItemComponent } from './recipe-item.component';

@Component({
  moduleId: module.id,
  selector: 'rb-recipe-list',
  templateUrl: 'recipe-list.component.html',
  directives: [RecipeItemComponent]
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[];
  recipe = new Recipe('Dummy', 'Dummy', 'http://images.media-allrecipes.com/userphotos/250x250/00/14/23/142350.jpg')
  
  constructor() { }

  ngOnInit() {
  }

}
