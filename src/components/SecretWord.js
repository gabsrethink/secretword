import '../App.css';





import StartScreen from '../pages/StartScreen';
import { useCallback, useEffect, useState } from 'react'

import { wordsList } from '../data/words'
import Game from '../pages/Game';
import GameOver from '../pages/GameOver';
import { useContext } from "react";
import { ScoreContext } from "../context/ScoreContext";

const stages = [
    { id: 1, name: 'start' },
    { id: 2, name: 'game' },
    { id: 3, name: 'end' }
];


const guessesQty = 5;

function SecretWord() {

    const [gameStage, setGameStage] = useState(stages[0].name);
    const [words] = useState(wordsList);
    const [pickedWord, setPickedWord] = useState("");
    const [pickedCategory, setPickedCategory] = useState("");
    const [letters, setLetters] = useState([]);

    const [guessedLetters, setGuessedLetters] = useState([]);
    const [wrongLetters, setWrongLetters] = useState([]);
    const [guesses, setGuesses] = useState(guessesQty);
    //const [score, setScore] = useState(0);
    const { counter, setCounter } = useContext(ScoreContext);



    const pickWordAndCategory = useCallback(() => {
        const categories = Object.keys(words);
        const category = categories[Math.floor(Math.random() * Object.keys(categories).length)];

        const word = words[category][Math.floor(Math.random() * words[category].length)];
        return { word, category };
    }, [words]);

    console.log("Página do Jogo", counter);
    // Starts the game
    const startGame = useCallback(() => {


        //clear all letters

        clearLetterStates();
        //pick word and category
        const { word, category } = pickWordAndCategory();

        //create an array of letters
        let wordLetters = word.split('');
        wordLetters = wordLetters.map((l) => l.toLowerCase());

        //fill states
        setPickedWord(word);
        setPickedCategory(category);
        setLetters(wordLetters);

        setGameStage(stages[1].name);
    }, [pickWordAndCategory]);


    // Process letter inputs
    const verifyLetter = (letter) => {

        const normalizedLetter = letter.toLowerCase();

        //check if letter has been used already
        if (guessedLetters.includes(normalizedLetter) || wrongLetters.includes(normalizedLetter)) {
            return;
        }
        //push guessed letter or remove a guess
        if (letters.includes(normalizedLetter)) {
            setGuessedLetters((currentGuessedLetters) => [
                ...currentGuessedLetters,
                normalizedLetter
            ]);
        } else {
            setWrongLetters((currentWrongLetters) => [
                ...currentWrongLetters,
                normalizedLetter
            ]);
            setGuesses((currentGuesses) => currentGuesses - 1)

        }

    };

    const clearLetterStates = () => {
        setGuessedLetters([]);
        setWrongLetters([]);
    }

    //check if guesses ended
    useEffect(() => {
        if (guesses === 0) {
            //reset all states
            clearLetterStates();

            setGameStage(stages[2].name);
        }

    }, [guesses])

    console.log(gameStage);
    //check win condition
    useEffect(() => {
        const uniqueLetters = [...new Set(letters)];



        //win condition
        if (guessedLetters.length === uniqueLetters.length) {

            if(gameStage === stages[1].name){
            //add score
            //setScore((currentScore) => currentScore = currentScore + 100)

            setCounter((counter + 100))


            }

            //restart game with a new word
            startGame();

        }


    }, [guessedLetters, letters, startGame, counter, setCounter, gameStage]);

    //Retry the game



    return (
        <div className="App">
            {gameStage === 'start' && <StartScreen />}
            {gameStage === 'game' && (<Game
                verifyLetter={verifyLetter}
                pickedWord={pickedWord}
                pickedCategory={pickedCategory}
                letters={letters}
                guessedLetters={guessedLetters}
                wrongLetters={wrongLetters}
                guesses={guesses}
                counter={counter}
            />)}
            {gameStage === 'end' && <GameOver />}
        </div>
    );
}

export default SecretWord;