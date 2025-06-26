// import { JSONFilePreset } from 'lowdb/node';
// export default async function writeData(defaultData, password) {
// const db = await JSONFilePreset('db.json', defaultData);
//     db.data.passwords.push(password);
//     await db.write();
// }


import fsPromises from 'fs/promises';
import path from 'path';
import {app} from 'electron';
const dbPath = path.join(app.getPath('userData'), 'db.json');
import getData from './getData.js';
export default async function writeData(path, password) {
    let passwords = await getData();
    passwords.push(password);
    await fsPromises.writeFile(dbPath, JSON.stringify({passwords}));
}

