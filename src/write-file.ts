import { writeFileSync } from 'fs';
import { join } from 'path';

function syncWriteFile(filename: string, data: any) {
  writeFileSync(join(__dirname, filename), data, {
    flag: 'a',
  });
}

export default syncWriteFile;