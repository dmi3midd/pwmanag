import { jest, describe, test, expect } from '@jest/globals';

jest.unstable_mockModule('electron', () => ({
  app: {
    getPath: jest.fn(() => '/mock/user/data/path'),
  },
}));
jest.unstable_mockModule('fs/promises', () => ({
  default: {
    readFile: jest.fn(),
  },
}));


const mockedConfiguration = {
  general: {
    mainbg: "#1c1d1f",
    mainitembg: "#141313",
    text: "#555555"
  },
  modalNewPassword: {
    text: "#555555",
    modalbg: "#0c0b0b",
    inputborder: "#555555",
    btnbg: "#1c1d1f",
    btntext: "#555555"
  },
  modalViewPassword: {
    text: "#555555",
    modalbg: "#0c0b0b",
    entrybg: "#1c1d1f",
    inputborder: "#555555"
  },
  modalSettings: {
    text: "#555555",
    modalbg: "#0c0b0b",
    colortext: "#a7a9b4",
    colorbg: "#1e1e1e"
  }
};
const { default: fsPromises } = await import('fs/promises');
const { default: getConfig } = await import("../../../electron/confighandlers/getConfig.js");
describe('Getting of configuration', () => {
  test('Config accuracy', async () => {
    fsPromises.readFile.mockResolvedValue(JSON.stringify({configuration: mockedConfiguration}));
    const config = await getConfig();
    expect(config).toEqual(mockedConfiguration);
  });
});