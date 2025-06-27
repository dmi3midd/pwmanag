import fsPromises from 'fs/promises';
import path from 'path';
import {app} from 'electron';

const dbPath = path.join(app.getPath('userData'), 'db.json');
const configPath = path.join(app.getPath('userData'), 'config.json');
export default async function fileExists(type) {
  try {
    if (type === 'db') {
      await fsPromises.access(dbPath);
      return true;
    }
    if (type === 'config') {
      await fsPromises.access(configPath);
      return true;
    }
  } catch {
    return false;
  }
}