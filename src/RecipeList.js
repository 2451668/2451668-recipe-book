/* going to define a container for the individual recipe components. This will handle rendering the recipes themselves with the data from the .json file. I read that the map function in particular is good for transforming data arrays into component arrays, which is what I need for rendering each recipe comp. I'll make use of states to record when changes are made via the search bar and affect what's displayed. */

import React, { useState } from "react";
import Recipe from "./Recipe"; // importing the recipe comp. to use
import data from "./data.json"; // importing the JSON data

// defining the component itself

function RecipeList() {

    // this is where I'll handle filtering and searching
    const [searchTerm, setSearchTerm] = useState('');  // this State holds the current search term; starts empty since you need to type something first

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);  // updates search as you type
    };

    const filteredRecipes = data.filter(recipe => 
        recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
    );  // filters based on the search term, and so has to match the name prop. The result is 'filteredRecipes', an array of objects matching the search criteria, and is what is mapped to the Recipe comp. for display. Got help at https://stackoverflow.com/questions/44469548/es6-filter-data-with-case-insensitive-term with making the searches case insensitive

    return (
        <div>
            <input // some styling for search field 
                type="text"
                placeholder="Search recipes..."
                value={searchTerm}
                onChange={handleSearchChange}
                style={{ margin: "10px", padding: "5px" }}
            />
            {filteredRecipes.map(recipe => (
                // will use the map() function to iterate each item in the array and render a recipe comp. for each one

                <Recipe key={recipe.id} name={recipe.name} cookingTime={recipe.cookingTime} dietary={recipe.dietary} /> 

                // rendering a recipe comp. for each recipe, with the prop representing each data point. "filtered recipe" is technically all of them even when nothing is entered in search, since include('') returns true for any non-null condition. Got help from https://www.w3schools.com/jsref/jsref_filter.asp 
            ))}
        </div>
    );
}

export default RecipeList;