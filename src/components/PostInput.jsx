import './PostInput.css'

export default function PostInput({ input, onChangeInput, onSend }) {

    const disabled = input.length > 140
    return (
        <div className="post-input-container">
            <textarea value={input} onChange={e => onChangeInput(e.target.value)} placeholder="Whats on your mind..." className="post-input" id="post-input"></textarea>
            <div className="button-row">

                <span className={disabled ? 'error' : 'unshown'}>The Tweet cannot contain more then 140 characters</span>

                <button className='button' disabled={disabled} onClick={onSend}>Tweet</button>
            </div>
        </div>
    )
}