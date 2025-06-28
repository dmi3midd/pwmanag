import React, { useState } from "react";
import { Eye, EyeOff } from 'lucide-react';

export default function ItemForEditedEntry({state, setState, name, type, settings}) {
    const [visiblePw, setVisisblePw] = useState(false);
    if (type === "password") {
        return (
            <div className="flex justify-between items-center w-[350px] pb-[5px]">
                <label style={{ color: settings.modalViewPassword.text }}>{name}</label>
                <div className="flex items-center justify-end w-[300px]">
                    <input
                        style={{ borderColor: settings.modalViewPassword.inputborder, color: settings.modalViewPassword.text }}
                        className="block w-[220px] h-[30px] p-[5px] rounded-[8px] border-2 text-[15px] duration-200 focus:scale-107"
                        type={!visiblePw ? "password" : "text"}
                        value={state}
                        onChange={ev => setState(ev.target.value)}
                    />
                    {visiblePw
                        ? <Eye color={`${settings.modalNewPassword.text}`} size={25} onClick={() => setVisisblePw(false)} />
                        : <EyeOff color={`${settings.modalNewPassword.text}`} size={25} onClick={() => setVisisblePw(true)} />
                    }
                </div>
            </div>
        )
    }
    return (
        <div className="flex justify-between items-center w-[350px] pb-[5px]">
            <label style={{ color: settings.modalViewPassword.text }}>{name}</label>
            <input
                style={{ borderColor: settings.modalViewPassword.inputborder, color: settings.modalViewPassword.text }}
                className="block w-[70%] h-[30px] p-[5px] rounded-[8px] border-2 text-[15px] duration-200 focus:scale-107"
                type={type}
                value={state}
                onChange={ev => setState(ev.target.value)}
            />
        </div>
    )
}