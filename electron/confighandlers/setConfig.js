import fsPromises from 'fs/promises';
import path from 'path';
import {app} from 'electron';

const configPath = path.join(app.getPath('userData'), 'config.json');
export default async function  setConfig(newconfig) {
    try {
        await fsPromises.writeFile(configPath, JSON.stringify({ configuration: newconfig }));
        return true;
    } catch (error) {
        console.log(error.message);
        return false;
    }
}