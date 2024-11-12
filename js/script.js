
// const wrapper=document.querySelector(`.wrapper`)
// function createCard(value) {
//     return`
//     <div class="card">
//         <h3 id="name">${value.name}</h3>
//         <h3 id="emile">${value.email}</h3>
//         <h3 id="id">${value.id}</h3>
//         <p id="body">${value.body}</p>
//       </div>
    
//     `
// }

// document.addEventListener(`DOMContentLoaded`,function () {
//     fetch("https://jsonplaceholder.typicode.com/comments",{
//          method:"GET"
//     })
   

// .then(response =>{
//     if (response.status == 200) {
//         return response.json();
//     }

// })
// .then(data=>{
//     wrapper.innerHTML=``;
//  data.forEach(element => {
//     let card=createCard(element);
//     wrapper.innerHTML+=card;
//  });
    
// })
// .catch(eror=>{
//     console.log(eror);
    
// })

// })


// const wrapper=document.querySelector(`.wrapper`)
// function createCard(value) {
//     return`
//     <div class="card">
//         <h3 id="name">${value.userId}</h3>
//         <h3 id="emile">${value.id}</h3>
//         <h3 id="id">${value.title}</h3>
//         <p id="body">${value.body}</p>
//       </div>
    
//     `
// }

// document.addEventListener(`DOMContentLoaded`,function () {
//     fetch("https://jsonplaceholder.typicode.com/posts",{
//          method:"GET"
//     })
   

// .then(response =>{
//     if (response.status == 200) {
//         return response.json();
//     }

// })
// .then(data=>{
//     wrapper.innerHTML=``;
//  data.forEach(element => {
//     let card=createCard(element);
//     wrapper.innerHTML+=card;
//  });
    
// })
// .catch(eror=>{
//     console.log(eror);
    
// })

// })




// const wrapper=document.querySelector(`.wrapper`)
// function createCard(value) {
//     return`
//     <div class="card">
//         <h3 id="name">${value.userId}</h3>
//         <h3 id="emile">${value.id}</h3>
//         <h3 id="id">${value.title}</h3>
//       </div>
    
//     `
// }

// document.addEventListener(`DOMContentLoaded`,function () {
//     fetch("https://jsonplaceholder.typicode.com/albums",{
//          method:"GET"
//     })
   

// .then(response =>{
//     if (response.status == 200) {
//         return response.json();
//     }

// })
// .then(data=>{
//     wrapper.innerHTML=``;
//  data.forEach(element => {
//     let card=createCard(element);
//     wrapper.innerHTML+=card;
//  });
    
// })
// .catch(eror=>{
//     console.log(eror);
    
// })

// })




// const wrapper=document.querySelector(`.wrapper`)
// function createCard(value) {
//     return`
//     <div class="card">
//         <h3 id="name">${value.userId}</h3>
//         <h3 id="emile">${value.id}</h3>
//         <h3 id="id">${value.title}</h3>
//         <h3 id="id">${value.completed}</h3>

        
//       </div>
    
//     `
// }

// document.addEventListener(`DOMContentLoaded`,function () {
//     fetch("https://jsonplaceholder.typicode.com/albums",{
//          method:"GET"
//     })
   

// .then(response =>{
//     if (response.status == 200) {
//         return response.json();
//     }

// })
// .then(data=>{
//     wrapper.innerHTML=``;
//  data.forEach(element => {
//     let card=createCard(element);
//     wrapper.innerHTML+=card;
//  });
    
// })
// .catch(eror=>{
//     console.log(eror);
    
// })

// })



const wrapper=document.querySelector(`.wrapper`)
function createCard(value) {
    return`
    <div class="card">
        <h3 id="name">${value.username}</h3>
        <h3 id="emile">${value.id}</h3>
        <h3 id="id">${value.email}</h3>
        <h3 id="id">${value.address}</h3>

        
      </div>
    
    `
}

document.addEventListener(`DOMContentLoaded`,function () {
    fetch("https://jsonplaceholder.typicode.com/users",{
         method:"GET"
    })
   

.then(response =>{
    if (response.status == 200) {
        return response.json();
    }

})
.then(data=>{
    wrapper.innerHTML=``;
 data.forEach(element => {
    let card=createCard(element);
    wrapper.innerHTML+=card;
 });
    
})
.catch(eror=>{
    console.log(eror);
    
})

})
