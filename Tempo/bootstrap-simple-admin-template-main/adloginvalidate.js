const persons=[]

const submit=document.getElementById('submit')
submit.addEventListener("click",()=>{
    const mailId=document.getElementById("typeEmailX").value


const passwd=document.getElementById("typePasswordX").value
console.log(mailId)
console.log(passwd)
console.log("button clicked")

if("admin@gmail.com"===mailId){
    if("admin"===passwd){
         window.open("index.html")
        
        }
           
        }
    })
        
