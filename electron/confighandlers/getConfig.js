import fsPromises from 'fs/promises';
import path from 'path';
import {app} from 'electron';

const configPath = path.join(app.getPath('userData'), 'config.json');
export default async function getConfig() {
    const config = await fsPromises.readFile(configPath, { encoding: 'utf-8' });
    const parsed = JSON.parse(config);
    return parsed.configuration;
}