import React from "react";
import {BookPlus, FileLock2, Settings} from 'lucide-react';

export default function MainPage() {

    return (
        <div className="flex justify-evenly items-center h-screen bg-[#111010]">
            <div className="flex flex-col items-center w-[150px] h-[150px] bg-[#0c0b0b] p-[15px] rounded-[10%] duration-200 hover:bg-[#161414]">
                <h2 className="text-[28px] text-[#414141]">New password</h2>
                <p><BookPlus color="#414141" size={28}/></p>
            </div>
            <div className="flex flex-col items-center w-[150px] h-[150px] bg-[#0c0b0b] p-[15px] rounded-[10%] duration-200 hover:bg-[#161414]">
                <h2 className="text-[28px] text-[#414141]">View passwords</h2>
                <p><FileLock2 color="#414141" size={28}/></p>
            </div>
            <div className="flex flex-col items-center justify-center w-[150px] h-[150px] p-[15px] bg-[#0c0b0b] rounded-[10%] duration-200 hover:bg-[#161414]">
                <h2 className="text-[28px] text-[#414141]">Settings</h2>
                <p><Settings color="#414141" size={28}/></p>
            </div>
        </div>
    )
}