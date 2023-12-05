
import express from 'express'
import path, { dirname } from 'path'
import serveStatic from 'serve-static'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const server = express()

server.use(serveStatic(path.join(__dirname, '../..', 'Client', 'dist')))
server.get('/client-api', (req, res) => {
    res.send('HELLO SERVER!')
})

server.use(express.json())
export default server