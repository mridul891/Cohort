
import { useState } from 'react';
import Headers from './Headers'

const HeaderWithButton = () => {
    const [title, setTitle] = useState("My name is Mridul");

    function updateTitle() {
        setTitle('my name is ' + Math.random())
    }
    return (
        <div>
            <button onClick={updateTitle}>Clicke me to change the title</button>
            <Headers title={title} />
        </div>
    )
}

export default HeaderWithButton