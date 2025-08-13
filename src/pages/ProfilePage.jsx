import { useState } from "react"
import { useNavigate } from "react-router";
import { saveUserNameToStorage } from "../utils/storageHandler";
import './ProfilePage.css'


export default function ProfilePage() {
    const [nameInput, setNameInput] = useState('');
    const navigate = useNavigate();

    function onSubmit() {
        saveUserNameToStorage(nameInput);
        navigate('/')
    }

    return (
        <div className="profile-page-container">
            <h1>Profile</h1>

            <div className="input-container">
                <label htmlFor="user-name">User Name</label>
                <input value={nameInput} onChange={e => setNameInput(e.target.value)} placeholder="Username..." type="text" name="user-name" id="user-name" />
            </div>


            <div className="button-row">
                <button className="button" disabled={!nameInput} onClick={onSubmit}>Submit</button>
            </div>
        </div>
    )
}