import {useState, useEffect} from "react";

const Layout = (props) => {
    const [bg, setBg] = useState('bg-black');
    //add css to manipulate background of board box when props.letter is correct, present, or wrong
    useEffect(()=>{
        setTimeout(()=>{
            if(props.eval === 'Correct'){
                setBg('bg-green-600');
                console.log('set to green');
            } else if (props.eval === 'Present'){
                setBg('bg-yellow-400');
            } else if (props.eval === 'Wrong'){
                setBg('bg-red-700');
            }
        }, 300);

    },[props.eval]);

    return (
        <div className={`w-14 h-14 grid place-items-center text-white font-bold border-2 border-gray-600 rounded text-2xl ${bg}`}>
            {props.value}
        </div>
    )

}

export default Layout
