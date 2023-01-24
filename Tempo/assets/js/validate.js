console.log("hi")
const obj=JSON.parse(localStorage.getItem("users"))
const submit=document.getElementById('submit')
submit.addEventListener("click",()=>{
    const mailId=document.getElementById("typeEmailX").value


const passwd=document.getElementById("typePasswordX").value
console.log("button clicked")
let obj=JSON.parse(localStorage.getItem("users"))
for(var i=0;i<obj.length;i++){
    obj=JSON.parse(localStorage.getItem("users"))
    if(obj[i].mail===mailId){
        console.log("hi")
        if(obj[i].password===passwd){
            const new_data={name:obj[i].name,password:obj[i].password,mail:obj[i].mail,username:obj[i].username,address:obj[i].address,islogged:"true"}
            const obj1=JSON.parse(localStorage.getItem("users"))
            const obj2=[]
            for(person of obj1)
            {
                if(new_data.mail==person.mail){
                    continue
                }
                else{
                    obj2.push(person)
                }
            }
            obj2.push(new_data)
            localStorage.setItem("users",JSON.stringify(obj2))
            console.log("hi")
            window.open("index.html")
    }
else{
    document.getElementById("typeEmailX").value=""
    document.getElementById("typeEmailX").placeholder="invalid"
    document.getElementById("typePasswordX").value=""
    document.getElementById("typePasswordX").placeholder="invalid"

    // document.getElementById("typeEmailX").place

}
    }
}

})