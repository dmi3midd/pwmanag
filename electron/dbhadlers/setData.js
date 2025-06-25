import { JSONFilePreset } from 'lowdb/node';


export default async function writeData(defaultData, password) {
const db = await JSONFilePreset('db.json', defaultData);
    db.data.passwords.push(password);
    await db.write();
}
