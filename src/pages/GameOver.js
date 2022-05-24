import './GameOver.css'
import { Link } from "react-router-dom";


const GameOver = ({score}) => {
  return (
    <div>
      <div>
        <h1>Fim de Jogo!</h1>
        <h2>A sua pontuação foi: <span>{score}</span></h2>
        <Link to="/" className="button">
        Página inicial
      </Link>
      </div>
    </div>
  )
}

export default GameOver