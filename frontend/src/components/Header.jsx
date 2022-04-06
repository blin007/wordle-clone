import {Link} from 'react-router-dom';

const Header = ( ) =>{
    return (
        <>
            <header className='header'>
                <div>
                    <Link to='/'>Word Game</Link>
                </div>
                <ul className='headerLinks'>
                    <li>
                        <Link to='/register'>Register</Link>
                    </li>
                    <li>
                        <Link to='/login'>Login</Link>
                    </li>
                    <li>
                        <Link to='/wordlist'>Words</Link>
                    </li>
                </ul>
            </header>
        </>
    )
}

export default Header
