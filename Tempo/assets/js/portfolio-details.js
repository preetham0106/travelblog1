console.log(window.location.hash.slice(1))
const name=window.location.hash.slice(1)
const arr=JSON.parse(localStorage.getItem("places"))
//console.log()
for(place of arr){
    console.log("looping")
    console.log(place.name)
    if(name===place.name){
        console.log(place.name)
        document.getElementById("photo").src=place.src
        document.getElementById("title").innerText=place.name
        document.getElementById("description").innerText=place.description
    }
}
