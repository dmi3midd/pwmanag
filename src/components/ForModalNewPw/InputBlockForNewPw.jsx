import React, { useState } from "react";
import { Eye, EyeOff } from 'lucide-react';

export default function InputBlockForNewPw({state, setState, name, type, settings}) {
    const [visiblePw, setVisisblePw] = useState(false);
    
    if (type === "password") {
        return (        
            <div>
                <label style={{ color: settings.modalNewPassword.text }} className="block text-[20px]">{name}</label>
                <div className="flex justify-between items-center w-[260px]">
                    <input
                        style={{ borderColor: settings.modalNewPassword.inputborder, color: settings.modalNewPassword.text }}
                        className="block w-[80%] h-[30px] p-[5px] rounded-[8px] border-2 text-[15px] duration-200 focus:scale-107"
                        type={!visiblePw ? "password" : "text"}
                        placeholder={name}
                        value={state}
                        onChange={ev => setState(ev.target.value)}
                    />
                    {visiblePw 
                        ? <Eye color={`${settings.modalNewPassword.text}`} size={25} onClick={() => setVisisblePw(false)}/> 
                        : <EyeOff color={`${settings.modalNewPassword.text}`} size={25} onClick={() => setVisisblePw(true)}/>
                    }
                </div>
            </div>
        )
    }

    return (
        <div>
            <label style={{ color: settings.modalNewPassword.text }} className="block text-[20px]">{name}</label>
            <input
                style={{ borderColor: settings.modalNewPassword.inputborder, color: settings.modalNewPassword.text }}
                className="block w-[80%] h-[30px] p-[5px] rounded-[8px] border-2 text-[15px] duration-200 focus:scale-107"
                type={type}
                placeholder={name}
                value={state}
                onChange={ev => setState(ev.target.value)}
            />
        </div>
    )
}