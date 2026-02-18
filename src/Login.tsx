import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react"
import { auth } from "./firebase";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async()=>{
        try {
            await signInWithEmailAndPassword(auth, email, password);
            alert("Logged in successfully")
        } catch (error) {
            alert("Login failed");
            console.log('error', error)
        }
    }
    return (
        <>
         <input type="email" placeholder="Enter your email" value={email} onChange={e=>setEmail(e.target.value)}/>
         <input type="password" placeholder="Enter your password" value={password} onChange={e=>setPassword(e.target.value)}/>
         <button onClick={handleLogin}>Login</button>
        </>
    )
}

export default Login