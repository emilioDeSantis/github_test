//import js libraries
const express=require('express')
const app = express()
const router=express.Router()
const path=require('path')
const fs=require('fs')


//import functions

// const upload_path=path.join('public',Recipe.image_base_path)
// const image_mime_types=['image/jpeg','image/png']
// const upload=multer({
//   dest:upload_path,
//   fileFilter:(req,file,callback)=>{
//     callback(null,image_mime_types.includes(file.mimetype))
//   }
// })

// //////////////////////////////////////////////////
//
// let active_users = {}
//
// /////////////////////// requests ////////////////////////
//
// app.post('/add_user', (req, res) => {
//   const user = req.body
//   console.log(user);
//   const f = async () => {
//     try{
//       const success = await sign_up(user)
//       const key = Math.floor(Math.random()*1000000)
//       log_in(user.username,key)
//       res.send({key})
//     }
//     catch(error){
//       console.error(error)
//     }
//   }
//   f()
// })
//
//
// ////////////////// functions ///////////////////
//
// function sign_up(user) {
//   return true
// }
//
// function log_in(username,key) {
//   active_users[username] = key
//   console.log(active_users);
// }
//
// function log_out(username) {
//   delete active_users[username]
// }



//////////////////////////////////////////////////////

//deal with post request at url: /account/test
app.post('/test', (req, res) => {
  const data = req.body
  console.log(data);
  res.send({res:'success'})
})




//export api
module.exports = app
