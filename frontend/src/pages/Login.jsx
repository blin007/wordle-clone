import { useState, useEffect} from "react";
import axios from "axios";

const Login = ( ) =>{
    const LOGIN_URL = 'users/login';
    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });

    const [loginStatus, setLoginStatus] = useState('');

    const { username, password} = formData;

    const onChange =(e) =>{
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
        // console.log('username', username);
        // console.log('password', password);
    }


    const onSubmit = (e) => {
        e.preventDefault();

        axios({
            method: 'POST',
            data: {
                username: formData.username,
                password: formData.password,
            },
            withCredentials: true,
            url: LOGIN_URL,
        }).then((res) => {
            setLoginStatus(res.data);
        });
    }

    return (
        <>
            <div>
                <h1>Login</h1>
                <form onSubmit={onSubmit}>
                    <input
                        className='border'
                        type='text'
                        placeholder='Enter username'
                        name='username'
                        value={username}
                        onChange={onChange}/>
                    <input
                        className='border'
                        type='password'
                        placeholder='Enter password'
                        name='password'
                        value={password}
                        onChange={onChange}/>
                    <button type='submit'>Submit</button>
                    <p>{loginStatus}</p>
                </form>
            </div>
        </>
    )
}

export default Login
