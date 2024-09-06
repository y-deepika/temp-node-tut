const http = require('http')

const server = http.createServer((req, res) => {
    

   if (req.url === '/') {
        res.end('home page')
    }
    if (req.url === '/above') {
      res.end('look above yarr')
    } 
    res.end(`<h1>oppss<h1>
    <p>go to home page<p>`)
})
server.listen(3000)