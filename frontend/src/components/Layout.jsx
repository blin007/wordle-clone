import {useState, useEffect} from "react";

const Layout = (props) => {
    const [bg, setBg] = useState('bg-white text-black');

    useEffect(()=>{
        setTimeout(()=>{
            if(props.eval === 'Correct'){
                setBg('bg-green-600 text-white animate-pop');
            } else if (props.eval === 'Present'){
                setBg('bg-yellow-400 text-white animate-pop');
            } else if (props.eval === 'Wrong'){
                setBg('bg-red-700 text-white animate-pop');
            }
        }, 100 * props.index);
    },[props.eval]);

    return (
        <div className={`w-14 h-14 grid place-items-center uppercase font-bold border-2 border-gray-600 rounded text-2xl ${bg}`}>
            {props.value}
        </div>
    )

}

export default Layout
