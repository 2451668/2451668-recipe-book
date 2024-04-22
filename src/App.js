// 2451668 - Thabang Maleka - WSOA4175A - recipe book application

/* disclaimer - as per the brief I'll feature some commentary throughout the build. It might get a little wordy or redundant at times, but I feel for my own sake I'll need the context and annotations - to really understand what it is I'm doing. I've seen the CBO and I think I'll be revisiting this build a lot, it being our first proper submission and all. I understand if this leads to penalties in marking.  */

import React from "react"; // needed for using JSX
import "./Recipe.css"; // needed for my stylesheet
import RecipeList from "./RecipeList"; // recipe list component


// root component for React applications; acts as a container for the whole app

function App() {
  // main app component, defined as a function
  return (
    <div className="App">
      <div className="mobile-screen">
        <div className="top-bar">Local Recipes</div>
        <RecipeList />
      </div>
    </div>
  );
}

export default App;

/* references and learning */

// https://www.w3schools.com/react/default.asp
// https://www.w3schools.com/react/react_components.asp
// https://www.w3schools.com/react/react_class.asp
// https://react.dev/learn
// https://www.youtube.com/watch?v=2-crBg6wpp0
// https://legacy.reactjs.org/docs/getting-started.html
// https://www.openai.com