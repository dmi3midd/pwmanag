import { jest, describe, test, expect } from '@jest/globals';

jest.unstable_mockModule('electron', () => ({
  app: {
    getPath: jest.fn(() => '/mock/user/data/path'),
  },
}));
jest.unstable_mockModule('fs/promises', () => ({
  default: {
    writeFile: jest.fn(),
  },
}));


const { default: fsPromises } = await import('fs/promises');
const { default: fileCreate } = await import("../../../electron/utils/fileCreate.js");
describe('Files existence', () => {
    test('db.json existence', async () => {
        const isCreated = await fileCreate('db');
        expect(isCreated).toBe(true);
    });
    test('config.json existence', async () => {
        const isCreated = await fileCreate('config');
        expect(isCreated).toBe(true);
    });
    test('Other files existence', async () => {
        const isCreated = await fileCreate('file');
        expect(isCreated).toBe(false);
    });
});