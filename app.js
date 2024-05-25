var list = document.getElementById("list")
function add(){
    var input = document.getElementById("input")
    // console.log(input.value);
var li = document.createElement("li")
li.innerHTML = input.value
if(input.value.length <=3){
    alert("Enter Correct Todo")
    return
}


li.style.color = "black"
li.style.fontSize = "20px"
li.style.border = "1px solid black"
var editbtn =document.createElement('button') 
editbtn.innerHTML = "EDIT"
editbtn.setAttribute("onclick", "edit(this)")
editbtn.style.background = "black"
editbtn.style.color = "white"
editbtn.style.maxWidth = "12%"
editbtn.style.height = "30px"
// editbtn.style.marginLeft = "420px"

var delbtn =document.createElement('button') 
delbtn.innerHTML = "DELETE"
delbtn.style.background = "black"
delbtn.style.color = "white"
delbtn.style.maxWidth = "12%"
delbtn.style.height = "30px"
delbtn.setAttribute("onclick","deleteRow(this)")

// delbtn.style.marginLeft = "20px"

li.appendChild(editbtn)
li.appendChild(delbtn)
list.appendChild(li)
input.value = ""



}

function del(){
list.innerHTML = ''
}


function deleteRow(el){
// el.parentnode = ''
// console.log(el.parentNode);
el.parentNode.remove()

}



function edit(el){
    // el.innerHTML = document.createElement("input")
 var input = document.getElementById("input")
//  input.value = el.parentnode
console.log(el.parentNode.innerHTML);
    
}












