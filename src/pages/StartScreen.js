import "./StartScreen.css";
import { Link } from "react-router-dom";

import {useContext} from "react";
import { ScoreContext } from "../context/ScoreContext";







const StartScreen = () => {

 
const {counter} = useContext(ScoreContext);

  return (
    <div className="start">
      <h2>Pontuação atual: {counter} </h2>
      <h1>Escolha o jogo:</h1>
      <p>Clique em algum botão para começar um jogo</p>
      <Link to="/secretword" className="button">
        Secret Word
      </Link>
    </div>
  )
}

export default StartScreen