/* going to define a container for the individual recipe components. This will handle rendering the recipes themselves with the data from the .json file. I read that the map function in particular is good for transforming data arrays into component arrays, which is what I need for rendering each recipe comp in various states. I'll make use of states to record when changes are made to search criteria and affect what's displayed. */

import React, { useState } from "react";
import Recipe from "./Recipe"; // importing the recipe component to use
import data from "./data.json"; // importing the JSON data

function RecipeList() {
    const [searchTerm, setSearchTerm] = useState('');
    // state for holding current search term; starts empty until populated
    const [filter, setFilter] = useState('');
     // sets state to hold current filter with empty meaning no filter is currently applied
    const [showFavourites, setShowFavourites] = useState(false);
    // state for tracking only favoured recipes

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    }; // updates search as you type

    const handleFilterChange = (category) => {
        setFilter(category);
    }; // updates filter as a dietary category is selected

    const toggleShowFavourites = () => {
        setShowFavourites(!showFavourites);
    }; // toggles whether to show only favourites

    const filteredRecipes = data.filter(recipe => {
        const searchMatch = recipe.name.toLowerCase().includes(searchTerm.toLowerCase());
        const dietMatch = filter === '' || recipe.dietary.includes(filter);
        return searchMatch && dietMatch;
    }); // filters based on the search term in addition to diet category. The result is 'filteredRecipes', an array of objects matching the search criteria, and is what is mapped to the Recipe comp. for display. Got help at https://stackoverflow.com/questions/44469548/es6-filter-data-with-case-insensitive-term with making the searches case insensitive

    return (
        <div>
            <input
                type="text"
                placeholder="Search recipes..."
                value={searchTerm}
                onChange={handleSearchChange}
                style={{ margin: "10px", padding: "5px" }}
            />
            <button onClick={() => handleFilterChange('')}>All</button>
            <button onClick={() => handleFilterChange('vegetarian')}>Vegetarian</button>
            <button onClick={() => handleFilterChange('vegan')}>Vegan</button>
            <button onClick={() => handleFilterChange('gluten-free')}>Gluten-Free</button>
            <button onClick={toggleShowFavourites}>
                {showFavourites ? 'Show All' : 'Show Favourites'}
            </button>
            {filteredRecipes.map(recipe => { 
                // will use the map() function to iterate each item in the array and render a recipe comp. for each one, assuming it meets whichever search criteria

                if (!showFavourites || recipe.isFavourite) {
                    return (
                        <Recipe
                            key={recipe.id}
                            name={recipe.name}
                            cookingTime={recipe.cookingTime}
                            dietary={recipe.dietary}
                        />
                    );
                }
                return null;

                // rendering a recipe comp. for each recipe, with the prop representing each data point. "filtered recipe" is technically all of them if no particular criterion is searched for, since include('') returns true for any non-null condition. Got help from https://www.w3schools.com/jsref/jsref_filter.asp 

            })}
        </div>
    );
}

export default RecipeList;

