import React from "react";
import Entry from "./Entry";
import EditedEntry from './EditedEntry';

export default function ModalViewPassword({passwords, edidtedPw, setEditedPw, sendEditedPassword, deletePassword}) {
    return (
        <div className="flex flex-col w-[450px] h-[500px] p-[20px] rounded-[20px] bg-[#0c0b0b]">
            <h1 className="flex justify-center text-[#555555] mb-2">Passwords</h1>
            <div className="flex flex-col overflow-x-hidden overflow-y-auto gap-2" style={{ maxHeight: '420px' }}>
                {passwords.map((entry, idx) => (
                    edidtedPw !== entry
                    ? <Entry key={idx} entry={entry} setEditedPw={setEditedPw} deletePassword={deletePassword}/>
                    : <EditedEntry key={idx} entry={entry} setEditedPw={setEditedPw} sendEditedPassword={sendEditedPassword}/>
                ))}
            </div>
        </div>
    )
}