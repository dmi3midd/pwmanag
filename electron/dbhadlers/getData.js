import fsPromises from 'fs/promises';
import path from 'path';
import {app} from 'electron';
import CryptoJS from 'crypto-js';

const dbPath = path.join(app.getPath('userData'), 'db.json');
export default async function getData(isForDbHandlers) {
    try {
        const data = await fsPromises.readFile(dbPath, { encoding: 'utf-8' });
        const parsed = JSON.parse(data);
        if (!Array.isArray(parsed.passwords)) {
            throw new Error('passwords" is not an array');
        }
        if (isForDbHandlers) {
            return parsed.passwords;
        }
        parsed.passwords.map((pw) => {
            let decrypted = CryptoJS.AES.decrypt(pw.password, "secret key").toString(CryptoJS.enc.Utf8);
            pw.password = decrypted;
            return pw;
        });
        return parsed.passwords;
    } catch (error) {
        console.log(error.message);
        return [];
    }
}