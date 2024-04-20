/* going to define a container for the individual recipe components. This will handle rendering the recipes themselves with the data from the .json file. I read that the map function in particular is good for transforming data arrays into component arrays, which is what I need for rendering each recipe comp. */

import React from "react";
import Recipe from "./Recipe"; // importing the recipe comp. to use
import data from "./data.json"; // importing the JSON data

// defining the component itself

function RecipeList() {
    // will use the map() function to iterate each item in the array and render a recipe comp. for each one
    return (
        <div>
            {data.map(recipe => (
                // rendering a recipe comp. for each recipe, with the prop representing each data point
                <Recipe key={recipe.id} name={recipe.name} cookingTime={recipe.cookingTime} dietary={recipe.dietary} />
            ))}
        </div>
    );
}

export default RecipeList;