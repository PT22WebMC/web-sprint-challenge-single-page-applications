import React from "react";
import { useHistory } from "react-router-dom";

export default function HomePage(props) {
  const history = useHistory();
  console.log("history", history);
  const navToPizzaForm = (e) => {
    history.push("/pizza");
  };
  return (
    <>
      <h2>Your favorite food, delivered while coding</h2>
      <button className='homePage-button' onClick={navToPizzaForm}>
        Pizza?
      </button>
    </>
  );
}
