import React from "react";

export default function Modal({isVisible, setVisible, children}) {
    return (
        <>
            {isVisible && (
                <div onClick={() => setVisible(false)} className="flex justify-center items-center inset-0 fixed z-10 bg-[rgb(12,11,11,0.6)]">
                    <div onClick={(event) => event.stopPropagation()}>
                        {children}
                    </div>
                </div>
            )}
        </>
    )
}