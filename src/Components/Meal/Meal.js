import React from "react";
import { useNavigate } from "react-router-dom";
import "./Meal.css";

const Meal = ({ meal }) => {
  const { strMealThumb, strMeal, strArea, idMeal } = meal;
  //   const { handleAddToOrder, meal } = meal;
  const navigate = useNavigate();
  const showMealDetail = () => {
    navigate("/meal/" + idMeal);
  };

  return (
    <div className="meal">
      <img src={strMealThumb} alt="" />
      <h3>{strMeal}</h3>
      <h3>{strArea}</h3>
      <button onClick={showMealDetail}>
        {strMeal} id: {idMeal}
      </button>
    </div>
  );
};

export default Meal;
