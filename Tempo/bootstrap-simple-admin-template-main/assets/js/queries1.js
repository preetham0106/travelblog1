
const data2 = JSON.parse(window.localStorage.getItem('queries'))
    for(user of data2)
    {
  document.getElementById("tbody").innerHTML+="<tr> <td>"+user.name+"</td><td>"+user.email+"</td><td>"+user.subject+"</td><td>"+user.message+"</td></tr>"
 }