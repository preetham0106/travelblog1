
console.log("hi")
const arr=[]
arr.push({name:"Delhi",src:"assets/img/portfolio/portfolio-1.jpg"})
arr.push({name:"Goa",src:"assets/img/portfolio/portfolio-2.jpg"})

arr.push({name:"Kerala",src:"assets/img/portfolio/portfolio-3.jpg"})
arr.push({name:"Sikkim",src:"assets/img/portfolio/portfolio-4.jpg"})
arr.push({name:"Arunachal Pradesh",src:"assets/img/portfolio/portfolio-5.jpg"})
arr.push({name:"Srinagar",src:"assets/img/portfolio/portfolio-6.jpg"})
localStorage.setItem("places",JSON.stringify(arr))

const container=document.getElementById("places")

const places=JSON.parse(localStorage.getItem("places"))
console.log(places)
for(place of places){
    container.innerHTML+="<div class='col-lg-4 col-md-6 portfolio-item filter-app'> <img src="+place.src+" class='img-fluid' alt=''><div class='portfolio-info'><h4>"+place.name+"</h4><a href="+place.src+" data-gallery='portfolioGallery' class='portfolio-lightbox preview-link' title='Taj Mahal'><i class='bx bx-plus'></i></a><a href='portfolio-details.html' class='details-link' title='More Details'><i class='bx bx-link'></i></a></div></div>"
}
for(persons in localStorage)
{
    console.log(localStorage[persons])
    const obj=JSON.parse(localStorage[persons])
    if(obj.islogged===true)
    {
        console.log("hello")
        document.getElementById("greeting").innerHTML="Welcome"+" "+obj.name
        document.getElementById("options").style.display='none'
        document.getElementById("logout").style.display=''
        document.getElementById("profile").style.display=''
        const logout=document.getElementById("logout")
    logout.addEventListener("click",()=>{
            logout.style.display='none'
            obj.islogged=false;
            localStorage.setItem(obj.mail,JSON.stringify(obj))
            document.getElementById("profile").style.display='none'
            document.getElementById('options').style.display=''
            document.getElementById('greeting').innerHTML='Welcome to <strong>Travello</strong>'


       })

    }
    
}

