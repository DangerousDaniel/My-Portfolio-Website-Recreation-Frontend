/*
    Project Name: My Portfolio Website Recreation
    Authors: Daniel Cox
    Created Date: May 3, 2023
    Last Updated: May 27, 2023
    Description: This is the component for fetching local data from a json file. This is only use for next js pages.
    Notes:
    Resources: 
*/

import fsPromises from 'fs/promises';
import path from 'path'

export async function getLocalData(fileLocation) {
    const filePath = path.join(process.cwd(), `json/${fileLocation}`);
    const jsonData = await fsPromises.readFile(filePath);
    const objectData = JSON.parse(jsonData);
    return objectData
  }
  