import {useState, useEffect} from "react";
import axios from "axios";
import BoardLogic from "./BoardLogic";


const GameLogic = () => {
    const START_GAME_URL = '/game'
    const [correctWord, setCorrectWord] = useState('');
    const [letter, setLetter] = useState('');

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


    return (
        <>
            <div>
                Correct Answer: {correctWord}
            </div>
            <BoardLogic/>
        </>
    )
}

export default GameLogic;
