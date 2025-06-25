import React, {useEffect,  useState} from 'react';

export default function useNewPassword() {
    const [isAdding, setAdding] = useState(false);

    useEffect(() => {
        window.electronAPI.onSentPasswd((data) => {
            console.log(data);
        });
    }, []);
    const sendPassword = (password) => {
        setAdding(true);
        // window.electronAPI.sendPasswd({service: "google", login: "dmi3mid", password: "qwerty123"});
    }

    return {
        isAdding, setAdding,
        sendPassword
    }
}