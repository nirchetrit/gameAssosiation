import React, { useState } from "react";
//import StartPage from "./StartPage";
import Game from "./Game";

function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  console.log("App rendered");
  if (isPlaying) {
    return <Game isPlaying={isPlaying} onFinish={() => setIsPlaying(false)} />;
  }

  return (
    <div>
      <button onClick={() => setIsPlaying(true)}>
        Click me to start the game
      </button>
    </div>
  );
}
export default App;
