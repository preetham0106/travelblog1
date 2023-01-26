console.log("hi")


    const signup=document.getElementById("submit")
    // signup.addEventListener("click", ()=>{
    //     document.getElementsByClassName('signupFrm')[0].style.display=''
       // const signup=document.getElementById('signup')
       console.log(signup)
        signup.addEventListener("click",()=>{
            console.log("buttonclicked")
            const name=document.getElementById("name").value
        console.log(name)
        const email=document.getElementById("email").value
        console.log(email)
        const subject=document.getElementById("subject").value
        console.log(subject)
        const message=document.getElementById("message").value
        console.log(message)

        data={
          name:name,
          email:email,
          subject:subject,
          message:message,
      
      }
      obj1=JSON.stringify(data)
      var xhttp=new XMLHttpRequest()
      xhttp.open("POST","http://localhost:3000/queries",true)
      xhttp.setRequestHeader("content-type","application/json")
      xhttp.onreadystatechange=function(){
  
          if(this.readyState==4)
          {
              var response=this.responseText
              console.log(response)
          }
      }
      xhttp.send(obj1)
      
    
        //  console.log("enter into else loop")
        //  const queries=JSON.parse(localStorage.getItem("queries"))
         
        //  const new_data={name:name,email:email,subject:subject,message:message}
        //  queries.push(new_data)
        //   localStorage.setItem("queries",JSON.stringify(queries))
        //   console.log(queries)
        //   //console.log(persons)
        })
    
          ///document.getElementsByClassName('signupFrm')[0].style.display='none'
    
        
    
    
          // const submit=document.getElementById("submit")
          // submit.addEventListener("click",()=>{
          
          //     const first_name=document.getElementById("firstname").value
          // console.log(first_name)
          // const last_name=document.getElementById("last_name").value
          // const email=document.getElementById("email").value
          //     data={
          //         first_name:first_name,
          //         last_name:last_name,
          //         email:email,
              
          //     }
          //     obj1=JSON.stringify(data)
          //     var xhttp=new XMLHttpRequest()
          //     xhttp.open("POST","https://reqres.in/api/users",true)
          //     xhttp.setRequestHeader("content-type","application/json")
          //     xhttp.onreadystatechange=function(){
          
          //         if(this.readyState==4)
          //         {
          //             var response=this.responseText
          //             console.log(response)
          //         }
          //     }
          //     xhttp.send(obj1)
              
          // })
    
    