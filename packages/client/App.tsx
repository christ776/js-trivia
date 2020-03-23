import React from "react";
import Card from "./components/Card";
import Question from "./components/Question";
import "./App.css";

const App = () => {
  const answers = ["Argentina", "Chile", "Brasil", "Uruguay"];
  const title = "Which Latin American Country has the biggest population";
  return (
    <div className="App">
      <Question title={title}/>
      <Card answers={answers} />
    </div>
  );
};

export default App;
