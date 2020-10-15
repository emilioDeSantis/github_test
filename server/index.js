//import js libraries
const express = require('express')




//set up port and node environment
const ENV = process.env.NODE_ENV
const PORT = process.env.PORT || 3000

//initialize express
const app = express()
//allow node to serve static files from public folder
app.use(express.static('client/public',{maxAge:1000}))
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(body_parser.json())
// app.use(body_parser.urlencoded({limit:'10mb',extended:false}))
// app.get('/',(req, res) => {
//   res.sendFile('./ui.html;',{root: __dirname})
// })

//listen on port
app.listen(PORT,()=>{
  console.log(`Server running at: localhost:${PORT}`);
})


module.exports = app
