import React, { useEffect, useState } from 'react';

export default function useNewPassword() {
    const [isAdding, setAdding] = useState(false);

    useEffect(() => {
        window.electronAPI.onSetPasswd((data) => {
            console.log("Try to set password", data);
        });
    }, []);
    const sendPassword = (password) => {
        window.electronAPI.setPasswd(password);
        window.location.reload();
    }

    return {
        isAdding, setAdding,
        sendPassword
    }
}