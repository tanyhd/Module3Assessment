import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { lastValueFrom } from "rxjs";
import { Recipe, RecipeList } from "./models";

@Injectable()
export class RecipeService {

  constructor(private http: HttpClient) {}

  getAllRecipes() {
    return(lastValueFrom(
      this.http.get<RecipeList[]>("/api/recipes")
    ))
  }

  getRecipe(recipeId: String) {
    return(lastValueFrom(
      this.http.get<Recipe>(`/api/recipe/${recipeId}`)
    ))
  }

  uploadRecipe(recipe: Recipe) {

    return lastValueFrom(
      this.http.post<Recipe>("/api/recipe", recipe)
    )
  }

}
