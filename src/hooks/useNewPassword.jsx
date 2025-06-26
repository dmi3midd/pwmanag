import React, {useEffect,  useState} from 'react';

export default function useNewPassword() {
    const [isAdding, setAdding] = useState(false);

    useEffect(() => {
        window.electronAPI.onSentPasswd((data) => {
            console.log(data);
        });
    }, []);
    const sendPassword = (password) => {
        window.electronAPI.sendPasswd(password);
    }

    return {
        isAdding, setAdding,
        sendPassword
    }
}