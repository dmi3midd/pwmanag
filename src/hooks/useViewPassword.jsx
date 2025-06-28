import React, { useEffect, useState } from 'react';

export default function useViewPasswords() {
    const [passwords, setPasswords] = useState([]);
    const [isView, setView] = useState(false);
    const [edidtedPw, setEditedPw] = useState({});

    useEffect(() => {
        window.electronAPI.onRequestForData((data) => {
            setPasswords(data);
        });
        window.electronAPI.onEditPasswd((data) => {
            console.log("Try to edit password", data);
        });
        window.electronAPI.onDeletePasswd((data) => {
            console.log("Try to delete password", data);
        });
    }, []);
    const sendRequestForData = () => {
        window.electronAPI.requestForData('request for data');
    }
    useEffect(() => {
        sendRequestForData();
    }, []);


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