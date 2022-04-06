import { useState, useEffect} from "react";
import axios from "axios";

const Login = ( ) =>{
    const LOGIN_URL = 'users/login';
    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });

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
        }).then((res) => {console.log(res)});
    }

    return (
        <>
            <div>
                <h1>Login</h1>
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
        </>

        // <>
        //     <section className='heading'>
        //         <h1>Login</h1>
        //         <p> Please Login</p>
        //     </section>
        //
        //     <section className='form'>
        //         <form onSubmit={onSubmit}>
        //             <input
        //                 type='text'
        //                 className='form-control'
        //                 id='username'
        //                 name='username'
        //                 value={username}
        //                 placeholder='Enter username'
        //                 onChange={onChange}/>
        //             <input
        //                 type='password'
        //                 className='form-control'
        //                 id='password'
        //                 name='password'
        //                 value={password}
        //                 placeholder='Enter password'
        //                 onChange={onChange}/>
        //             <button type='submit' className='btn btn-block'>Submit</button>
        //
        //         </form>
        //     </section>
        // </>
    )
}

export default Login
