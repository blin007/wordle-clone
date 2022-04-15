import {useState, useEffect} from "react";
import Board from "./Board";
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

let box = [];
const rowTotal = 6;
const colTotal = 5;
for(let i = 0; i < rowTotal; i++){
    box.push([]);
    for(let j = 0; j < colTotal; j++){
        //['letter','state']
        box[i].push(['','']);
    }
}

const BoardLogic = () => {


    return (
        <>
            <div className="grid gap-1 w-full justify-center">
                {box.map((row) => {
                    return (
                        <div className='flex gap-1 w-fit'>
                            {row.map(() => (
                                <Board/>
                            ))}
                        </div>
                    )
                })}

            </div>
        </>
    )
}

export default BoardLogic;
