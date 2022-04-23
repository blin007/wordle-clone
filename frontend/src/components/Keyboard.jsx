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
        console.log('props.keyword in KeyBoard component:', props.keyword);
        for(let i=0; i<props.keyword.length; i++){
            if(topKeys.includes(props.keyword[i][0])){
                for(let j =0; j < keyboardTop.length; j++){
                    if(keyboardTop[j][0].toLowerCase()  === props.keyword[i][0].toLowerCase() ){
                        setKeysTop((keyTop)=>{
                            keyTop[j][1] = props.keyword[i][1];
                            return keyTop;
                        })
                        // keyboardTop[j][1] = props.keyword[i][1];
                        // console.log('keyboardtop',keyboardTop[j]);
                    }
                }
            } else if (midKeys.includes(props.keyword[i][0])) {
                for(let j =0; j < keyboardMiddle.length; j++){
                    if(keyboardMiddle[j][0].toLowerCase()  === props.keyword[i][0].toLowerCase() ){
                        setKeysMid((keyMid)=>{
                            keyMid[j][1] = props.keyword[i][1];
                            return keyMid;
                        })
                        // keyboardMiddle[j][1] = props.keyword[i][1];
                        // console.log('keyboardmid', keyboardMiddle[j]);
                    }
                }
            } else if (botKeys.includes(props.keyword[i][0])) {
                for(let j =0; j < keyboardBottom.length; j++){
                    if(keyboardBottom[j][0].toLowerCase() === props.keyword[i][0].toLowerCase() ){
                        setKeysBot((keyBot)=>{
                            keyBot[j][1] = props.keyword[i][1];
                            return keyBot;
                        })
                        // keyboardBottom[j][1] = props.keyword[i][1];
                        // console.log('keyboardbot', keyboardBottom[j]);
                    }
                }
            }
        }
    },[props.enterPress])

    return (
        <>
            <p>Letters used</p>
            <div className='flex inline-block w-full justify-center gap-1 items-center'>
                {keysTop.map((letter, key)=>{
                    // console.log('letter', letter);
                    return (
                        <Layout value={letter[0]} index={key} eval={letter[1]}/>
                    )
                })}
            </div>
            <div className='flex inline-block justify-center gap-1 items-center py-2'>
                {keysMid.map((letter, key)=>{
                    // console.log('letter', letter);
                    return (
                        <Layout value={letter[0]} index={key} eval={letter[1]}/>
                    )
                })}
            </div>
            <div className='flex inline-block justify-center gap-1 items-center'>
                {keysBot.map((letter, key)=>{
                    // console.log('letter', letter);
                    return (
                        <Layout value={letter[0]} index={key} eval={letter[1]}/>
                    )
                })}
            </div>
        </>
    )
}

export default Keyboard;
