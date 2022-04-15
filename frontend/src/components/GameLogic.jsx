import {useState, useEffect} from "react";
import axios from "axios";
import LayoutLogic from "./LayoutLogic";

const letters = ['a','b','c','d','e','f','g','h','i','j','k',
    'l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

const GameLogic = () => {
    const START_GAME_URL = '/game'
    const [correctWord, setCorrectWord] = useState('');
    const [letter, setLetter] = useState('');
    //checks if the user is inputting anything at all
    //and in layout logic, keypress will trigger useEffect
    const [keyPress, setKeyPress] = useState(0);

    //get the answer on startup
    useEffect(() => {
        axios({
            method: 'GET',
            url: START_GAME_URL,
        }).then((res) => {
            setCorrectWord(res.data[0].text);
            console.log(res);
        });
    }, [])

    useEffect(()=> {
        window.addEventListener('keydown', onKeyPress);

        return ()=> {
            window.removeEventListener('keydown', onKeyPress);
        }
    });

    const onKeyPress = (evt) => {
        evt.preventDefault();
        //make sure not case-sensitive
        if(letters.includes(evt.key.toLowerCase())){
            setLetter(evt.key);
            setKeyPress(keyPress + 1);
        } else if (evt.key === 'Enter'){
            setLetter('Enter');
            setKeyPress(keyPress + 1);
        } else if (evt.key === 'Backspace'){
            setLetter('Backspace');
            setKeyPress(keyPress + 1);
        }
    }

    return (
        <>
            {/*<div>*/}
            {/*    Correct Answer: {correctWord}*/}
            {/*    /!*Key Input: {letter}*!/*/}
            {/*    /!*Key Presses: {keyPress}*!/*/}
            {/*</div>*/}
            <LayoutLogic letter={letter} answer={correctWord} keyPress={keyPress}/>
        </>
    )
}

export default GameLogic;
