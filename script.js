let btn = document.querySelector(".btn");
let email = document.querySelector(".email");
let msg = document.querySelector(".msg");
let login = document.querySelector(".login");
let meet = document.querySelector(".meet");

btn.addEventListener("click" , ()=>{
    setTimeout(() => {
        login.style.visibility = "visible" ;
    }, 1000);
})

btn.addEventListener("click" , ()=>{
    setTimeout(() => {
        email.style.visibility = "visible" ;
    }, 3000);
})

btn.addEventListener("click" , ()=>{
    setTimeout(() => {
        meet.style.visibility = "visible" ;
    }, 5000);
})

btn.addEventListener("click" , ()=>{
    setTimeout(() => {
        msg.style.visibility = "visible" ;
    }, 7000);
})

// function show() {
//     setTimeout(() => {
//         alert("Login");
//     }, 1000);

//     setTimeout(() => {
//         alert("New Email");
//     }, 3000);

//     setTimeout(() => {
//         alert("Meeting in 10 Minutes");
//     }, 5000);

//     setTimeout(() => {
//         alert("New Message");
//     }, 7000);

// }

// let arr = ["Login Successful" , "New Email" , "Meeting in 10 min" , "New Message"];
// btn.addEventListener("click",()=>{
//     for(let i = 0;i<4;i++){
//         setTimeout(() => {
//           alert(arr[i])
//           }, 2000 * i);
//     }
// })
