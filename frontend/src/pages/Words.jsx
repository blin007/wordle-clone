import { useState, useEffect} from "react";
import axios from "axios";

const Words = () => {
    const WORD_URL = 'TBD';
    // const [words, setWords] = useState({
    //     words: []
    // });


    const getAllWords = (e) => {
        e.preventDefault();
        // axios({
        //     method: 'GET',
        //     url: WORD_URL,
        // }).then((res) => {
        //     console.log(res);
        // });
        console.log('hello');
    }

    return (
        <>
            <form onSubmit={getAllWords}>
                <button type='submit'>Submit</button>
            </form>
        </>
    )
}

export default Words
