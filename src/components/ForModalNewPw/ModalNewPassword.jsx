import React, { useState } from "react";
import { nanoid } from 'nanoid'

import InputBlockForNewPw from "./InputBlockForNewPw";

export default function ModalNewPassword({sendPassword, setAdding, settings}) {
    const [service, setService] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [extra, setExtra] = useState("");

    const addPassword = () => {
        sendPassword({id: nanoid(), service: service, password: password, email: email, extra: extra});
        setAdding(false);
    }

    return (
        <div style={{ background: settings.modalNewPassword.modalbg }} className="flex flex-col w-[300px] h-[450px] p-[20px] rounded-[20px]">
            <h1 style={{ color: settings.modalNewPassword.text }} className="flex justify-center text-[25px]">New password</h1>
            <form onSubmit={addPassword} className="flex flex-col justify-evenly h-[100%]">
                <InputBlockForNewPw 
                    state={service} 
                    setState={setService} 
                    name="Service" 
                    type="text" 
                    settings={settings}
                />
                <InputBlockForNewPw 
                    state={password} 
                    setState={setPassword} 
                    name="Password" 
                    type="password" 
                    settings={settings}
                />
                <InputBlockForNewPw 
                    state={email} 
                    setState={setEmail} 
                    name="Email" 
                    type="email"
                    settings={settings}
                />
                <InputBlockForNewPw 
                    state={extra} 
                    setState={setExtra} 
                    name="Extra" 
                    type="text" 
                    settings={settings}
                />
                <button 
                    type="submit" 
                    style={{ color: settings.modalNewPassword.btntext, background: settings.modalNewPassword.btnbg }}
                    className="flex justify-center items-center w-[80px] h-[30px] rounded-[10px] text-[15px] duration-200 hover:rotate-15 hover:pl-[10px]">
                    Add
                </button>
            </form>
        </div>
    )
}