import React, { useEffect, useState } from "react";
import Meal from "../Meal/Meal";
import "./Restaurant.css";

const Restaurant = () => {
  const [searchText, setSearchText] = useState("");
  const [meals, setMeals] = useState([]);
  const searchFood = (e) => {
    setSearchText(e.target.value);
  };

  useEffect(() => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMeals(data.meals));
  }, [searchText]);
  //   const handleAddToOrder = () => {};

  return (
    <div>
      <h1>Find the food you want</h1>
      <input onChange={searchFood} type="text" />
      <p>Data found: {meals.length}</p>
      <div className="restaurant-container">
        {meals.map((meal) => (
          <Meal key={meal.idMeal} meal={meal}></Meal>
        ))}
      </div>
    </div>
  );
};

export default Restaurant;
