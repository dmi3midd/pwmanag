import fsPromises from 'fs/promises';
import path from 'path';
import {app} from 'electron';

const dbPath = path.join(app.getPath('userData'), 'db.json');
export default async function getData() {
    try {
        const data = await fsPromises.readFile(dbPath, {encoding: 'utf-8'});
        const parsed = JSON.parse(data);
        if (!Array.isArray(parsed.passwords)) {
            throw new Error('"passwords" is not an array');
        }
        return parsed.passwords;
    } catch (error) {
        console.error(error.message);
        return [];
    }
}