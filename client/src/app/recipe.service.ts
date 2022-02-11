import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { lastValueFrom } from "rxjs";
import { RecipeList } from "./models";

@Injectable()
export class RecipeService {

  constructor(private http: HttpClient) {}

  getAllRecipes() {
    return(lastValueFrom(
      this.http.get<RecipeList[]>("http://localhost:8080/api/recipes")
    ))
  }
}
