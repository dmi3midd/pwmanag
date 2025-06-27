import fsPromises from 'fs/promises';
import path from 'path';
import {app} from 'electron';

const dbPath = path.join(app.getPath('userData'), 'db.json');
const configPath = path.join(app.getPath('userData'), 'config.json');
export default async function fileCreate(type) {
    try {
        if (type === 'db') {
            await fsPromises.writeFile(dbPath, JSON.stringify({ passwords: [] }));
            return true;
        }
        if (type === 'config') {
            await fsPromises.writeFile(configPath, JSON.stringify({
                configuration: {
                    general: {
                        mainbg: "#1c1d1f",
                        mainitembg: "#141313",
                        text: "#555555"
                    },
                    modalNewPassword: {
                        text: "#555555",
                        modalbg: "#0c0b0b", 
                        inputborder: "#555555",                     
                        btnbg: "#1c1d1f",
                        btntext: "#555555"
                    },
                    modalViewPassword: {
                        text: "#555555",
                        modalbg: "#0c0b0b",
                        entrybg: "#1c1d1f", 
                        inputborder: "#555555"
                    }
                }
            }));
            return true;
        }
    } catch (error) {
        return false;
    }
}