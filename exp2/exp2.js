funcƟon MulƟple()
{ 
 var b=parseFloat(document.getElementById("base").value); 
 for(var i=1; i<=10; i++){ 
 
 document.getElementById("try").innerHTML +=b +" X "+i+" = "+ b * i + "<br/>"; 
 } 
}