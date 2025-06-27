import React from "react";

export default function ItemForEditedEntry({state, setState, name, type, settings}) {
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