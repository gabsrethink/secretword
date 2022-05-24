import './GameOver.css'
import { Link } from "react-router-dom";
import {useContext} from "react";
import { ScoreContext } from "../context/ScoreContext";


const GameOver = ({score}) => {
  const {counter} = useContext(ScoreContext);
  return (
    <div>
      <div>
        <h1>Fim de Jogo!</h1>
        <h2>A sua pontuação foi: <span>{counter}</span></h2>
        <Link to="/" className="button">
        Página inicial
      </Link>
      </div>
    </div>
  )
}

export default GameOver