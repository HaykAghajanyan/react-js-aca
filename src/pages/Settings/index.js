import {useState} from "react";

const Settings = () => {
    const [title, setTitle] = useState('')
    const [isTitleShown, setIsTitleShown] = useState(false)

    return (
        <div>
            {isTitleShown && title}
            <input
                type="text"
                value={title}
                onChange={e => setTitle(e.target.value)}
                onBlur={() => console.log('clicked outside')}
                onFocus={() => console.log('clicked on the input')}
            />
            <button onClick={() => setIsTitleShown(!isTitleShown)}>Click</button>
        </div>
    )
}

export default Settings
