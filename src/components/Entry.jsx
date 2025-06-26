import React from "react";

export default function Entry({entry}) {
    console.log("entry");
    console.log(entry.service);
    return (
        // <table className="w-[350px] table-auto border-separate border-spacing-y-1 bg-[] text-[#414141]">
        //     <tr>
        //         <td className="font-semibold">Service:</td>
        //         <td className="text-end">{entry.service}</td>
        //     </tr>
        //     <tr>
        //         <td className="font-semibold">Password:</td>
        //         <td className="text-end">{entry.password}</td>
        //     </tr>
        //     <tr>
        //         <td className="font-semibold">Email:</td>
        //         <td className="text-end">{entry.email}</td>
        //     </tr>
        //     {entry.extra !== "" && (
        //         <tr>
        //             <td className="font-semibold">Extra:</td>
        //             <td className="text-end">{entry.extra}</td>
        //         </tr>
        //     )}
        // </table>
        <div className="flex flex-col w-[380px] mb-[25px] p-[10px] rounded-[10px] bg-[#111010] transform transition duration-200 hover:translate-x-[-10px]">
            <div className="flex justify-between items-center w-[350px]">
                <p className="text-[#414141]">Service:</p>
                <p className="text-end w-[220px] break-words whitespace-normal text-[#414141]">{entry.service}</p>
            </div>
            <div className="flex justify-between items-center w-[350px]">
                <p className="text-[#414141]">Password:</p>
                <p className="text-end w-[220px] break-words whitespace-normal text-[#414141]">{entry.password}</p>
            </div>
            <div className="flex justify-between items-center w-[350px]">
                <p className="text-[#414141]">Email:</p>
                <p className="text-end w-[220px] break-words whitespace-normal text-[#414141]">{entry.email}</p>
            </div>
            {(entry.extra != "") && 
                <div className="flex justify-between items-center w-[350px]">
                    <p className="text-[#414141]">Extra:</p>
                    <p className="text-end w-[220px] break-words whitespace-normal text-[#414141]">{entry.extra}</p>
                </div>
            }
        </div>
    )
}