var names=document.getElementById("name")
var mail=document.getElementById("mail")
var button= document.getElementById("submit")
var res=document.getElementById("result")
var clear=document.getElementById("del")

let collections=[]

window.onload=()=>{
    collections=json.parse(localStorage.setItem(collections))
    collections.forEach(n,m =>addContact(n,m)) 
    // collections.forEach(m =>addContact(n,m)) 
    
}

button.addEventListener("click",()=>{
    collections.push(names.value)
    collections.push(mail.value)
    addContact(names.value, mail.value)
    names.value=''
    mail.value=''
})

function addContact(n,m){
    let title= document.createElement("h4")
    title.innerText=n
    res.appendChild(title)
    
    let para=document.createElement("para")
    para.innerText=m
    res.appendChild(para)

    clear.style.display="block"
    res.style.border="1px solid black"
    res.style.borderRadius="10px"
    res.style.padding="10px"

    localStorage.setItem('collections', JSON.stringify(collections))

    clear.addEventListener("click", ()=>{
        res.removeChild(para)
        res.removeChild(title)
        // res.style.display="none"
        res.style.border="none"
        clear.style.display="none"
        
    })


}
