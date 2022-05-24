import './Game.css'
import { useState, useRef } from 'react';
import { FaHeart } from "react-icons/fa";
import {useContext} from "react";
import { ScoreContext } from "../context/ScoreContext";


const Game = ({ verifyLetter, pickedWord, pickedCategory, letters, guessedLetters, wrongLetters, guesses }) => {

  const [letter, setLetter] = useState("");
  const letterInputRef = useRef(null);
  const {counter} = useContext(ScoreContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    verifyLetter(letter);
    setLetter("");
    letterInputRef.current.focus();
  }

  const heartsMaker = () => {
    let icons = [];
    for (let index = 0; index < guesses; index++) {
      icons = [
        ...icons,
        <span key={index}>
          <FaHeart />
        </span>,
      ];
    }

    return icons;
  };

  return (
    <div className="game">

      <p className="points">
        <span>Pontuação: {counter} </span>
      </p>

      <h1>Adivinhe a palavra:</h1>

      <h3 className="tip">
        Dica sobre a palavra: <span>{pickedCategory}</span>
      </h3>
      {/* <p>Você ainda tem {guesses} tentativa(s).</p> */}
      <p>Total de tentativa(s):</p>
      <p className="lifes">{heartsMaker().map((item) => item)} </p>


      <div className="wordContainer">
        {letters.map((letter, i) => (
          guessedLetters.includes(letter) ? (<span key={i} className="letter">{letter}</span>) : (<span key={i} className="blankSquare"></span>)
        ))}
      </div>

      <div className="letterContainer">
        <p>Tente adivinhar uma letra da palavra:</p>
        <form onSubmit={handleSubmit}>
          <input type="text" name="letter" maxLength="1" required onChange={(e) => setLetter(e.target.value)} value={letter} ref={letterInputRef} />
          <button>Jogar!</button>
        </form>
      </div>

      <div className="wrongLettersContainer">
        <p>Letras já utilizadas: </p>
        {wrongLetters.map((letter, i) => (
          <span key={i}>{letter}, </span>
        ))}
      </div>

    </div>

  )
}

export default Game