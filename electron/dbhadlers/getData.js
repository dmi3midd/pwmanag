// import { JSONFilePreset } from 'lowdb/node';
// export default async function getData(defaultData) {
//     const db = await JSONFilePreset('db.json', defaultData);
//     await db.read();
//     return db.data.passwords;
// }

import fsPromises from 'fs/promises';
import path from 'path';
import {app} from 'electron';
const dbPath = path.join(app.getPath('userData'), 'db.json');
export default async function getData(path) {
    try {
        const data = await fsPromises.readFile(dbPath, {encoding: 'utf-8'});
        const parsed = JSON.parse(data);
        if (!Array.isArray(parsed.passwords)) {
            throw new Error('"passwords" is not an array');
        }
        return parsed.passwords;
    } catch (error) {
        console.error('Помилка при читанні або парсингу JSON:', error.message);
        return [];
    }
}