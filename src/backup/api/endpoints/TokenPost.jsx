import React, {useState} from 'react'

const TokenPost = () => {

    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [token, setToken] = useState('');

    function handleSubmit(event) {
        event.preventDefault()

        fetch('https://dogsapi.origamid.dev/json/jwt-auth/v1/token', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username,
                password,
            })
        }).then(response => {
            console.log(response);
            return response.json();
        }).then(json => {
            console.log(json);
            setToken(json.token);
            return json;
        })

    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                value={username} 
                onChange={({target}) => setUserName(target.value)}
                placeholder="username" 
            />
            <input 
                type="password" 
                value={password} 
                onChange={({target}) => setPassword(target.value)}
                placeholder="password" 
            />
            <button>Enviar</button>
            <p style={{wordBreak: 'break-all'}}>{token}</p>
        </form >
    )
}

export default TokenPost
