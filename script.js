function addTwoNumber(){
    let a= document.getElementById("box1").value;
    let aInt=parseInt(a);
    let b= document.getElementById("box2").value;
    let bInt= parseInt(b);
    let res=document.getElementById("res");

    let sum =aInt+bInt;
    res.textContent=sum;
}
function subTwoNumber(){
    let a= document.getElementById("box1").value;
    let aInt=parseInt(a);
    let b= document.getElementById("box2").value;
    let bInt= parseInt(b);
    let res=document.getElementById("res");

    let sub =aInt-bInt;
    res.textContent=sub;
}
function mulTwoNumber(){
    let a= document.getElementById("box1").value;
    let aInt=parseInt(a);
    let b= document.getElementById("box2").value;
    let bInt= parseInt(b);
    let res=document.getElementById("res");

    let mul =aInt*bInt;
    res.textContent=mul;
}
function divTwoNumber(){
    let a= document.getElementById("box1").value;
    let aInt=parseInt(a);
    let b= document.getElementById("box2").value;
    let bInt= parseInt(b);
    let res=document.getElementById("res");

    let div =aInt/bInt;
    res.textContent=div;
}