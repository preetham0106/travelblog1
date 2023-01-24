/* <tr>
<td></td>
<td>philip.chaney@gmail.com</td>
<td>Manager</td>
<td>Admin</td>
<td class="text-end">
    <a href="" class="btn btn-outline-info btn-rounded"><i class="fas fa-pen"></i></a>
    <a href="" class="btn btn-outline-danger btn-rounded"><i class="fas fa-trash"></i></a>
</td>
</tr> */


const httpRequest=new XMLHttpRequest()
httpRequest.open('GET','https://reqres.in/api/users?page=2')
httpRequest.send()
httpRequest.onload=function()

{
    data=JSON.parse(this.responseText)
    console.log(data)
    const arr=data.data
    const data2 = JSON.parse(window.localStorage.getItem('users'))
    for(user of data2)
    {
  document.getElementById("tbody").innerHTML+="<tr> <td>"+user.name+"</td><td>"+user.mail+"</td><td>"+user.username+"</td><td>"+user.address+"</td></tr>"
 }
for(i of arr)
{
    document.getElementById("tbody").innerHTML+="<tr> <td>"+i.first_name+"</td><td>"+i.email+"</td><td>"+i.last_name+"</td></tr>"
}
}

