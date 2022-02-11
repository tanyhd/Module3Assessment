import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Recipe } from '../models';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private recipeService: RecipeService) { }
  recipeId: any;
  recipe!: Recipe;

  ngOnInit(): void {
    this.recipeId = this.activatedRoute.snapshot.params['recipeId'];
    this.recipeService.getRecipe(this.recipeId)
      .then(data => {
        this.recipe = data as Recipe
      })
  }

}
