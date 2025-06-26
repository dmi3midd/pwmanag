import React, {useState} from "react";
import {Trash2, X, Check} from 'lucide-react';

export default function EditedEntry({entry, setEditedPw, sendEditedPassword}) {
    const [service, setService] = useState(entry.service);
    const [password, setPassword] = useState(entry.password);
    const [email, setEmail] = useState(entry.email);
    const [extra, setExtra] = useState(entry.extra);

    const editPassword = () => {
        console.log("edit");
        console.log({id: entry.id, service: service, password: password, email: email, extra: extra});
        sendEditedPassword({id: entry.id, service: service, password: password, email: email, extra: extra});
        setEditedPw({});
    }
    return (
        <form onSubmit={editPassword} className="flex flex-col w-[380px] mb-[25px] p-[10px] rounded-[10px] bg-[#1c1d1f] transform transition duration-200 hover:translate-x-[10px]">
            <div className="flex justify-between pb-[5px] w-[40px]">
                <p onClick={() => setEditedPw({})}>
                    <X color="#555555" size={15}/>
                </p>
                <button type="submit">
                    <Check color="#555555" size={15}/>
                </button>
            </div>
            <div className="flex justify-between items-center w-[350px] pb-[5px]">
                <label className="text-[#555555]">Service:</label>
                <input className="block w-[70%] h-[30px] p-[5px] rounded-[8px] border-2 border-[#555555] text-[#555555] text-[15px] duration-200 focus:scale-107"
                    type="text"
                    required
                    value={service}
                    onChange={ev => setService(ev.target.value)}
                />
            </div>
            <div className="flex justify-between items-center w-[350px] pb-[5px]">
                <label className="text-[#555555]">Password:</label>
                <input className="block w-[70%] h-[30px] p-[5px] rounded-[8px] border-2 border-[#555555] text-[#555555] text-[15px] duration-200 focus:scale-107"
                    type="text"
                    required
                    value={password}
                    onChange={ev => setPassword(ev.target.value)}
                />
            </div>
            <div className="flex justify-between items-center w-[350px] pb-[5px]">
                <label className="text-[#555555]">Email:</label>
                <input className="block w-[70%] h-[30px] p-[5px] rounded-[8px] border-2 border-[#555555] text-[#555555] text-[15px] duration-200 focus:scale-107"
                    type="text"
                    required
                    value={email}
                    onChange={ev => setEmail(ev.target.value)}
                />
            </div>
            {(entry.extra !== "") && 
                <div className="flex justify-between items-center w-[350px] pb-[5px]">
                    <label className="text-[#555555]">Extra:</label>
                    <input className="block w-[70%] h-[30px] p-[5px] rounded-[8px] border-2 border-[#555555] text-[#555555] text-[15px] duration-200 focus:scale-107"
                        type="text"
                        required
                        value={extra}
                        onChange={ev => setExtra(ev.target.value)}
                    />
                </div>
            }
        </form>
    )
}