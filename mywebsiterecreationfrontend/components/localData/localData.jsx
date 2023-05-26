import fsPromises from 'fs/promises';
import path from 'path'

export async function getLocalData(fileLocation) {
    const filePath = path.join(process.cwd(), `json/${fileLocation}`);
    const jsonData = await fsPromises.readFile(filePath);
    const objectData = JSON.parse(jsonData);
    return objectData
  }
  