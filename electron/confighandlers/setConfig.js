import fsPromises from 'fs/promises';
import path from 'path';
import {app} from 'electron';

const configPath = path.join(app.getPath('userData'), 'config.json');
export default async function  setConfig(newconfig) {
    try {
        //Додати перевірку на вся поля в newconfig
        await fsPromises.writeFile(configPath, JSON.stringify({ configuration: newconfig }));
        return true;
    } catch (error) {
        console.error(error.message);
        return false;
    }
}