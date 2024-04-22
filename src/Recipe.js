/* going to define the recipe component here. This component will be for displaying data about a single recipe. I'll use props to pass data and states to manage it. I'll also dedicated this script for handling favouring functions on a script-by-script basis.*/

import React, { useState } from "react";
import "./Recipe.css"; // stylesheet

// defining the Recipe component with props as its parameter
function Recipe(props) {
    // styling will be applied to a particular recipe if it's favoured, otherwise, generic

    return (
        <div className = "recipe">
            <div className="recipe-content">
            <h2>{props.name}</h2>
            <p>Cooking Time : {props.cookingTime} minutes</p>
            <p>Dietary : {props.dietary.join(", ")}</p>
            <button onClick={props.toggleFavourite}>
                {props.isFavourite ? 'Unfavourite' : 'Favourite'}
            </button>
        </div>
        </div> 
    );
}

export default Recipe; // ,aking it available for import in other files

