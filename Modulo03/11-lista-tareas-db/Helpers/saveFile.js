import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';


const __filename = fileURLToPath(import.meta.url); // Get current script filepath
const __dirname = path.dirname(__filename); // Get current script dirname
const dbPath = path.join(__dirname, '../database/'); // set database path


// Save data in database file
const saveDB = async (data, fileName) => {

    const json = JSON.stringify(data, null, 4); // stringify with 4 spaces at each level
    const pathFile = path.join(dbPath, fileName);

    return new Promise((resolve, reject) =>
    {
        fs.writeFile(pathFile, json, (err) => {
            if (err) reject(err);
            resolve(json);
        });
    });
}

export { saveDB }

