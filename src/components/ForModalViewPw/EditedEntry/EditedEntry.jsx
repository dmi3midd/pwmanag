import React, { useState } from "react";
import { X, Check } from 'lucide-react';

import ItemForEditedEntry from "./ItemForEditedEntry";

export default function EditedEntry({entry, setEditedPw, sendEditedPassword, settings}) {
    const [service, setService] = useState(entry.service);
    const [password, setPassword] = useState(entry.password);
    const [email, setEmail] = useState(entry.email);
    const [extra, setExtra] = useState(entry.extra);

    const editPassword = () => {
        sendEditedPassword({id: entry.id, service: service, password: password, email: email, extra: extra});
        setEditedPw({});
    }

    return (
        <form 
            onSubmit={editPassword}
            style={{ background: settings.modalViewPassword.entrybg}} 
            className="flex flex-col w-[380px] mb-[25px] p-[10px] rounded-[10px] transform transition duration-200 hover:translate-x-[10px]">
            <div className="flex justify-between pb-[5px] w-[40px]">
                <p onClick={() => setEditedPw({})}>
                    <X color={`${settings.modalViewPassword.text}`} size={15}/>
                </p>
                <button type="submit">
                    <Check color={`${settings.modalViewPassword.text}`} size={15}/>
                </button>
            </div>
            <ItemForEditedEntry 
                state={service} 
                setState={setService} 
                name="Service" 
                type="text" 
                settings={settings} 
            />
            <ItemForEditedEntry 
                state={password} 
                setState={setPassword} 
                name="Password" 
                type="password" 
                settings={settings} 
            />
            <ItemForEditedEntry 
                state={email} 
                setState={setEmail} 
                name="Email" 
                type="email" 
                settings={settings} 
            />
            <ItemForEditedEntry
                state={extra}
                setState={setExtra}
                name="Extra"
                type="text"
                settings={settings}
            />
        </form>
    )
}