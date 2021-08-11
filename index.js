let content = document.getElementById('content')
let btn = document.getElementById('btn')
let clr = document.getElementById('clr')
let loader = document.getElementById('loader')
let box = document.getElementById('box')
btn.addEventListener('click',fetchData)
clr.addEventListener('click',clearData)
let a = 0
content.innerHTML = ''
async function getdata(){
   
    url = 'https://api.github.com/users'
    if(a==30){
        box.style.display = 'block'
       }   
    loader.style.display = "block"
    clr.style.display = "none"
    btn.style.display = "none"
    const response = await fetch(url)
    const users = await response.json()
    btn.style.display = "block"
    loader.style.display = "none"
    while(a < 30){
    users.forEach((elem)=>{
        content.innerHTML += `<li>${elem.login}</li>`
        a ++
    })
    
    }
    
    clr.style.display = "block"
    return users
}

function fetchData(){
getdata()
}

function clearData(){
    content.innerHTML = ''
    clr.style.display = "none"
    box.style.display = 'none'
    a = 0
}



