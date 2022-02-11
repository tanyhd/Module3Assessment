import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { v4 as uuidv4 } from 'uuid';
import { Recipe } from '../models';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-add',
  templateUrl: './recipe-add.component.html',
  styleUrls: ['./recipe-add.component.css']
})
export class RecipeAddComponent implements OnInit {

  ingredients: string[] = [];
  form: FormGroup = new FormGroup({});
  recipe!: Recipe;

  constructor(private fb: FormBuilder, private router: Router, private recipeService: RecipeService) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      id: this.fb.control(uuidv4()),
      title: this.fb.control("", [Validators.minLength(3), Validators.required]),
      image: this.fb.control("", [Validators.required]),
      instruction: this.fb.control("", [Validators.minLength(3), Validators.required]),
      ingredients: this.fb.control('')
    })
  }

  addIngredient(ingredient: any) {
    if(ingredient.length > 2) {
      this.ingredients.push(ingredient);
    }
  }

  removeIngredient(ingredient: any){
    this.ingredients.forEach( (item, index) => {
      if(item === ingredient) this.ingredients.splice(index,1);
    });
 }

  submitForm() {

    this.recipe = this.form.value as Recipe;
    this.recipe.ingredients = this.ingredients;
    console.log(this.recipe);

    this.form.reset();
    this.recipeService.uploadRecipe(this.recipe);
    this.router.navigate(['']);

  }


}
