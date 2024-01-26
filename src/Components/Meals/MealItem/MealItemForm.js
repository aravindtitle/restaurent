import React from "react";
import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input";

const MealItemForm = (props) => {
  return (
    <div>
      <form className={classes.form}>
        <Input
          label="Amount"
          input={{
            id: "amount",
            type: "number",
            min: "1",
            max: "5",
            defaultValue: "1",
          }}
        />

        <button type="submit">+Add</button>
      </form>
    </div>
  );
};

export default MealItemForm;
