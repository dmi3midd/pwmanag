import React from "react";

export default function Modal({isVisible, setVisible, children}) {
    return (
        <>
            {isVisible && (
                <div onClick={() => setVisible(false)} className="flex justify-center items-center inset-0 fixed z-10 bg-[rgb(0,0,0,0.55)]">
                    <div onClick={(event) => event.stopPropagation()}>
                        {children}
                    </div>
                </div>
            )}
        </>
    )
}