package ibf2021.assessment.csf.server.controllers;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import ibf2021.assessment.csf.server.models.Recipe;
import ibf2021.assessment.csf.server.services.RecipeService;
import jakarta.json.Json;
import jakarta.json.JsonArray;
import jakarta.json.JsonArrayBuilder;
import jakarta.json.JsonObject;
import jakarta.json.JsonObjectBuilder;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;

@RestController
@CrossOrigin
public class RecipesRestController {

    @Autowired
    RecipeService recipeService;

    @GetMapping(path="/api/recipes", produces=MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<String> getAllRecipes() {
        JsonArrayBuilder recipeListJsonArray = Json.createArrayBuilder();
        JsonObjectBuilder recipeJsonObj = Json.createObjectBuilder();
        List<Recipe> recipeList = recipeService.getAllRecipes();

        for (Recipe recipe : recipeList) {
            recipeListJsonArray.add(
                recipeJsonObj.add("id", recipe.getId()).add("title", recipe.getTitle()));
        }
        return ResponseEntity.ok(recipeListJsonArray.build().toString());
    }


}





