import React, {useState} from "react";
export default function ModalNewPassword({sendPassword, setAdding}) {
    const [service, setService] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [extra, setExtra] = useState("");

    const addPassword = () => {
        sendPassword({service: service, password: password, email: email, extra: extra});
        setAdding(false);
    }
    return (
        <div className="flex flex-col w-[300px] h-[450px] p-[20px] rounded-[20px] bg-[#0c0b0b]">
            <h1 className="flex justify-center text-[25px] text-[#555555]">New password</h1>
            <form onSubmit={addPassword} className="flex flex-col justify-evenly h-[100%]">
                <div>
                    <lable className="block text-[20px] text-[#555555]">Service</lable>
                    <input className="block w-[80%] h-[30px] p-[5px] rounded-[8px] border-2 border-[#555555] text-[#555555] text-[15px] duration-200 focus:scale-107"
                        type="text" 
                        placeholder="service" 
                        required
                        value={service}
                        onChange={ev => setService(ev.target.value)}
                    />
                </div>
                <div>
                    <lable className="block text-[20px] text-[#555555]">Password</lable>
                    <input
                        className="block w-[80%] h-[30px] p-[5px] rounded-[8px] border-2 border-[#555555] text-[#555555] text-[15px] duration-200 focus:scale-107" 
                        type="text" 
                        placeholder="password" 
                        required
                        value={password}
                        onChange={ev => setPassword(ev.target.value)}
                    />
                </div>
                <div>
                    <lable className="block text-[20px] text-[#555555]">Email/login</lable>
                    <input 
                        className="block w-[80%] h-[30px] p-[5px] rounded-[8px] border-2 border-[#555555] text-[#555555] text-[15px] duration-200 focus:scale-107" 
                        placeholder="email or login" 
                        required
                        value={email}
                        onChange={ev => setEmail(ev.target.value)}
                    />
                </div>
                <div>
                    <lable className="block text-[20px] text-[#555555]">Extra</lable>
                    <input 
                        className="block w-[80%] h-[30px] p-[5px] rounded-[8px] border-2 border-[#555555] text-[#555555] text-[15px] duration-200 focus:scale-107" 
                        type="text" 
                        placeholder="extra"
                        value={extra}
                        onChange={ev => setExtra(ev.target.value)}
                    />
                </div>
                <div className="flex justify-center items-center w-[80px] h-[30px] rounded-[10px] bg-[#1c1d1f] duration-200 hover:rotate-15 hover:pl-[10px]">
                    <input className="text-[15px] text-[#555555]" type="submit" placeholder="Add"/>
                </div>
            </form>
        </div>
    )
}