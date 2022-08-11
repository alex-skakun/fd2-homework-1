const { readFile } = require('node:fs').promises;
const { cwd } = require('node:process');
const { resolve } = require('node:path');


describe('homework-1', () => {
  let runner;

  beforeAll(async () => {
    const fileContent = await readFile(resolve(cwd(), './src/index.js'), { encoding: 'utf-8' });

    runner = new Function('', fileContent);
  });


  it('should return full name', () => {
    const alertSpy = jest.spyOn(globalThis, 'alert').mockImplementation(() => {});
    const data = ['Doe', 'Jon'];

    jest.spyOn(globalThis, 'prompt').mockImplementation(() => {
      return data.pop();
    });

    runner();

    expect(alertSpy).toHaveBeenCalledWith('Jon Doe');
  });

});
