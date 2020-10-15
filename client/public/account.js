// let logged_in = false
// let user_key = null
//
// //request functions
// const add_user = () => {
//   const username=document.getElementById("username").value
//   const password=document.getElementById("password").value
//   let user = {username, password}
//   const url='/account/add_user'
//   async function g() {
//     try{
//       const data = await global.send_url(url,user)
//
//       console.log(data);
//       log_in(data.key)
//     }
//     catch(error){
//       console.error(error)
//     }
//   }
//   g()
// }
//
// //local functions
// const log_in = (key) => {
//   logged_in = true
//   user_key = key
//   console.log('log in successfull. key='+key);
// }



/////////////////////////////////////////////////////////////////////


//send data and get response
const test = () => {
  const test_data = {data:document.getElementById('test').value}
  const url='/account/test'
  async function g() {
    try{
      const data = await send_url(url,test_data)
      console.log(data);
    }
    catch(error){
      console.error(error)
    }
  }
  g()
}
