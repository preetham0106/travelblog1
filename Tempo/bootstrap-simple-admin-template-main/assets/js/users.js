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
//     for (i=0;i<localStorage.length;i++)
//  { 
//     x = localStorage.key(i);
//     lastname=localStorage.getItem(x);
//     if(lastname==null)
//     continue
//     console.log(lastname)
//     const obj1=JSON.parse(lastname);
//     document.getElementById("tbody").innerHTML+="<tr> <td>"+obj1.name+"</td><td>"+obj1.mail+"</td><td>"+obj1.username+"</td><td>"+obj1.address+"</td></tr>"
// }
for(i of arr)
{
    document.getElementById("tbody").innerHTML+="<tr> <td>"+i.first_name+"</td><td>"+i.email+"</td><td>"+i.last_name+"</td></tr>"
}
}

