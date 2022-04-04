import { useState, useEffect} from "react";
import axios from "axios";

const Register = ( ) =>{
    const REGISTER_URL = 'users/register';
    // const [username, setUsername] = useState('');
    // const [password, setPassword] = useState('');
    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });
    const {username, password} = formData;

    const onChange =(e) =>{
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
    }

    const onSubmit = (e) => {
        e.preventDefault();
        // console.log('formData:', formData)
        // console.log('username:', username)
        // console.log('password:', password)
        // console.log('formData username:', formData.username)
        // console.log('formData password:', formData.password)
        axios({
            method: 'POST',
            data: {
                username: username,
                password: password,
            },
            withCredentials: true,
            url: REGISTER_URL,
        }).then((res) => {console.log(res)});
    }

    return (
        <div>
            <h1>Register</h1>
            <form onSubmit={onSubmit}>
                <input
                    type='text'
                    placeholder='Enter username'
                    name='username'
                    value={username}
                    onChange={onChange}/>
                <input
                    type='password'
                    placeholder='Enter password'
                    name='password'
                    value={password}
                    onChange={onChange}/>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default Register
