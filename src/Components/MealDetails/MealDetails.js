import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const MealDetails = () => {
  const [meals, setMeals] = useState([]);
  const { mealId } = useParams();
  useEffect(() => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMeals(data.meals[0]));
  }, [mealId]);
  return (
    <div>
      <img src={meals.strMealThumb} alt="" />
      <h3>name: {meals.strMeal}</h3>
      <h3>area: {meals.strArea}</h3>
    </div>
  );
};

export default MealDetails;
