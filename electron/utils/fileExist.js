import fsPromises from 'fs/promises';

export default async function fileExists(path) {
  try {
    await fsPromises.access(path);
    return true;
  } catch {
    return false;
  }
}