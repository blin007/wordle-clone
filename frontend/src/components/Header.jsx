import {Link} from 'react-router-dom';
import { BiHelpCircle } from "react-icons/bi";
import {useState} from "react";
import TutorialModal from "./TutorialModal";

const Header = ( ) =>{
    const [openHelp, setOpenHelp] = useState(false);

    return (
        <>
            <header className=' navbar flex w-full justify-between py-10 px-0 mb-2 border-b-2 border-black-700 '>
                <div className='flex justify-center items-center ml-10'>
                    {/*restart game */}
                    <Link className='hover:text-cyan-600' to='/' onClick={() => window.location.href='/'}>Game</Link>
                    <div className='ml-2 hover:text-green-500'>
                        <BiHelpCircle size={25} onClick={() => {setOpenHelp(true)}}/>
                    </div>
                </div>
                <h1 className='text-3xl font-bold tracking-wider'> WORDLE </h1>
                <ul className='flex items-center justify-evenly mr-10'>
                    {/*<li className='ml-5 hover:text-cyan-600'>*/}
                    {/*    <Link to='/register'>Register</Link>*/}
                    {/*</li>*/}
                    {/*<li className='ml-5 hover:text-cyan-600'>*/}
                    {/*    <Link to='/login'>Login</Link>*/}
                    {/*</li>*/}
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
