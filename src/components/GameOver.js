import './GameOver.css'

const GameOver = ({retry, score}) => {
  return (
    <div>
      <div>
        <h1>Fim de Jogo!</h1>
        <h2>A sua pontuação foi: <span>{score}</span></h2>
        <button onClick={retry}>Recomeçar</button>
      </div>
    </div>
  )
}

export default GameOver