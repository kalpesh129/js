funcƟon reverse()
 { 
 var str=(document.getElementById("base").value); 
 let reversedStr = ""; 
 for (let i = str.length - 1; i >= 0; i--) { 
 reversedStr += str[i]; 
} 
 document.getElementById("try").innerHTML ="Reverse String is "+ reversedStr; 
 return reversedStr; 
} 
// Built in FuncƟon 
 funcƟon bulƟn(){
 var str=(document.getElementById("base").value); 
 const arr=str.split(""); 
 const arr1=arr.reverse(); 
 const join=arr1.join(""); 
 document.getElementById("me").innerHTML ="Reverse String is "+ join; 
 
 } 
 funcƟon rep(){
 var str=(document.getElementById("base").value); 
 var str1=(document.getElementById("remove").value); 
 var str2=(document.getElementById("add").value); 
 var newstr=str.replace(str1, str2); 
 document.getElementById("result1").innerHTML ="New String is "+ newstr; 
 
 
 
 } 
 funcƟon repall(){
 var str=(document.getElementById("base").value); 
 var str1=(document.getElementById("remov").value); 
 var str2=(document.getElementById("ad").value); 
 
 var newstr1=str.replaceAll(str1,str2); 
 
 document.getElementById("result2").innerHTML ="New String is "+ newstr1; 
 } 
funcƟon check()
{ 
 var str=(document.getElementById("base").value); 
 var str1=reverse(); 
 if(str==str1){ 
 document.getElementById("result3").innerHTML =" String is Palindrome "; 
 } 
 else{ 
 document.getElementById("result3").innerHTML =" String is not Palindrome "; 
 } 
 
} 
 </script> 
 </body> 
 </html> 