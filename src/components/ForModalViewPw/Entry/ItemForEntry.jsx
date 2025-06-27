import React from "react";

export default function ItemForEntry({name, value, settings}) {
    return (
        <div className="flex justify-between items-center w-[350px]">
            <p style={{ color: settings.modalViewPassword.text }}>{name}:</p>
            <p style={{ color: settings.modalViewPassword.text }} className="text-end w-[220px] break-words whitespace-normal">{value}</p>
        </div>
    )
}