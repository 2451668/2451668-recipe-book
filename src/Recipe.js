/* going to define the recipe component here. This component will be for displaying data about a single recipe. I'll use props to pass data and states to manage it*/

import React from "react";

// defining the recipe comp with props as its parameter

function Recipe(props) {
    return (
        <div className="recipe" > 
            <h2>{props.name}</h2>
            <p>Cooking Time : {props.cookingTime} minutes</p>
            <p>Dietary : {props.dietary.join(",")}</p>
        </div>
    );
}

export default Recipe; // making it available for import in other files