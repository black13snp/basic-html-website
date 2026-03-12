function calculateLove(){

let name1=document.getElementById("name1").value.toUpperCase();
let name2=document.getElementById("name2").value.toUpperCase();

if(name1=="" || name2==""){
alert("Introdu ambele nume ❤️");
return;
}

if(

(name1=="EMA" && name2=="NONI") ||
(name1=="NONI" && name2=="EMA") ||

(name1=="NONI" && name2=="EVA") ||
(name1=="EVA" && name2=="NONI") ||

(name1=="MARIAN" && name2=="EVA") ||
(name1=="EVA" && name2=="MARIAN") ||

(name1=="MARIAN" && name2=="EMA") ||
(name1=="EMA" && name2=="MARIAN") ||

(name1=="MARIAN" && name2=="EMANUELA") ||
(name1=="EMANUELA" && name2=="MARIAN") ||

(name1=="NONI" && name2=="EMA") ||
(name1=="EMA" && name2=="NONI") ||

(name1=="NONI" && name2=="EMANUELA") ||
(name1=="EMANUELA" && name2=="NONI")

){
document.getElementById("percentage").innerText="∞";
document.getElementById("fill").style.width="100%";
document.getElementById("message").innerText="💍 ALREADY MARRIED 💍";
document.getElementById("marriedBtn").style.display="block";
return;
}

let love=Math.floor(Math.random()*101);

document.getElementById("percentage").innerText=love+"%";
document.getElementById("fill").style.width=love+"%";

let message="";

if(love<30){
message="hmm... mai încercați 😅";
}
else if(love<60){
message="not bad 💕";
}
else if(love<80){
message="foarte bine ❤️";
}
else{
message="SOULMATES 💖";
}

document.getElementById("message").innerText=message;

}
