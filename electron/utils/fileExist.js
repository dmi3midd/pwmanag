import fsPromises from 'fs/promises';
import path from 'path';
import {app} from 'electron';
const dbPath = path.join(app.getPath('userData'), 'db.json');

export default async function fileExists(path) {
  try {
    await fsPromises.access(dbPath);
    return true;
  } catch {
    return false;
  }
}