import { JSONFilePreset } from 'lowdb/node';


export default async function getData(defaultData) {
    const db = await JSONFilePreset('db.json', defaultData);
    await db.read();
    return db.data.passwords;
}