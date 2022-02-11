package ibf2021.assessment.csf.server.controllers;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import ibf2021.assessment.csf.server.models.Recipe;
import ibf2021.assessment.csf.server.services.RecipeService;
import jakarta.json.Json;
import jakarta.json.JsonArrayBuilder;
import jakarta.json.JsonObjectBuilder;
import jakarta.json.JsonValue;

import org.springframework.http.MediaType;

@RestController
@CrossOrigin
public class RecipeRestController {

    @Autowired
    RecipeService recipeService;

    @GetMapping(path="/api/recipe/{id}", produces=MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<String> getRecipesById(@PathVariable String id) {
        
        Recipe recipe = recipeService.getRecipeById(id).get();

        JsonObjectBuilder recipeJsonObj = Json.createObjectBuilder();
        JsonArrayBuilder ingredientsJsonArray = Json.createArrayBuilder();

        List<String> ingredients = new ArrayList<>();
        ingredients = recipe.getIngredients();
        for(int i=0; i<ingredients.size(); i++) {
            ingredientsJsonArray.add(ingredients.get(i));
        }

        recipeJsonObj.add("id", recipe.getId())
                    .add("title", recipe.getTitle())
                    .add("image", recipe.getImage())
                    .add("instruction", recipe.getInstruction())
                    .add("ingredients", ingredientsJsonArray);
        return ResponseEntity.ok(recipeJsonObj.build().toString());
    }
}