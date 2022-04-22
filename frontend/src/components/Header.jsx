import {Link} from 'react-router-dom';

const Header = ( ) =>{
//
    return (
        <>
            <header className=' navbar flex w-full justify-between py-10 px-0 mb-2 border-b-2 border-black-700 '>
                <div className='ml-10 hover:text-cyan-600'>
                    {/*restart game */}
                    <Link to='/' onClick={() => window.location.href='/'}>Game</Link>
                </div>
                <h1 className='ml-9 text-3xl font-bold tracking-wider'> WORDLE </h1>
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
        </>
    )
}

export default Header
