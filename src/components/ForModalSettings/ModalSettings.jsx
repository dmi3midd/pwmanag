import React, { useState } from "react";
import { House, BookPlus, FileLock2, Settings, Check } from 'lucide-react';
import ColorEntry from "./ColorEntry";

export default function ModalSettings({settings, updateConfig}) {
    const [isChanged, setIsChanged] = useState(false);
    //General
    const [gText, setGText] = useState(settings.general.text);
    const [gMainbg, setGMainbg] = useState(settings.general.mainbg);
    const [gMainItembg, setGMainItembg] = useState(settings.general.mainitembg);
    //Modal to add password
    const [nText, setNText] = useState(settings.modalNewPassword.text);
    const [nModalbg, setNModalbg] = useState(settings.modalNewPassword.modalbg);
    const [nInputBorder, setNInputBorder] = useState(settings.modalNewPassword.inputborder);
    const [nBtnbg, setNBtnbg] = useState(settings.modalNewPassword.btnbg);
    const [nBtntext, setNBtntext] = useState(settings.modalNewPassword.btntext);
    //Modal to view passwords
    const [vText, setVText] = useState(settings.modalViewPassword.text);
    const [vModalbg, setVModalbg] = useState(settings.modalViewPassword.modalbg);
    const [vEntrybg, setVEntrybg] = useState(settings.modalViewPassword.entrybg);
    const [vInputBorder, setVInputBorder] = useState(settings.modalViewPassword.inputborder);
    //Settings
    const [sText, setSText] = useState(settings.modalSettings.text);
    const [sModalbg, setSModalbg] = useState(settings.modalSettings.modalbg);
    const [sColortext, setSColortext] = useState(settings.modalSettings.colortext);
    const [sColorbg, setSColorbg] = useState(settings.modalSettings.colorbg);
    
    const newconfig = {
        general: {
            text: gText,
            mainbg: gMainbg,
            mainitembg: gMainItembg,
        },
        modalNewPassword: {
            text: nText,
            modalbg: nModalbg,
            inputborder: nInputBorder,
            btnbg: nBtnbg,
            btntext: nBtntext
        },
        modalViewPassword: {
            text: vText,
            modalbg: vModalbg,
            entrybg: vEntrybg,
            inputborder: vInputBorder
        },
        modalSettings: {
            text: sText,
            modalbg: sModalbg,
            colortext: sColortext,
            colorbg: sColorbg,
        }
    }

    return (
        <div style={{ background: settings.modalSettings.modalbg }} className="flex flex-col w-[440px] h-[450px] p-[20px] rounded-[20px] overflow-x-hidden overflow-y-auto gap-2">
            <h1 style={{ color: settings.modalSettings.text }} className="flex justify-center text-[25px]">Settings</h1>
            <form onSubmit={() => updateConfig(newconfig)}>
                <div>
                    <h2 
                        style={{ color: settings.modalSettings.text }} 
                        className="flex items-center justify-between w-[100px] text-[20px]">
                        <House color="#555555" size={20} />
                        General
                    </h2>
                    <ColorEntry name="Text" color={gText} setColor={setGText} setIsChanged={setIsChanged} settings={settings}/>
                    <ColorEntry name="Main bg" color={gMainbg} setColor={setGMainbg} setIsChanged={setIsChanged} settings={settings}/>
                    <ColorEntry name="Item bg" color={gMainItembg} setColor={setGMainItembg} setIsChanged={setIsChanged} settings={settings}/>
                </div>
                <div>
                    <h2
                        style={{ color: settings.modalSettings.text }} 
                        className="flex items-center justify-between w-[240px] text-[20px]">
                        <BookPlus color="#555555" size={20} />
                        Modal to add password
                    </h2>
                    <ColorEntry name="Text" color={nText} setColor={setNText} setIsChanged={setIsChanged} settings={settings}/>
                    <ColorEntry name="Modal bg" color={nModalbg} setColor={setNModalbg} setIsChanged={setIsChanged} settings={settings}/>
                    <ColorEntry name="Input border" color={nInputBorder} setColor={setNInputBorder} setIsChanged={setIsChanged} settings={settings}/>
                    <ColorEntry name="Button bg" color={nBtnbg} setColor={setNBtnbg} setIsChanged={setIsChanged} settings={settings}/>
                    <ColorEntry name="Button text" color={nBtntext} setColor={setNBtntext} setIsChanged={setIsChanged} settings={settings}/>
                </div>
                <div>
                    <h2 
                        style={{ color: settings.modalSettings.text }} 
                        className="flex items-center justify-between w-[258px] text-[20px]">
                        <FileLock2 color="#555555" size={20} />
                        Modal to view passwords
                    </h2>
                    <ColorEntry name="Text" color={vText} setColor={setVText} setIsChanged={setIsChanged} settings={settings}/>
                    <ColorEntry name="Modal bg" color={vModalbg} setColor={setVModalbg} setIsChanged={setIsChanged} settings={settings}/>
                    <ColorEntry name="Entry bg" color={vEntrybg} setColor={setVEntrybg} setIsChanged={setIsChanged} settings={settings}/>
                    <ColorEntry name="Input border" color={vInputBorder} setColor={setVInputBorder} setIsChanged={setIsChanged} settings={settings}/>
                </div>
                <div>
                    <h2 
                        style={{ color: settings.modalSettings.text }} 
                        className="flex items-center justify-between w-[105px] text-[20px]">
                        <Settings color="#555555" size={20} />
                        Settings
                    </h2>
                    <ColorEntry name="Text" color={sText} setColor={setSText} setIsChanged={setIsChanged} settings={settings}/>
                    <ColorEntry name="Modal bg" color={sModalbg} setColor={setSModalbg} setIsChanged={setIsChanged} settings={settings}/>
                    <ColorEntry name="Color-picker text" color={sColortext} setColor={setSColortext} setIsChanged={setIsChanged} settings={settings}/>
                    <ColorEntry name="Color-picker bg" color={sColorbg} setColor={setSColorbg} setIsChanged={setIsChanged} settings={settings}/>
                </div>
                {isChanged && (
                    <button
                        style={{ color: settings.modalSettings.text }} 
                        className="flex justify-evenly items-center w-[80px] h-[30px] rounded-[10px] text-[15px] duration-200 hover:pl-[15px]"
                        type="submit"
                    >
                        <Check color="#555555" size={25} />
                        Save
                    </button>
                )}
            </form>
        </div>
    )
}