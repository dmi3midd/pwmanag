import { jest, describe, test, expect } from '@jest/globals';

jest.unstable_mockModule('electron', () => ({
  app: {
    getPath: jest.fn(() => '/mock/user/data/path'),
  },
}));
jest.unstable_mockModule('fs/promises', () => ({
  default: {
    access: jest.fn(),
  },
}));


const { default: fsPromises } = await import('fs/promises');
const { default: fileExists } = await import("../../../electron/utils/fileExist.js");
describe('Files creation', () => {
    test('db.json creation', async () => {
        const isExist = await fileExists('db');
        expect(isExist).toBe(true);
    });
    test('config.json creation', async () => {
        const isExist = await fileExists('config');
        expect(isExist).toBe(true);
    });
    test('Other files creation', async () => {
        const isExist = await fileExists('file');
        expect(isExist).toBe(false);
    });
});