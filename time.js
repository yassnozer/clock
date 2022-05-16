function updateDate(){
    var date=new Date()
    var setTime=document.getElementById('settime')


var seco=date.getSeconds()
if(seco<10){
seco=0+`${seco}`
}


    setTime.innerHTML =date.getHours() +" - "+date.getMinutes() +" - "+seco
    var setDate=document.getElementById('setdate')
    setDate.innerHTML=date.getDate()+"-"+parseInt(date.getMonth()+1) + "-" + date. getFullYear();  
}
setInterval(updateDate,100)
onload=updateDate()
function getColor(){
    var getcolor=document.getElementById("setcolor").value
    localStorage.setItem("color",getcolor)
    document.getElementById("time").style.backgroundColor=localStorage.getItem("color")
    document.body.style.backgroundColor=localStorage.getItem("color")
}
function setColor(){
    document.getElementById("setcolor").value=localStorage.getItem("color")
    document.getElementById("time").style.backgroundColor=localStorage.getItem("color")
    document.body.style.backgroundColor=localStorage.getItem("color")

}
setInterval(setColor(),100);