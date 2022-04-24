/**
 * Keyboard
 *
 * q w e r t y u i o p <-keyboardTop
 * a s d f g h j k l   <-keyboardMiddle
 * z x c v b n m       <-keyboardBottom
 *
 */
import {useEffect, useState} from "react";
import Layout from "./Layout";

//populate top keyboard
let keyboardTop = [];
const topKeys = 'qwertyuiop'.split('');
for (let i=0; i < topKeys.length; i++){
    keyboardTop.push(['','']);
    keyboardTop[i][0] = topKeys[i];
}

//populate middle keyboard
let keyboardMiddle = [];
const midKeys = 'asdfghjkl'.split('');
for (let i =0; i < midKeys.length; i++){
    keyboardMiddle.push(['','']);
    keyboardMiddle[i][0] = midKeys[i];
}

//populate bottom keyboard
let keyboardBottom = [];
const botKeys = 'zxcvbnm'.split('');
for (let i =0; i < botKeys.length; i++){
    keyboardBottom.push(['','']);
    keyboardBottom[i][0] = botKeys[i];
}

const Keyboard = (props) => {
    const [keysTop, setKeysTop] = useState(keyboardTop);
    const [keysMid, setKeysMid] = useState(keyboardMiddle);
    const [keysBot, setKeysBot] = useState(keyboardBottom);

    useEffect(()=>{
        // console.log('props.keyword in KeyBoard component:', props.keyword);
        for(let i=0; i<props.keyword.length; i++){
            if(topKeys.includes(props.keyword[i][0])){
                for(let j =0; j < keyboardTop.length; j++){
                    if(keyboardTop[j][0].toLowerCase()  === props.keyword[i][0].toLowerCase() ){
                        // console.log('keyboardtop',keyboardTop[j]);
                        //only update state of keyboard if there was no state, or the state was wrong, or if the state was set to present and the
                        // state can be updated to Correct
                        // we do not want to update the state of the keyboard when the state is already set to Correct
                        if ((keysTop[j][1]==='' || keysTop[j][1]==='Wrong') ||(keysTop[j][1]==='Present' && props.keyword[i][1]==='Correct')) {
                            setKeysTop((keyTop) => {
                                keyTop[j][1] = props.keyword[i][1];
                                return keyTop;
                            })
                        }
                    }
                }
            } else if (midKeys.includes(props.keyword[i][0])) {
                for(let j =0; j < keyboardMiddle.length; j++){
                    if(keyboardMiddle[j][0].toLowerCase()  === props.keyword[i][0].toLowerCase() ){
                        // console.log('keyboardmid', keyboardMiddle[j]);
                        if ((keysMid[j][1]==='' || keysMid[j][1]==='Wrong') ||(keysMid[j][1]==='Present' && props.keyword[i][1]==='Correct')) {
                            setKeysMid((keyMid) => {
                                keyMid[j][1] = props.keyword[i][1];
                                return keyMid;
                            })
                        }
                    }
                }
            } else if (botKeys.includes(props.keyword[i][0])) {
                for(let j =0; j < keyboardBottom.length; j++){
                    if(keyboardBottom[j][0].toLowerCase() === props.keyword[i][0].toLowerCase() ){
                        // console.log('keyboardbot', keyboardBottom[j]);
                        if ((keysBot[j][1]==='' || keysBot[j][1]==='Wrong') ||(keysBot[j][1]==='Present' && props.keyword[i][1]==='Correct')) {
                            setKeysBot((keyBot) => {
                                keyBot[j][1] = props.keyword[i][1];
                                return keyBot;
                            })
                        }
                    }
                }
            }
        }
    },[props.enterPress])

    return (
        <>
            <p>Letters used</p>
            <div className='flex inline-block w-full justify-center gap-1 items-center'>
                {/*MAP*/}
                {keysTop.map((letter, key)=>{
                    // console.log('letter', letter);
                    return (
                        <Layout value={letter[0]} index={key} eval={letter[1]} key={key}/>
                    )
                })}
            </div>
            <div className='flex inline-block justify-center gap-1 items-center py-2'>
                {keysMid.map((letter, key)=>{
                    // console.log('letter', letter);
                    return (
                        <Layout value={letter[0]} index={key} eval={letter[1]} key={key}/>
                    )
                })}
            </div>
            <div className='flex inline-block justify-center gap-1 items-center'>
                {keysBot.map((letter, key)=>{
                    // console.log('letter', letter);
                    return (
                        <Layout value={letter[0]} index={key} eval={letter[1]} key={key}/>
                    )
                })}
            </div>
        </>
    )
}

export default Keyboard;
