import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipe-add',
  templateUrl: './recipe-add.component.html',
  styleUrls: ['./recipe-add.component.css']
})
export class RecipeAddComponent implements OnInit {

  ingredients: string[] = [];
  form: FormGroup = new FormGroup({});
  ingredientsArray: FormArray = new FormArray([]);

  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      id: this.fb.control(""),
      title: this.fb.control("", [Validators.minLength(3), Validators.required]),
      image: this.fb.control("", [Validators.required]),
      instruction: this.fb.control("", [Validators.minLength(3), Validators.required]),
      ingredients: this.fb.control({ingredients: this.ingredientsArray})
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
    for(let i=0; i<this.ingredients.length; i++) {
      const temp = new FormControl(this.ingredients[i])
      this.ingredientsArray.push(temp);
    }
    //console.log(this.ingredientsArray)
    console.log(this.ingredients)
    console.log(this.form.value)
    this.form.reset();

  }


}
