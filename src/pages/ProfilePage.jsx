import { useState } from "react"
import { useNavigate } from "react-router";
import { saveUserNameToStorage } from "../utils/storageHandler";


export default function ProfilePage() {
    const [nameInput, setNameInput] = useState('');
    const navigate = useNavigate();

    function onSubmit() {
        saveUserNameToStorage(nameInput);
        navigate('/')
    }

    return (
        <div className="user-page-container">
            <h1>Profile</h1>
            <label htmlFor="user-name">User Name</label>
            <input value={nameInput} onChange={e => setNameInput(e.target.value)} placeholder="Username..." type="text" id="user-name" />

            <div className="button-row">
                <button disabled={!nameInput} onClick={onSubmit}>Submit</button>
            </div> 
        </div>
    )
}