import React, {useEffect,  useState} from 'react';

export default function useNewPassword() {
    const [isAdding, setAdding] = useState(false);

    useEffect(() => {
        window.electronAPI.onSetPasswd((data) => {
            console.log(data);
        });
    }, []);
    const sendPassword = (password) => {
        window.electronAPI.setPasswd(password);
    }

    return {
        isAdding, setAdding,
        sendPassword
    }
}