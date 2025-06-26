import fsPromises from 'fs/promises';

export default async function fileCreate() {
    await fsPromises.writeFile('db.json', JSON.stringify({passwords: []}));
}