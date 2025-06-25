import React from "react";
export default function ModalNewPassword() {

    return (
        <div className="flex flex-col w-[300px] h-[450px] p-[20px] rounded-[20px] bg-[#0c0b0b]">
            <h1 className="flex justify-center text-[25px] text-[#414141]">New password</h1>
            <form className="flex flex-col justify-evenly h-[100%]">
                <div>
                    <lable className="block text-[20px] text-[#414141]">Service</lable>
                    <input className="block w-[80%] h-[30px] p-[5px] rounded-[8px] border-2 border-[#414141] text-[#414141] text-[15px] duration-200 focus:scale-107" type="text" placeholder="service" required/>
                </div>
                <div>
                    <lable className="block text-[20px] text-[#414141]">Password</lable>
                    <input className="block w-[80%] h-[30px] p-[5px] rounded-[8px] border-2 border-[#414141] text-[#414141] text-[15px] duration-200 focus:scale-107" type="text" placeholder="password" required/>
                </div>
                <div>
                    <lable className="block text-[20px] text-[#414141]">Email/login</lable>
                    <input className="block w-[80%] h-[30px] p-[5px] rounded-[8px] border-2 border-[#414141] text-[#414141] text-[15px] duration-200 focus:scale-107" placeholder="email or login" required/>
                </div>
                <div>
                    <lable className="block text-[20px] text-[#414141]">Extra</lable>
                    <input className="block w-[80%] h-[30px] p-[5px] rounded-[8px] border-2 border-[#414141] text-[#414141] text-[15px] duration-200 focus:scale-107" type="text" placeholder="extra"/>
                </div>
                <div className="flex justify-center items-center w-[80px] h-[30px] rounded-[10px] bg-[#111010] duration-200 hover:rotate-15 hover:pl-[10px]">
                    <input className="text-[15px] text-[#414141]" type="submit" placeholder="Add"/>
                </div>
            </form>
        </div>
    )
}