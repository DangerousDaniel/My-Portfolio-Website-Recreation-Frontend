import fsPromises from 'fs/promises';
import path from 'path'

export async function getLocalData(dataLocation) {
    const filePath = path.join(process.cwd(), dataLocation);
    const jsonData = await fsPromises.readFile(filePath);
    const objectData = JSON.parse(jsonData);
    return objectData
  }
  