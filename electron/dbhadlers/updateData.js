import fsPromises from 'fs/promises';
import path from 'path';
import {app} from 'electron';
import getData from './getData.js';

const dbPath = path.join(app.getPath('userData'), 'db.json');
export default async function writeData(password) {
    try {
        const passwords = await getData();
        const updatedPasswords = passwords.map(pw =>
            password.id == pw.id ? password : pw
        );
        console.log(updatedPasswords);
        await fsPromises.writeFile(dbPath, JSON.stringify({ passwords: updatedPasswords }));
        return true;
    } catch (error) {
        console.error(error.message);
        return false;
    }
}