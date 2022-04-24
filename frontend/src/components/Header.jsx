import {Link} from 'react-router-dom';
import { BiHelpCircle } from "react-icons/bi";
import {useState} from "react";
import TutorialModal from "./TutorialModal";

const Header = ( ) =>{
    const [openHelp, setOpenHelp] = useState(false);

    return (
        <>
            <header className=' navbar flex w-full justify-between py-2 px-0 mb-2 border-b-2 border-black-700 '>
                <div className='flex justify-center items-center ml-10'>
                    {/*restart game if you click on link*/}
                    <Link className='hover:text-cyan-600' to='/' onClick={() => window.location.href='/'}>Game</Link>
                    <div className='ml-2 hover:text-cyan-600 hover:cursor-pointer' >
                        <BiHelpCircle size={25} onClick={() => {setOpenHelp(true)}}/>
                    </div>
                </div>
                <Link to='/' className='text-3xl font-bold tracking-wider hover:text-cyan-600' onClick={() => window.location.href='/'}> WORDLE </Link>
                <ul className='flex items-center justify-evenly mr-10'>
                    <li className='ml-5 hover:text-cyan-600'>
                        <Link to='/wordlist'>Words</Link>
                    </li>
                </ul>
            </header>
            {openHelp && <TutorialModal close={setOpenHelp}/>}
        </>
    )
}

export default Header
