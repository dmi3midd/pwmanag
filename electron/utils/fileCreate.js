import fsPromises from 'fs/promises';
import path from 'path';
import {app} from 'electron';

const dbPath = path.join(app.getPath('userData'), 'db.json');
export default async function fileCreate() {
    try {
        await fsPromises.writeFile(dbPath, JSON.stringify({passwords: []}));
        return true;
    } catch (error) {
        return false;
    }
}