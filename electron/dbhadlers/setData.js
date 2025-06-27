import fsPromises from 'fs/promises';
import path from 'path';
import {app} from 'electron';
import CryptoJS from 'crypto-js';
import getData from './getData.js';

const dbPath = path.join(app.getPath('userData'), 'db.json');
export default async function writeData(password) {
    try {
        let passwords = await getData(true);
        const encrypted = CryptoJS.AES.encrypt(password.password, "secret key").toString();
        password.password = encrypted;
        passwords.push(password);
        await fsPromises.writeFile(dbPath, JSON.stringify({ passwords }));
        return true;
    } catch (error) {
        console.error(error.message);
        return false;
    }
}

