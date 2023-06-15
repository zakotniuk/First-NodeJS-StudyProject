import fs from 'fs';
import path from 'path';//модуль с путями
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


// //асинхронные методы не блокируют потоки, а он в nodejs один

// // создание дирректории (создает папку один раз)
// fs.mkdir(path.join(__dirname, 'test'), (error) =>{
//     if (error)
//         throw error

//     console.log('Dir created')
// })

// //создание файла (может перезаписывать файл)
 const filePath = path.join(__dirname, 'test', 'text.txt')
// fs.writeFile(filePath, 'hi!!!', error =>{
//     if (error)
//         throw error
//     console.log('file created');
// })
// //добавление текста в файл
// fs.appendFile(filePath, '\n goodbye!!!', error =>{
//     if (error)
//         throw error
//     console.log('file created');
// })

fs.readFile(filePath, 'utf-8', (err, content)=>{
    if(err)
        throw err
    
    // //без указания кодировки ^
    // console.log('Content: ', content)
    // //Content:  <Buffer 68 69 21 21 21 64 62 79 65 21 21 21>
    // const data = Buffer.from(content)
    // console.log('Content: ', data.toString())
    // //Content:  hi!!!dbye!!!

    // //c указанием кодировки:
    console.log(content)
    //hi!!!dbye!!!
    
})
