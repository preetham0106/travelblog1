const users=JSON.parse(localStorage.getItem("users"))
console.log(users)
for (user of users)
{
    console.log(user)
    if(user.islogged){
        document.getElementById("name").value=user.name
        document.getElementById("username").value=user.username
        document.getElementById("address").value=user.address
        document.getElementById("mail").value=user.mail
        document.getElementById("heading").innerHTML=user.name
        const edit=document.getElementById("edit")
        edit.addEventListener("click",()=>{
            console.log("hi")
                user.name=document.getElementById("name").value
                user.username=document.getElementById("username").value
                user.address=document.getElementById("address").value
                user.mail=document.getElementById("mail").value

        localStorage.setItem("users",JSON.stringify(user))
                document.getElementById("name").value=user.name
                document.getElementById("username").value=user.username
                document.getElementById("address").value=user.address
                document.getElementById("mail").value=user.mail
                document.getElementById("heading").innerHTML=user.name
        })
            }
        }



// for( persons in localStorage){
//     const obj=JSON.parse(localStorage[persons])
//     if(obj.islogged){
//         document.getElementById("name").value=obj.name
//         document.getElementById("username").value=obj.username
//         document.getElementById("address").value=obj.address
//         document.getElementById("mail").value=obj.mail
//         document.getElementById("heading").innerHTML=obj.name
//         const edit=document.getElementById("edit")
// edit.addEventListener("click",()=>{
//     console.log("hi")
//         const email1=obj.mail
//         obj.name=document.getElementById("name").value
//         obj.username=document.getElementById("username").value
//         obj.address=document.getElementById("address").value
//         //obj.email=document.getElementById("mail").value
//         localStorage.removeItem(email1)
// localStorage.setItem(obj.email,JSON.stringify(obj))
//         document.getElementById("name").value=obj.name
//         document.getElementById("username").value=obj.username
//         document.getElementById("address").value=obj.address
//         document.getElementById("mail").value=obj.mail
//         document.getElementById("heading").innerHTML=obj.name
// })
//     }
// }
