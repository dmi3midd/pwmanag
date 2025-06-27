import React from "react";

import Entry from "./Entry/Entry";
import EditedEntry from './EditedEntry/EditedEntry';

export default function ModalViewPassword({passwords, edidtedPw, setEditedPw, sendEditedPassword, deletePassword, settings}) {
    return (
        <div style={{ background: settings.modalViewPassword.modalbg}} className="flex flex-col w-[450px] h-[500px] p-[20px] rounded-[20px]">
            <h1 style={{ color: settings.modalViewPassword.text}} className="flex justify-center mb-2">Passwords</h1>
            <div className="flex flex-col max-h-[420px] overflow-x-hidden overflow-y-auto gap-2">
                {passwords.map((entry, idx) => (
                    edidtedPw !== entry
                    ? (<Entry 
                        key={idx} 
                        entry={entry} 
                        setEditedPw={setEditedPw} 
                        deletePassword={deletePassword} 
                        settings={settings}
                    />)
                    : (<EditedEntry 
                        key={idx} 
                        entry={entry} 
                        setEditedPw={setEditedPw} 
                        sendEditedPassword={sendEditedPassword} 
                        settings={settings}
                    />)
                ))}
            </div>
        </div>
    )
}