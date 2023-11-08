<script> 
 funcƟon arrayfrom(){
 var x=(document.getElementById("arr").value); 
 var arr= x.split(','); 
 document.getElementById("try").innerHTML ="Array is "+ arr; 
 
 } 
 funcƟon remove(){
 var x=(document.getElementById("arr").value); 
 var arr= x.split(','); 
 var y=(document.getElementById("Remove").value); 
 var i=arr.indexOf(y); 
 var myarray= arr.splice(i,1); 
 
 document.getElementById("try1").innerHTML ="Array AŌer Removing Element "+ arr;
 } 
 funcƟon check(){
 var x=(document.getElementById("arr").value); 
 var arr= x.split(','); 
 var y=(document.getElementById("check").value); 
 var i=arr.indexOf(y); 
 if(i==-1){ 
 document.getElementById("try2").innerHTML ="Element not present in array "; 
 } 
 else{ 
 document.getElementById("try2").innerHTML ="Element is present at index :" +i; 
 } 
 } 
 funcƟon empty(){
 var x=(document.getElementById("empty").value); 
 var arr= x.split(','); 
 arr.length=0; 
 document.getElementById("try3").innerHTML ="Array is Empty "+ arr; 
 } 
 </script> 
 </body> 
 </html>