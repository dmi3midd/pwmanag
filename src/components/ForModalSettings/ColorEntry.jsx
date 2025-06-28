import React from "react";
import { MuiColorInput } from 'mui-color-input'

export default function ColorEntry({name, color, setColor, setIsChanged, settings}) {
    return (
        <div className="flex justify-between items-center w-[400px] mb-[10px]">
            <p style={{ color: settings.modalSettings.text }}>{name}:</p>
            <MuiColorInput
                format="hex"
                value={color}
                onChange={(newColor) => {setColor(newColor); setIsChanged(true)}}
                sx={{
                    '& .MuiOutlinedInput-root': {
                        width: '130px',
                        borderRadius: '12px',
                        backgroundColor: `${settings.modalSettings.colorbg}`,
                    },
                    '& .MuiOutlinedInput-input': {
                        color: `${settings.modalSettings.colortext}`,
                    },
                }}
            />
        </div>
    )
}