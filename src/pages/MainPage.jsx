import React, {useEffect, useState} from "react";
import {BookPlus, FileLock2, Settings} from 'lucide-react';
import useNewPassword from "../hooks/useNewPassword";
import useViewPasswords from "../hooks/useViewPassword";
import Modal from "../components/Modal";
import ModalNewPassword from "../components/ModalNewPassword";
import ModalViewPassword from "../components/ModalViewPasswords";

export default function MainPage() {
    const {
        isAdding, setAdding,
        sendPassword,
    } = useNewPassword();
    const {
        isView, setView,
        passwords, setPasswords,
        sendRequestForData,
    } = useViewPasswords();


    return (
        <div className="flex justify-evenly items-center h-screen bg-[#1c1d1f]">
            <div onClick={() => setAdding(true)} className="flex flex-col items-center w-[170px] h-[170px] bg-[#141313] p-[15px] rounded-[10%] transform transition duration-200 hover:translate-y-[-25px]">
                <h2 className="text-[28px] text-[#555555] font-hubot">New password</h2>
                <p><BookPlus color="#555555" size={28}/></p>
            </div>
            <div onClick={sendRequestForData} className="flex flex-col items-center w-[170px] h-[170px] bg-[#141313] p-[15px] rounded-[10%] transform transition duration-200 hover:translate-y-[-25px]">
                <h2 className="text-[28px] text-[#555555]">View passwords</h2>
                <p><FileLock2 color="#555555" size={28}/></p>
            </div>
            <div className="flex flex-col items-center justify-center w-[170px] h-[170px] p-[15px] bg-[#141313] rounded-[10%] transform transition duration-200 hover:translate-y-[-25px]">
                <h2 className="text-[28px] text-[#555555]">Settings</h2>
                <p><Settings color="#555555" size={28}/></p>
            </div>
            <Modal isVisible={isAdding} setVisible={setAdding}>
                <ModalNewPassword sendPassword={sendPassword} setAdding={setAdding}/>
            </Modal>
            <Modal isVisible={isView} setVisible={setView}>
                <ModalViewPassword passwords={passwords}/>
            </Modal>
        </div>
    )
}