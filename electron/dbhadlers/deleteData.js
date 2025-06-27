import fsPromises from 'fs/promises';
import path from 'path';
import {app} from 'electron';
import getData from './getData.js';

const dbPath = path.join(app.getPath('userData'), 'db.json');
export default async function deleteData(password) {
    try {
        let passwords = await getData(true);
        for (let i = 0; i < passwords.length; i++) {
            if (passwords[i].id == password.id) {
                passwords.splice(i, 1);
                await fsPromises.writeFile(dbPath, JSON.stringify({passwords}));
                return true;
            }
        }
        return false;
    } catch (error) {
        console.error(error.message);
        return false;
    }
}