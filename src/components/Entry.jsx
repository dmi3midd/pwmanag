import React from "react";
import {Trash2, Pencil} from 'lucide-react';

export default function Entry({entry, setEditedPw, deletePassword}) {
    return (
        <div className="flex flex-col w-[380px] mb-[25px] p-[10px] rounded-[10px] bg-[#1c1d1f] transform transition duration-200 hover:translate-x-[10px]">
            <div className="flex justify-between pb-[5px] w-[40px]">
                <p onClick={() => deletePassword(entry)}>
                    <Trash2 color="#555555" size={15}/>
                </p>
                <p onClick={() => setEditedPw(entry)}>
                    <Pencil color="#555555" size={15}/>
                </p>
            </div>
            <div className="flex justify-between items-center w-[350px]">
                <p className="text-[#555555]">Service:</p>
                <p className="text-end w-[220px] break-words whitespace-normal text-[#555555]">{entry.service}</p>
            </div>
            <div className="flex justify-between items-center w-[350px]">
                <p className="text-[#555555]">Password:</p>
                <p className="text-end w-[220px] break-words whitespace-normal text-[#555555]">{entry.password}</p>
            </div>
            <div className="flex justify-between items-center w-[350px]">
                <p className="text-[#555555]">Email:</p>
                <p className="text-end w-[220px] break-words whitespace-normal text-[#555555]">{entry.email}</p>
            </div>
            {(entry.extra != "") && 
                <div className="flex justify-between items-center w-[350px]">
                    <p className="text-[#555555]">Extra:</p>
                    <p className="text-end w-[220px] break-words whitespace-normal text-[#555555]">{entry.extra}</p>
                </div>
            }
        </div>
    )
}