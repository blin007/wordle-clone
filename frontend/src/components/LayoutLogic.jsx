import {useState, useEffect} from "react";
import Layout from "./Layout";
import EndGameModal from "./EndGameModal";
import WordOptions from "../wordOptions";
import Keyboard from "./Keyboard";

//declare some global variables
const letters = ['a','b','c','d','e','f','g','h','i','j','k',
    'l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

/** Structure of the word boxes
 *  Multidimensional array (3d)
 *  [[[x,state],[x,state],[x,state],[x,state],[x,state]],
 *  [[x,state],[x,state],[x,state],[x,state],[x,state]],
 *  [[x,state],[x,state],[x,state],[x,state],[x,state]],
 *  [[x,state],[x,state],[x,state],[x,state],[x,state]],
 *  [[x,state],[x,state],[x,state],[x,state],[x,state]],
 *  [[x,state],[x,state],[x,state],[x,state],[x,state]]]
 *
 *  x corresponds to a letter
 *  'state' corresponds to the letter being: Correct, Present, or Wrong
 */

let wordBox = [];
const rowTotal = 6;
const colTotal = 5;
for(let i = 0; i < rowTotal; i++){
    wordBox.push([]);
    for(let j = 0; j < colTotal; j++){
        //['letter','state']
        wordBox[i].push(['','']);
    }
}

const LayoutLogic = (props) => {
    //modify the board with user input
    const [layout, setLayout] = useState(wordBox);
    //need to utilize state for the indices of the game board
    const [row, setRow] = useState(0);
    const [col, setCol] = useState(0);
    //keep track of word created by each row
    let [word, setWord] = useState('');

    //keep track of whether the game has complete or not
    const [done, setDone] = useState(false);
    const [result, setResult] = useState('');
    const [modalMessage, setModalMessage] = useState('');
    const [openEndModal, setOpenEndModal] = useState(false);

    //error message
    const [error, setError] = useState('');
    const [visible, setVisible] = useState(false);

    //keep track of word and state to send to keyboard component
    const [keyWord, setKeyWord] = useState([]);
    const [enterPress, setEnterPress] = useState(0);

    const answer = props.answer;

    //check if word has more than one of the same letter in it
    //This regex should check if the word has duplicate char
    const validateWord = (word, char) => {
        let re = new RegExp(`(${char}).*\\1`);
        return re.test(word);
    }

    useEffect(()=> {
        if(!done) {
            //check if the user has input anything
            if(props.keyPress > 0){
                //check for the key input, whether it is a backspace, enter, or letter
                if(props.letter === "Backspace"){
                    setLayout((board) => {
                        if(col === 0){
                            board[row][0][0]="";
                        } else {
                            //col indices go from | 0 | 1 | 2 | 3 | 4 |
                            //so to access col, we have to do col-1 since it will get incremented such that col=5
                            setCol(col-1);
                            board[row][col-1][0] = "";
                            setWord(word.slice(0,word.length-1));
                        }
                        return board;
                    });
                    setVisible(false);
                } else if (props.letter === "Enter"){
                    if (col < 5){
                        setError('Word must be 5 letters!');
                        setVisible(true);
                        setTimeout(() =>{
                            setVisible(false);
                        }, 1000);
                    } else {
                        const answerArr = answer.split('');
                        const wordArr = word.split('');

                        //check if the word entered by user is present in the word list
                        if(WordOptions.includes(word)) {
                            if (word === answer) {
                                for (let i = 0; i < col; i++) {
                                    setLayout((board) => {
                                        board[row][i][1] = 'Correct';
                                        return board;
                                    })
                                }
                                //move to the next row and end the game
                                setRow(row + 1);
                                setCol(0);
                                setWord("");
                                setDone(true);
                                setTimeout(() => {
                                    setResult('Congratulations!');
                                    setModalMessage(`You Won in ${row + 1} ${(row + 1) > 1 ? 'guesses' : 'guess'}!`);
                                    setOpenEndModal(true);
                                }, 600);
                            } else {
                                for (let i = 0; i < wordArr.length; i++) {
                                    if (wordArr[i] === answerArr[i]) {
                                        setLayout((board) => {
                                            if(board[row][i][1] === ''){
                                                board[row][i][1] = 'Correct';
                                            }
                                            return board;
                                        })
                                        // setKeyWord((keyword) => {
                                        //     if(keyword[i] === undefined){
                                        //         keyword.push(['','']);
                                        //     }
                                        //     keyword[i][0] = wordArr[i];
                                        //     keyword[i][1] = 'Correct';
                                        //     return keyword;
                                        // })

                                    } else if (answerArr.includes(wordArr[i])) {
                                        //we need to check if the word that the user input has more than one of the same letter, and
                                        // whether the correct word has more than one of the same letter
                                        // for instance, if the correct word is: REACH, which has one letter 'E' in it, and the user
                                        // inputs a word: LEEKS, which has two letters 'E' in it. We want the first 'E' in LEEKS to be green
                                        // while the second E in LEEKS to be red so the user will not think that there are two 'E's in play

                                        //thus we check if the word the user has input has more than one of the letter and if the
                                        // correct answer only has one of that same letter
                                        if (validateWord(word, wordArr[i]) && !validateWord(answer, wordArr[i])){
                                            const letter = wordArr[i];
                                            let letterInPlace = false;
                                            let letterPresent = false;

                                            console.log('letter', letter)
                                            console.log('word:', word, 'wordArr[i]', wordArr[i]);
                                            //first loop through the word and see if the answer and input have the same letter at same index
                                            // if so, set letterInPlace to true
                                            for (let i = 0; i < wordArr.length; i++){
                                                if(wordArr[i] === letter && answerArr[i] === letter){
                                                    setLayout((board) => {
                                                        board[row][i][1] = 'Correct';
                                                        return board;
                                                    });

                                                    letterInPlace = true;
                                                    break;
                                                } else if (wordArr[i] === letter) {
                                                    //if there is only one instance of the letter in the answer, make sure the other
                                                    // tiles containing that letter appear as wrong
                                                    if(letterPresent){
                                                        setLayout((board) => {
                                                            board[row][i][1] = 'Wrong';
                                                            return board;
                                                        });

                                                    } else {
                                                        setLayout((board) => {
                                                            board[row][i][1] = 'Present';
                                                            return board;
                                                        })
                                                    }
                                                    letterPresent = true;
                                                }
                                            }

                                            //if letterInPlace is true, then go through the input and set all positions having
                                            // the letter to wrong
                                            if(letterInPlace){
                                                for (let i = 0; i < wordArr.length; i++){
                                                     if (wordArr[i] === letter && answerArr[i] !== letter) {
                                                        setLayout((board) => {
                                                            board[row][i][1] = 'Wrong';
                                                            return board;
                                                        });
                                                    }
                                                }
                                            }
                                        }
                                        setLayout((board) => {
                                            if(board[row][i][1] === ''){
                                                board[row][i][1] = 'Present';
                                            }
                                            return board;
                                        })

                                    } else {
                                        setLayout((board) => {
                                            if (board[row][i][1] === ''){
                                                board[row][i][1] = 'Wrong';
                                            }
                                            return board;
                                        })
                                    }
                                }
                                console.log('keyword at end', keyWord);

                                setKeyWord((keyWord) =>{
                                    if(keyWord[0] === undefined){
                                        keyWord = layout[row];
                                    }
                                    return keyWord;
                                })

                                setEnterPress(e => e+1);

                                console.log('keyword at end', keyWord);
                                if (row === 5) {
                                    setDone(true);
                                    setTimeout(() => {
                                        setResult('L + RATIO!');
                                        setModalMessage(`Correct word was: ${answer}!`);
                                        setOpenEndModal(true);
                                    }, 600);
                                }
                                // console.log('board:', layout);
                                setRow(row + 1);
                                setCol(0);
                                setWord("");
                                setTimeout(()=>{
                                    setKeyWord([]);
                                },1000);
                            }
                        }
                        else {
                            // console.log('Word entered not in word list')
                            setError('Word not in wordlist!');
                            setVisible(true);
                        }

                    }
                } else if (letters.includes(props.letter.toLowerCase())){
                    setLayout((board)=>{
                        //Check if this is the last col
                        if(col < 5){
                            board[row][col][0] = props.letter;
                            setWord(word += board[row][col][0]);
                            setCol(col+1);
                        }
                        return board;
                    });
                }
            }
        }
    }, //only trigger the effect when the user has input something
    [props.keyPress]);

    return (
        <>
            {/*open the endgame modal only if openEndModal is set to true*/}
            {openEndModal && <EndGameModal result={result} message={modalMessage} close={setOpenEndModal}/>}
            <div className="grid gap-1 w-full justify-center py-4">
                {/*HOF*/}
                {layout.map((row, key) => {
                    return (
                        <div className='flex gap-1 w-fit' key={key}>
                            {row.map((value, key) => (
                                <Layout value={value[0]} eval={value[1]} index={key}/>
                            ))}
                        </div>
                    )
                })}

            </div>
            {visible && <div className='text-center text-bold text-3xl p-2'>
                {error}
            </div>}
            <br/>
            <Keyboard keyword={keyWord} enterPress={enterPress}/>
        </>
    )
}

export default LayoutLogic;
