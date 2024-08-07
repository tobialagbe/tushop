import * as fs from 'fs';
import * as path from 'path';

export const readFile = (filePath: string): string => {
    return fs.readFileSync(path.resolve(filePath), 'utf8');
};

export const writeFile = (filePath: string, data: string): void => {
    fs.writeFileSync(path.resolve(filePath), data, 'utf8');
};