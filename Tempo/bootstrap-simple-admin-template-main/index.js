users=JSON.parse(localStorage.getItem("users"))
document.getElementById("u").innerHTML+="<p class='detail-subtitle'>Registered Users</p><span class='number'>"+users.length+"</span>"

queries=JSON.parse(localStorage.getItem("queries"))
document.getElementById("u1").innerHTML+="<p class='detail-subtitle'>Contact Request</p><span class='number'>"+queries.length+"</span>"