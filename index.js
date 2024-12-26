// // // //  async function myfun()
// // // // {
// // // //     // console.log("hello");
// // // //     // setTimeout(()=>{
// // // //     //     console.log("hello");
// // // //     // },2000);
// // // //     let x=new Promise(resolve)
// // // // }
// // // // console.log("1");
// // // // myfun();
// // // // console.log("2");
// fetch('https://quote-garden.onrender.com/api/v3/quotes').then(response=>response.json()).then((json)=>{
//     console.log(json);});
//   json.forEach(obj=>{const{facts,success}=obj;
//  const temp='<div class="post"><h1>'+facts+'</h1><h2>'+success+'</h2></div>';
// document.body.insertAdjacentHTML('beforeend',temp);});}).catch((err)=>console.log(err));
// //fetch('https://programming-quotesapi.vercel.app/api/random')
// //     .then(response => response.json())
// //     .then(quote => console.log(quote))
// // fetch("https://programming-quotesapi.vercel.app/api/available?author=Linus Torvalds")
// //           .then((response) => response.json())
// //           .then((quote) => console.log(quote));
// fetch('https://hindi-quotes.vercel.app/random')
//           .then((response) => response.json())
//           .then((quote) => console.log(quote));
fetch('https://jsonplaceholder.typicode.com/posts').then(response=>response.json()).then((json)=>{
    // console.log(json)
    json.forEach(obj=>{const{userId,title,body}=obj;
const temp='<div class="post"><h1>'+userId+'</h1><h2>'+title+'</h2><h3>'+body+'</h3></div>';
document.body.insertAdjacentHTML('beforeend',temp);});}).catch((err)=>console.log(err));