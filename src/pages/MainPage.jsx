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
        <div className="flex justify-evenly items-center h-screen bg-[#111010]">
            <div onClick={sendPassword} className="flex flex-col items-center w-[170px] h-[170px] bg-[#0c0b0b] p-[15px] rounded-[10%] duration-200 hover:bg-[#161414]">
                <h2 className="text-[28px] text-[#414141] font-hubot">New password</h2>
                <p><BookPlus color="#414141" size={28}/></p>
            </div>
            <div onClick={sendRequestForData} className="flex flex-col items-center w-[170px] h-[170px] bg-[#0c0b0b] p-[15px] rounded-[10%] duration-200 hover:bg-[#161414]">
                <h2 className="text-[28px] text-[#414141]">View passwords</h2>
                <p><FileLock2 color="#414141" size={28}/></p>
            </div>
            <div className="flex flex-col items-center justify-center w-[170px] h-[170px] p-[15px] bg-[#0c0b0b] rounded-[10%] duration-200 hover:bg-[#161414]">
                <h2 className="text-[28px] text-[#414141]">Settings</h2>
                <p><Settings color="#414141" size={28}/></p>
            </div>
            <Modal isVisible={isAdding} setVisible={setAdding}>
                <ModalNewPassword />
            </Modal>
            <Modal isVisible={isView} setVisible={setView}>
                <ModalViewPassword />
            </Modal>
        </div>
    )
}