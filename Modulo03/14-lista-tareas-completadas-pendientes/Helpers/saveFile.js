import { existsSync, open, close, readFile, writeFile, truncate } from 'fs';

// Check if db file exists in the current directory
const dbExists = async filePath => {
    return existsSync(filePath);
}

// Open db connection file
const openConnDB = async filePath => {
    return new Promise((resolve, reject) => {

        if (!dbExists(filePath)) reject(new Error('File not exists.'));
        open(filePath, 'r+', (err, f) => {
            if(err) reject(err);
            resolve(f);
          });
    });
}

// Close db connection file
const closeConnDB = async (fileDescriptor) => {
    return new Promise((resolve, reject) => {
        close(fileDescriptor, (err) => {
            if (err) reject (err);
            resolve();
          });
    });
}

// Save data in database file
const saveDB = async (data, filePath) => {
    const json = JSON.stringify(data, null, 4); // stringify with 4 spaces at each level

    return new Promise((resolve, reject) => {

        if (!dbExists(filePath)) reject(new Error('File not exists.'));
        writeFile(filePath, json, (err) => {
            if (err) reject(err);
            resolve(json);
        });
    });
}

// Read data in database file
const readDB = async filePath => {
    return new Promise((resolve, reject) => {

        if (!dbExists(filePath)) reject(new Error('File not exists.'));
        const emptyArr = '[]';
        readFile(filePath, 'utf8', (err, data) => {
            if(err) reject(err);
            else if(data === '') resolve([]);
            else resolve(JSON.parse(data));
        });
    });
}

// Delete content in database file
const truncateDB = async filePath => {
    return new Promise((resolve, reject) => {

        if (!dbExists(filePath)) reject(new Error('File not exists.'));
        truncate(filePath, 0, (err)=> {
            if(err) reject(err);
            resolve();
        });
    });
}


export { openConnDB, closeConnDB, saveDB, readDB, truncateDB }

