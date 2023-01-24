const arr=[]
arr.push({name:"Delhi",src:"assets/img/portfolio/portfolio-1.jpg"})
arr.push({name:"Goa",src:"assets/img/portfolio/portfolio-2.jpg"})

arr.push({name:"Kerala",src:"assets/img/portfolio/portfolio-3.jpg"})
arr.push({name:"Sikkim",src:"assets/img/portfolio/portfolio-4.jpg"})
arr.push({name:"Arunachal Pradesh",src:"assets/img/portfolio/portfolio-5.jpg"})
arr.push({name:"Srinagar",src:"assets/img/portfolio/portfolio-6.jpg"})
localStorage.setItem("places",JSON.stringify(arr))

const add=document.getElementById("add")
add.addEventListener("click",()=>{
    console.log("clicked")
    document.getElementById('places').style.display='none'
    document.getElementById('form').style.display=''
    document.getElementById('add').style.display='none'
    const add_place=document.getElementById("submit")
    add_place.addEventListener("click",()=>{
        
    })
})


const container=document.getElementById("places")

const places=JSON.parse(localStorage.getItem("places"))
console.log(places)
for(place of places){
    container.innerHTML+="<div class='col-lg-4 col-md-6 portfolio-item filter-app'> <img src="+place.src+" class='img-fluid' alt=''><div class='portfolio-info'><h4>"+place.name+"</h4><a href="+place.src+" data-gallery='portfolioGallery' class='portfolio-lightbox preview-link' title='Taj Mahal'><i class='bx bx-plus'></i></a><a href='portfolio-details.html' class='details-link' title='More Details'><i class='bx bx-link'></i></a></div></div>"
}
/* <div class="col-lg-4 col-md-6 portfolio-item filter-app">
<img src="assets/img/portfolio/portfolio-1.jpg" class="img-fluid" alt="">
<div class="portfolio-info">
  <h4>Delhi</h4>
  <a href="assets/img/portfolio/portfolio-1.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox preview-link" title="Taj Mahal"><i class="bx bx-plus"></i></a>
  <a href="portfolio-details.html" class="details-link" title="More Details"><i class="bx bx-link"></i></a>
</div>
</div> */

