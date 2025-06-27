import React from "react";

export default function InputBlockForNewPw({state, setState, name, type, settings}) {
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