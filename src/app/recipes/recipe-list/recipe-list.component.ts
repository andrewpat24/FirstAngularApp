import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe'


@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[];
  recipe = new Recipe('Dummy', 'Dummy', 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Cheeseburger.jpg/300px-Cheeseburger.jpg')
  constructor() { }

  ngOnInit() {
  }

  onSelected(recipe: Recipe) {

  }

}
