import { useState, useEffect} from "react";
import axios from "axios";

const Words = () => {
    const ADDWORD_URL = 'words/add';
    const GETWORD_URL = 'words/list';
    const [words, setWords] = useState([]);
    const [word, setWord] = useState('');
    // const [wordMessage, setWordMessage] = useState('');

    const addWord = (e) => {
        e.preventDefault();
        if(word.length !== 5){
            // setWordMessage('Word must be 5 letters long!');
            alert('Word must be 5 letters long!');
        } else{
            axios({
                method: 'POST',
                data: {
                    text: word
                },
                url: ADDWORD_URL,
            }).then((res) => {
                console.log('in axios post add word')
                console.log(res);
            })
        }
    }

    const getAllWords = (e) => {
        e.preventDefault();
        axios({
            method: 'GET',
            url: GETWORD_URL,
        }).then((res) => {
            const words = res.data.map(word => {
                return word.text;
            })
            setWords(words);
            // console.log(res.data);
        });
    }

    return (
        <>
            <h1>Add a 5 letter Word!</h1>
            <form onSubmit={addWord}>
                <input
                    className='border'
                    type='text'
                    placeholder='Enter word'
                    name='word'
                    value={word}
                    onChange={e => setWord(e.target.value)}/>
                <button type='submit'>Submit</button>
            </form>
            <form onSubmit={getAllWords} className='getWordForm'>
                <button type='submit'>Get Words From DB</button>
            </form>
            <ul className='wordList'>
                {words.map(word => (
                    <li>{word}</li>
                ))}
            </ul>
        </>
    )
}

export default Words
