import React from "react";
import Entry from "./Entry";

export default function ModalViewPassword({passwords}) {
    return (
        <div className="flex flex-col w-[450px] h-[500px] p-[20px] rounded-[20px] bg-[#0c0b0b]">
            <h1 className="flex justify-center text-[#555555] mb-2">Passwords</h1>
            <div className="flex flex-col overflow-x-hidden overflow-y-auto gap-2" style={{ maxHeight: '420px' }}>
                {passwords.map((entry, idx) => (
                    <Entry key={idx} entry={entry} />
                ))}
            </div>
        </div>
    )
}