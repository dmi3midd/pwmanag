import React from "react";
import { BookPlus, FileLock2, Settings } from 'lucide-react';

import useNewPassword from "../hooks/useNewPassword";
import useViewPasswords from "../hooks/useViewPassword";
import useSettings from "../hooks/useSettings";

import Modal from "../components/Modal";
import ModalNewPassword from "../components/ForModalNewPw/ModalNewPassword";
import ModalViewPassword from "../components/ForModalViewPw/ModalViewPasswords";
import ModalSettings from "../components/ForModalSettings/ModalSettings";

export default function MainPage() {
    const {
        isAdding, setAdding,
        sendPassword,
    } = useNewPassword();
    const {
        passwords, setPasswords,
        isView, setView,
        edidtedPw, setEditedPw,
        sendRequestForData,
        sendEditedPassword,
        deletePassword,
    } = useViewPasswords();
    const {
        isSettings, setIsSettings,
        settings, setSettings,
        updateConfig,
    } = useSettings();

    if (!settings.general) {
        return (
            <div>
                <h2 className="text-[40px] text-[#555555] ">Loading...</h2>
            </div>
        )
    }

    return (
        <div style={{ background: settings.general.mainbg }} className={`flex justify-evenly items-center h-screen`}>
            <div
                onClick={() => setAdding(true)}
                style={{ background: settings.general.mainitembg }}
                className="flex flex-col items-center w-[170px] h-[170px] p-[15px] rounded-[10%] transform transition duration-200 hover:translate-y-[-25px]"
            >
                <h2 style={{ color: settings.general.text }} className="text-[28px] text-[#555555] font-hubot">New password</h2>
                <p><BookPlus color={`${settings.general.text}`} size={28} /></p>
            </div>

            <div
                onClick={() => setView(true)}
                style={{ background: settings.general.mainitembg }}
                className="flex flex-col items-center w-[170px] h-[170px] p-[15px] rounded-[10%] transform transition duration-200 hover:translate-y-[-25px]"
            >
                <h2 style={{ color: settings.general.text }} className="text-[28px] text-[#555555] font-hubot">View passwords</h2>
                <p><FileLock2 color={`${settings.general.text}`} size={28} /></p>
            </div>

            <div
                onClick={() => setIsSettings(true)}
                style={{ background: settings.general.mainitembg }}
                className="flex flex-col items-center w-[170px] h-[170px] p-[15px] rounded-[10%] transform transition duration-200 hover:translate-y-[-25px]"
            >
                <h2 style={{ color: settings.general.text }} className="text-[28px] text-[#555555] font-hubot">Settings</h2>
                <p><Settings color={`${settings.general.text}`} size={28} /></p>
            </div>

            <Modal isVisible={isAdding} setVisible={setAdding}>
                <ModalNewPassword 
                    sendPassword={sendPassword} 
                    setAdding={setAdding}
                    settings={settings}
                />
            </Modal>
            <Modal isVisible={isView} setVisible={setView}>
                <ModalViewPassword 
                    passwords={passwords} 
                    edidtedPw={edidtedPw} 
                    setEditedPw={setEditedPw} 
                    sendEditedPassword={sendEditedPassword}
                    deletePassword={deletePassword}
                    settings={settings}
                />
            </Modal>
            <Modal isVisible={isSettings} setVisible={setIsSettings}>
                <ModalSettings settings={settings} updateConfig={updateConfig}/>
            </Modal>
        </div>
    )
}