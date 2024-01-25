import React from "react";
import classes from "./Meals.module.css";
import Cart from "../Cart/Cart";

const Meals = () => {
  return (
    <div className={classes.MealsContainer}>
      <h1 className={classes.Meals}>ReactMeals</h1>
      <Cart />
    </div>
  );
};

export default Meals;
