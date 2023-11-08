funcƟon Triangle() 
{ 
 var b=parseFloat(document.getElementById("base").value); 
 var h=parseFloat(document.getElementById("Height").value); 
 var a=0.5*b*h; 
 document.getElementById("try").innerHTML="Area of Triangle : " +a; 
} 
funcƟon Rectangle()
{ 
 var l=parseFloat(document.getElementById("Length").value); 
 var b=parseFloat(document.getElementById("Breadth").value); 
 var a=l*b; 
 document.getElementById("cal").innerHTML="Area of Triangle : " +a; 
} 
funcƟon Circle()
{ 
 var r=parseFloat(document.getElementById("radius").value); 
 var a= 3.14*r*r; 
 document.getElementById("result").innerHTML="Area of Circle : " +a; 
} 