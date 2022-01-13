import fs from 'fs';

const fsPromises = fs.promises;

function readFile(filePath: string) {
    return fsPromises.readFile(filePath, 'utf8');
};

function writeFile(writefile: String, filePath: string) {
    return fsPromises.writeFile(filePath, writefile, "utf8");
};

export { readFile, writeFile }