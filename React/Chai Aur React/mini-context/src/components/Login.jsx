import React, { useContext, useState } from "react";  
import userContext from "../context/UserContext";

export default function Login(){
    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')
    const {setUser} = useContext(userContext)
    const handle = (e) => {
        e.preventDefault()
        setUser(username,password)
        setUsername('')
        setPassword('')
    }
    return(<div>
        <input type="text" className="border-2" value={username} onChange={(e) => setUsername(e.target.value)} />
        <input type="password" className="border-2" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button className='bg-blue-400 px-2' onClick={handle}>Submit</button>
    </div>)
}