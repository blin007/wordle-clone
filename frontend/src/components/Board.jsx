import {useState, useEffect} from "react";

const Board = (props) => {

    //add css to manipulate background of board box when props.letter is correct, present, or wrong

    return (
        <div className="w-14 h-14 grid place-items-center text-black font-bold border-2 border-gray-400 bg-white">
            {props.value}
        </div>
    )

}

export default Board
