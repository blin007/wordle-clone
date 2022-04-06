import {useState} from "react";
import axios from "axios";

const Register = ( ) =>{
    const REGISTER_URL = 'users/register';
    // const [username, setUsername] = useState('');
    // const [password, setPassword] = useState('');
    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });

    const [usersinDB, setUsersInDB] = useState([]);

    const {username, password} = formData;
    
    const onChange =(e) =>{
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
    }

    const getUsers = (e) => {
        e.preventDefault();
        axios({
            method: 'GET',
            url: REGISTER_URL,
        }).then((res) => {
            //get all usernames from the response object
            const users = res.data.map(ele => {
                return ele.username;
            })
            // console.log(users)
            console.log(res.data);
            setUsersInDB(users)
        });
    }
    const onSubmit = (e) => {
        e.preventDefault();

        axios({
            method: 'POST',
            data: {
                username: username,
                password: password,
            },
            withCredentials: true,
            url: REGISTER_URL,
        }).then((res) => {
            console.log(res)
        });
    }

    return (
        <>
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

                <form onSubmit={getUsers} className='getUserForm'>
                    <button type='submit'>Get All Users</button>
                </form>
                <h3>All users in DB</h3>
                <ul className='userList'>
                    {usersinDB.map(user => (
                        <li>{user}</li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default Register
