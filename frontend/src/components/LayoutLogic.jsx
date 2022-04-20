import {useState, useEffect} from "react";
import Layout from "./Layout";
import EndGameModal from "./EndGameModal";
import WordOptions from "../wordOptions";

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
    const [start, setStart] = useState(false);

    //keep track of whether the game has complete or not
    const [win, setWin] = useState(false);
    const [lose, setLose] = useState(false);
    const [result, setResult] = useState('');
    const [modalMessage, setModalMessage] = useState('');
    const [openEndModal, setOpenEndModal] = useState(false);

    //error message
    const [error, setError] = useState('');
    const [visible, setVisible] = useState(false);

    const answer = props.answer;
    /**
     *TODO in the case where user input has two letters that are the same but the correct word is only one of that letter,
     * must only show green to the letter in correct place and red for the other letter
     */

    const validateWord = () => {
        //check if letter is inplace so we don't
    }

    useEffect(()=> {
        if(win || lose){
            if(win)console.log("You Won!");
            else console.log("You Lost! Correct answer was:", answer);
        }
        //if the player has not won or lost, then keep going
        else {
            //check if the user has input anything
            if(props.keyPress > 0){
                //bug that duplicates first letter
                // setStart(true);
                //check for the key input, whether it is a backspace, enter, or letter
                if(props.letter === "Backspace"){
                    console.log('backspace pressed!')
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
                        console.log('Word must be 5 letters!')
                        setError('Word must be 5 letters!');
                        setVisible(true);
                    } else {
                        console.log('row:',row);
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
                                setRow(row + 1);
                                setCol(0);
                                setWord("");
                                setWin(true);
                                setTimeout(() => {
                                    setResult('Congratulations!');
                                    setModalMessage(`You Won in ${row + 1} ${(row + 1) > 1 ? 'guesses' : 'guess'}!`);
                                    setOpenEndModal(true);
                                }, 800);
                            } else {
                                for (let i = 0; i < wordArr.length; i++) {
                                    if (wordArr[i] === answerArr[i]) {
                                        setLayout((board) => {
                                            board[row][i][1] = 'Correct';
                                            return board;
                                        })
                                    } else if (answerArr.includes(wordArr[i])) {
                                        setLayout((board) => {
                                            board[row][i][1] = 'Present';
                                            return board;
                                        })
                                    } else {
                                        setLayout((board) => {
                                            board[row][i][1] = 'Wrong';
                                            return board;
                                        })
                                    }
                                }
                                if (row === 5) {
                                    setLose(true);
                                    setTimeout(() => {
                                        setResult('You Lost!');
                                        setModalMessage(`Correct word was: ${answer}!`);
                                        setOpenEndModal(true);
                                    }, 800);
                                }
                                console.log('board:', layout);
                                setRow(row + 1);
                                setCol(0);
                                setWord("");
                            }
                        }
                        else {
                            console.log('Word entered not in word list')
                            setError('Word not in wordlist!');
                            setVisible(true);
                        }

                    }
                } else if (letters.includes(props.letter.toLowerCase())){
                    setLayout((board)=>{
                        //first check if this is the last col
                        if(col < 5){
                            board[row][col][0] = props.letter;
                            setWord(word += board[row][col][0]);
                            console.log(word);
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
            <div className="grid gap-1 w-full justify-center">
                {layout.map((row, key) => {
                    return (
                        <div className='flex gap-1 w-fit' key={key}>
                            {row.map((value, key) => (
                                <Layout value={value[0]} eval={value[1]} key={key}/>
                            ))}
                        </div>
                    )
                })}

            </div>
            <div className={`text-center text-bold text-3xl p-2 ${visible ? 'visible' : 'invisible'}`}>
                {error}
            </div>


        </>
    )
}

export default LayoutLogic;
