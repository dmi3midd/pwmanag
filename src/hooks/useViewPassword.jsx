import React, {useEffect,  useState} from 'react';

export default function useViewPasswords() {
    const [passwords, setPasswords] = useState([]);
    const [isView, setView] = useState(false);

    useEffect(() => {
        window.electronAPI.onRequestForData((data) => {
            setPasswords(data);
        });
    }, []);
    const sendRequestForData = () => {
        setView(true);
        // window.electronAPI.requestForData('Sent request');
    };

    return {
        isView, setView,
        passwords, setPasswords,
        sendRequestForData
    }
}