import {useState} from 'react';
import axios from 'axios';

const projectID = "e92e4996-43d3-43f7-9fda-7d014791b9a9";
const LoginForm = () => {
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    const [error,setError] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        const authObject = {'Project-ID' : projectID ,'User-Name' : username ,'User-Secret' : password};

        try{
            await axios.get('https://api.chatengine.io/chats/',{ headers : authObject});
            localStorage.setItem('username',username);
            localStorage.setItem('password',password);
            window.location.reload();
            setError('');
        }catch(error){
            setError("Incorrect Username or password!");
        }
    }

    return (
        <div className="wrapper">
            <div className="form">
                <h1 className="title">Chat Application</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" value={username} placeholder="Username" onChange={(event) => {setUsername(event.target.value)}} className="input" required/>
                    <input type="password" value={password} placeholder="Password" onChange={(event) => {setPassword(event.target.value)}} className="input" required/>
                    <div align="center">
                        <button type="submit" className="button">
                            <span>Start Chatting</span>
                        </button>
                    </div>
                    <h2 className="error">{error}</h2>
                </form>
            </div>
        </div>
    )
}

export default LoginForm;