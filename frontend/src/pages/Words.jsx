import { useState } from "react";
import axios from "axios";

const Words = () => {
    const ADD_WORD_URL = 'words/add';
    const GET_WORD_URL = 'words/list';
    const DEL_WORD_URL = 'words/delete';
    const [words, setWords] = useState([]);
    const [word, setWord] = useState('');
    const [error, setError] = useState(false);
    const [message, setMessage] = useState('');
    const [addErrorAnimation, setAddErrorAnimation] = useState('');
    const [delErrorAnimation, setDelErrorAnimation] = useState('');

    const validate = (input) => {
        const reg = /^[a-z]+$/i;
        return reg.test(input);
    }

    const addWord = (e) => {
        e.preventDefault();
        if(word.length !== 5){
            setError(true);
            setMessage('Word must be 5 letters long!');
            setAddErrorAnimation('animate-shake');
        }
        //check if the input is a number
        else if (!validate(word)) {
            setError(true);
            setMessage('Word cannot include numbers and symbols');
            setAddErrorAnimation('animate-shake');
        }
        else{
            axios({
                method: 'POST',
                data: {
                    text: word
                },
                url: ADD_WORD_URL,
            }).then((res) => {
                if(res.data === 'already exists'){
                    setError(true);
                    setMessage('Word already in game, try another one');
                    setAddErrorAnimation('animate-shake');
                }
                //clear input field after submitting
                setWord('');
                //get all the words again
                getAllWords(e);
            })
        }
        setTimeout(()=> {
            setError(false);
            setMessage('');
            setAddErrorAnimation('');
        }, 2000);

    }

    const getAllWords = (e) => {
        e.preventDefault();

        axios({
            method: 'GET',
            url: GET_WORD_URL,
        }).then((res) => {
            const words = res.data.map(word => {
                return word.text;
            })
            setWords(words);
        });
    }

    //only remove words if there are more than 10 words in DB, if not then don't delete word
    const removeWord = (e, word) => {
        e.preventDefault();
        axios({
            method: 'DELETE',
            data: {
                text: word,
            },
            url: DEL_WORD_URL,
        }).then((res)=> {
            //get all the words again
            if(res.data === 'less 10'){
                setError(true);
                setMessage('Cannot remove words when there are less than 10 in play!');
                setDelErrorAnimation('animate-shake');
            }
            getAllWords(e);
        });
        setTimeout(()=> {
            setError(false);
            setMessage('');
            setDelErrorAnimation('');
        }, 2500);
    }

    return (
        <>
            <h1 className='text-center font-bold text-2xl'>Add a 5 letter Word!</h1>
            <div className='flex justify-center items-center '>
                <form onSubmit={addWord}>
                    <input
                        className='border border-gray-800 text-gray-800 m-2 w-28 h-8 rounded-lg hover:shadow-lg text-center'
                        type='text'
                        placeholder='Enter word'
                        name='word'
                        value={word}
                        onChange={e => setWord(e.target.value)}/>
                    <button type='submit'
                            className= {`m-2 border w-14 h-8 bg-blue-700 rounded-lg hover:shadow-lg hover:bg-blue-500 ${addErrorAnimation}`}
                            >Add</button>
                </form>
                <form onSubmit={getAllWords}>
                    <button type='submit' className='m-2 border w-44 h-8 cursor-pointer bg-cyan-700 rounded-lg hover:shadow-lg hover:bg-cyan-400'>Get Words From DB</button>
                </form>
            </div>
            {error && <div className='flex justify-center items-center text-2xl font-bold'>{message}</div>}
            <table className='grid grid-cols-8 gap-2 mt-2'>
                {words.map((word,key) => {
                    return (
                        <tbody>
                            <tr key={key} className='grid place-items-center border-2 border-gray-800 hover:cursor-pointer hover:shadow-lg'>
                                <td className='' key={key}>
                                    {/*pass in the word to delete*/}
                                    <form onSubmit={(e) => removeWord(e, word)} key={key}>
                                        {word}
                                        <button className={`text-2xl font-bold text-red-500 hover:text-red-900 hover:text-3xl ml-6 ${delErrorAnimation}`}
                                                type='submit'
                                                key={key}>X</button>
                                    </form>
                                </td>
                            </tr>
                        </tbody>
                    );
                })}
            </table>
        </>
    )
}

export default Words
