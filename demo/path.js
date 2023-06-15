import path from 'path';//модуль с путями
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


console.log('название файла:', path.basename(__filename))
console.log('название директории:', path.basename(__dirname))
console.log('расширение файла:', path.extname(__filename))
console.log('Parse', path.parse(__filename).name)
console.log(path.join(__dirname, 'server', 'index.html'))
