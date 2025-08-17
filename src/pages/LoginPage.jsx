import { useState } from "react"
import './LoginPage.css'
import { useAuth } from "../auth/AuthContext";

export default function LoginPage() {
    const [emailInput, setEmailInput] = useState('');
    const [pswInput, setPswInput] = useState('');
    const {onLogin} = useAuth();

    function handleSubmit(e) {
        e.preventDefault();
        onLogin(emailInput, pswInput);
    }
    return (
        <form onSubmit={handleSubmit} className="login-container" action="#">
            <fieldset>
                <label htmlFor="email">Email</label>
                <input value={emailInput} onChange={e => setEmailInput(e.target.value)} type="email" name="" id="email" />
            </fieldset>

            <fieldset>
                <label htmlFor="psw">Password</label>
                <input value={pswInput} onChange={e => setPswInput(e.target.value)} type="password" name="" id="psw" />
            </fieldset>

            <div className="button-row">
                <button className="button" type="submit">Login</button>
            </div>
        </form>
    )
}