import { useRouter } from 'next/router';
import axios from 'axios';
import {useState} from 'react';
import { BrowserRouter } from "react-router-dom";

import { BACKEND_SERVER_URL } from '../constants/backend';
const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();
    const submit = async (e) => {
        e.preventDefault();
        
        await fetch(BACKEND_SERVER_URL + "login", {
            method: "POST",
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        })

        const params = new URLSearchParams()
params.append('username', username)
params.append('password', password)

const config = {
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    }
}

        axios.post("login", params, config).then(res => {
            console.log(res);

            localStorage.setItem('access_token', res.data.access_token)
            localStorage.setItem('refresh_token', res.data.refresh_token)
               const config = {
                    headers: {
                        'Authorization': 'Bearer ' + localStorage.getItem('access_token'),
                        'Content-Type': 'application/x-www-form-urlencoded'
                    }
                }
                // console.log(config);
                // console.log(localStorage.getItem('access_token'))
                axios.get('v1/users/user/get', config).then(
                    res => {
                      console.log(res.data.data.user)
                         localStorage.setItem('user', res.data.data.user);
                        // console.log(res, res.data.data.user)
                    }, err => {
                        console.log(err)
                    }
                )
            

        }).catch(err => {console.log(err)})
        
    }
    return ( 
        <>
        <form className="form-signin" onSubmit={submit}>
            <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
            <input type="name" id="inputUsername" className="form-control" placeholder="Username" onChange={e => setUsername(e.target.value)} required/>
            <br/>
            <input type="password" id="inputPassword" className="form-control" placeholder="Password" required  onChange={e => setPassword(e.target.value)}/>
            <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
        </form>
        </>
     );
}
 
export default Login;