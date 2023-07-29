import React, { useState } from "react";
import "./App.css";
import Questions from "./components/Questions";
import Scoreboard from "./components/Scoreboard";

function App() {
  const [question, setQuestion] = useState(null);

  return (
    <div className="App">
      <h1>Welcome to Jeopardy!</h1>
      <div className="Scoreboard">
        <Scoreboard question={question} />
      </div>
      <div className="Questions">
        <Questions setQuestion={setQuestion} />
      </div>
    </div>
  );
}

export default App;
