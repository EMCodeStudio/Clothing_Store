import server from "./app.js"

const port = process.env.PORT || 3000

server.listen(port, ()=>{
    console.log('listening on port: ', port)
})