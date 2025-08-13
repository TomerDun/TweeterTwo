import { useState } from "react"
import { useNavigate } from "react-router";
import { saveUserNameToStorage } from "../utils/storageHandler";

const navigate = useNavigate();

export default function UserPage() {
    const [nameInput, setNameInput] = useState('');

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
                <button>Submit</button>
            </div>
        </div>
    )
}