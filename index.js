//npm i chalk
//npm i nodemon
// можно удалить папку node_modules при передачи проекта
//а при загрузке проекта достаточно ввести "npm i" и модули 
//загрузятся сами, благодаря файлу package.json

// import chalk from 'chalk'; //абсолютный путь
// import text from './data.js';//относительный путь
import path from 'path';//модуль с путями
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


// console.log(chalk.blue(text));
// console.log(__filename);// текущий файл
// console.log(__dirname);//текущая директорияы

import http from 'http'
import fs from 'fs'


const server = http.createServer((req, res)=>{
    
    // if(req.url === '/'){
    //     fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, data)=>{
    //         if(err){
    //             throw err
    //         }
    //         res.writeHead(200, {//200-status
    //             'Content-Type': 'text/html'// html
    //             //'Content-Type': 'text/plain' <- просто текст     
    //         })

    //         res.end(data) 
    //     })
    // }else if(req.url === '/contact'){
    //     fs.readFile(path.join(__dirname, 'public', 'contact.html'), (err, data)=>{
    //         if(err){
    //             throw err
    //         }
    //         res.writeHead(200, {//200-status
    //             'Content-Type': 'text/html'// html
    //             //'Content-Type': 'text/plain' <- просто текст     
    //         })

    //         res.end(data) 
    //     })
    // }

    //создаем универсальный путь
    let filePath = path.join(__dirname, 'public', req.url==='/'?'index.html':req.url)
    const ext = path.extname(filePath)
    let contentTipe = 'text/html'

    switch(ext) {
        case '.css':
            contentTipe =  'text/css'
            break
        case '.js':
            contentTipe =  'text/javascript'
            break
        default: 
            contentTipe =  'text/html'
            
    }
    
    if(!ext){
        filePath +='.html'
    }

    console.log(filePath)

    fs.readFile(filePath, (err, content)=>{
        if(err){
            //ошибка с путем
            fs.readFile(path.join(__dirname, 'public', 'error.html'), (error, data)=>{
                if(error) {
                    //серверная ошибка
                    res.writeHead(500)
                    res.end('error')
                }else{
                    res.writeHead(200, {
                        'Content-Type': contentTipe
                    })
                    res.end(data)
                }
            })
        }else{
            res.writeHead(200, {
                'Content-Type': contentTipe
            })
            res.end(content)
        }
    })

})

const PORT = process.env.PORT || 3002

server.listen(PORT, ()=>{
    console.log(`server has been started on PORT:${PORT}...`)
})