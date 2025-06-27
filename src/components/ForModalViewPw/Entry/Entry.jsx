import React from "react";
import { Trash2, Pencil } from 'lucide-react';

import ItemForEntry from "./ItemForEntry";

export default function Entry({entry, setEditedPw, deletePassword, settings}) {
    return (
        <div style={{ background: settings.modalViewPassword.entrybg}} className="flex flex-col w-[380px] mb-[25px] p-[10px] rounded-[10px] transform transition duration-200 hover:translate-x-[10px]">
            <div className="flex justify-between pb-[5px] w-[40px]">
                <p onClick={() => deletePassword(entry)}>
                    <Trash2 color={`${settings.modalViewPassword.text}`} size={15}/>
                </p>
                <p onClick={() => setEditedPw(entry)}>
                    <Pencil color={`${settings.modalViewPassword.text}`} size={15}/>
                </p>
            </div>
            <ItemForEntry
                name="Service" 
                value={entry.service} 
                settings={settings}
            />
            <ItemForEntry 
                name="Password" 
                value={entry.password} 
                settings={settings} 
            />
            <ItemForEntry 
                name="Email" 
                value={entry.email} 
                settings={settings} 
            />
            <ItemForEntry
                name="Extra"
                value={entry.extra}
                settings={settings}
            />
        </div>
    )
}