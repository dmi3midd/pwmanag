// import { JSONFilePreset } from 'lowdb/node';
// export default async function writeData(defaultData, password) {
// const db = await JSONFilePreset('db.json', defaultData);
//     db.data.passwords.push(password);
//     await db.write();
// }


import fsPromises from 'fs/promises';
import getData from './getData.js';
export default async function writeData(password) {
    let passwords = await getData();
    passwords.push(password);
    await fsPromises.writeFile('db.json', JSON.stringify({passwords}));
}

