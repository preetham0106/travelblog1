const persons=[]

const submit=document.getElementById('submit')
submit.addEventListener("click",()=>{
    const mailId=document.getElementById("typeEmailX").value


const passwd=document.getElementById("typePasswordX").value
console.log(mailId)
console.log(passwd)
console.log("button clicked")

 const obj=JSON.parse(localStorage.getItem(mailId))

if(obj.mail===mailId){
console.log(obj)

    if(obj.password===passwd){
        console.log("valid")
        obj.islogged=true;
        localStorage.setItem(mailId,JSON.stringify(obj))
        window.open("index.html")

    }
    else{
        document.getElementById("typeEmailX").value=""
        document.getElementById("typeEmailX").placeholder="invalid"
        document.getElementById("typePasswordX").value=""
        document.getElementById("typePasswordX").placeholder="invalid"


    }
}
else{
    document.getElementById("typeEmailX").value=""
    document.getElementById("typePasswordX").value=""
    document.getElementById("typeEmailX").placeholder="invalid"
    document.getElementById("typePasswordX").placeholder="invalid"


}
})
