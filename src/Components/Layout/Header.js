import { Fragment } from "react";
import MealsImage from "../../assets/meals (2).jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={MealsImage} alt="A table full of delicious food" />
      </div>
    </Fragment>
  );
};
export default Header;
