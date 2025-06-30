import fsPromises from 'fs/promises';
import path from 'path';
import {app} from 'electron';
import CryptoJS from 'crypto-js';
import getData from './getData.js';

const dbPath = path.join(app.getPath('userData'), 'db.json');
export default async function writeData(password) {
    try {
        let passwords = await getData(true);
        const updatedPasswords = passwords.map(pw => {
            if (password.id === pw.id) {
                const encrypted = CryptoJS.AES.encrypt(password.password, "secret key").toString();
                password.password = encrypted;
                return password;
            }
            return pw;
        });
        await fsPromises.writeFile(dbPath, JSON.stringify({ passwords: updatedPasswords }));
        return true;
    } catch (error) {
        console.log(error.message);
        return false;
    }
}