import React, {useEffect,  useState} from 'react';

export default function useViewPasswords() {
    const [passwords, setPasswords] = useState([]);
    const [isView, setView] = useState(false);
    const [edidtedPw, setEditedPw] = useState({});

    useEffect(() => {
        window.electronAPI.onRequestForData((data) => {
            setPasswords(data);
        });
        window.electronAPI.onEditPasswd((data) => {
            console.log("Response from electron", data);
        });
        window.electronAPI.onDeletePasswd((data) => {
            console.log("Response from electron", data);
        })
    }, []);
    const sendRequestForData = () => {
        setView(true);
        window.electronAPI.requestForData('Sent request');
    };


    const sendEditedPassword = (editedPasswd) => {
        setPasswords((prev) =>
            [...prev].map((pw) =>
                pw.id === editedPasswd.id ? editedPasswd : pw
            )
        );
        window.electronAPI.editPasswd(editedPasswd);
    }

    const deletePassword = (deletedPasswd) => {
        const updatedPasswords = [...passwords].filter(pw => deletedPasswd.id !== pw.id);
        console.log(updatedPasswords);
        setPasswords(updatedPasswords);
        window.electronAPI.deletePasswd(deletedPasswd);
    }

    return {
        passwords, setPasswords,
        isView, setView,
        edidtedPw, setEditedPw,
        sendRequestForData,
        sendEditedPassword,
        deletePassword,
    }
}