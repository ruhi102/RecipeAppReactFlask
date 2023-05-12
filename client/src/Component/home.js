import React, { useEffect, useState } from "react";
import "./rec.css";

function App() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const getRecipes = async () => {
      const API_KEY =
        "https://api.spoonacular.com/recipes/complexSearch?apiKey=7d1b48a04102400fa28627737fbbc5e8&query=italian&number=19&instructionsRequired=true";
      const response = await fetch(API_KEY);
      const data = await response.json();
      console.log(data);
      setRecipes(data.results);
    };
    getRecipes();
  }, []);

  return (
    <div className="wrapper">
      {recipes.map((recipe) => (
        <Card
          key={recipe.id}
          img={recipe.image}
          title={recipe.title}
        />
      ))}
    </div>
  );
}

function Card(props) {
  return (
    <div className="card">
      <div className="card__body">
        <img src={props.img} alt={props.title} className="card__image" />
        <h2 className="card__title">{props.title}</h2>
      </div>
      <button className="card__btn">View Recipe</button>
    </div>
  );
}

export default App;