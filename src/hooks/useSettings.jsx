import React, { useEffect, useState } from "react";

export default function useSettings() {
    const [isSettings, setIsSettings] = useState(false);
    const [settings, setSettings] = useState({});

    useEffect(() => {
        window.electronAPI.requestForConfig('request for config');
    }, []);

    useEffect(() => {
        window.electronAPI.onRequestForConfig((data) => {
            setSettings(data);
        });
    }, []);

    return {
        isSettings, setIsSettings,
        settings, setSettings,
    }
}