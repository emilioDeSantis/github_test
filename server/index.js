//import js libraries
const express = require('express')
const body_parser = require('body-parser')
const path = require('path')
// const uuidv4 = require('uuid/v4')
// const AWS = require('aws-sdk')



// AWS.config.update.({region: "us-east-1"})
// const dynamodb = new AWS.DynamoDB.DocumentClient()

//create a chef
// var params = {
//   TableName : 'dynamo-test',
//   Item: {
//      HashKey: 'haskey',
//      NumAttribute: 1,
//      BoolAttribute: true,
//      ListAttribute: [1, 'two', false],
//      MapAttribute: { foo: 'bar'},
//      NullAttribute: null
//   }
// };

// var documentClient = new AWS.DynamoDB.DocumentClient();
//
// documentClient.put(params, function(err, data) {
//   if (err) console.log(err);
//   else console.log(data);
// });

//
















////////////////////////////////////////////


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

// import APIs
const account_api = require('./api/account')
app.use('/account',account_api)

module.exports = app
