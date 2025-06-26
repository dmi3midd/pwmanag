import React from "react";
import Entry from "./Entry";

export default function ModalViewPassword({passwords}) {
    return (
        // <div className="flex flex-col items-center w-[440px] h-[50с0px] p-[20px] rounded-[20px] bg-[#0c0b0b]">
        //     <h1 className="flex justify-center text-[#414141]">Paasswords</h1>
        //     {passwords.map((entry, idx) => (
        //         <Entry key={idx} entry={entry}/>
        //     ))}
        // </div>
        <div className="flex flex-col w-[440px] h-[500px] p-[20px] rounded-[20px] bg-[#0c0b0b]">
            <h1 className="flex justify-center text-[#414141] mb-2">Passwords</h1>
            <div className="flex flex-col overflow-x-hidden overflow-y-auto gap-2" style={{ maxHeight: '420px' }}>
                {passwords.map((entry, idx) => (
                    <Entry key={idx} entry={entry} />
                ))}
            </div>
        </div>
    )
}