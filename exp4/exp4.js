<script> 
 funcƟon compare()
 { 
 var str1=(document.getElementById("firststr").value); 
 var str2=(document.getElementById("secondstr").value); 
 if(str1>str2) 
 { 
 document.getElementById("try").innerHTML =" String 1 is greater then String 2 "; 
 } 
 else if(str1<str2){ 
 document.getElementById("try").innerHTML =" String 2 is greater then String 1"; 
 } 
 else{ 
 document.getElementById("try").innerHTML ="Both String are equal " 
 } 
 } 
 funcƟon strictequality()
 { 
 var str1=(document.getElementById("firststr").value); 
 var str2=(document.getElementById("secondstr").value); 
 if(str1===str2) 
 { 
 document.getElementById("result").innerHTML ="Both String are equal "; 
 } 
 else{ 
 document.getElementById("result").innerHTML ="String are not Equal"; 
 } 
 } 
 funcƟon match()
 { 
 var str1=(document.getElementById("firststr").value); 
 var str2=(document.getElementById("secondstr").value); 
 let result= str1.match(str2); 
 var cmp ; 
 let y=str1.indexOf(result); 
 if(result!=str2){ 
 cmp="String 1 is not macthing with string 2"; 
 } 
 else 
 { 
 cmp="String 1 is matching with string 2 <br>Index : "+y+"<br>"+" Element : "+ result; 
 } 
 document.getElementById("result1").innerHTML = cmp ; 
 } 
 
 funcƟon matchall() 
 { 
 var str1=(document.getElementById("firststr").value); 
 var str2=(document.getElementById("secondstr").value); 
 var cmp; 
 var result=str1.matchAll(str2); 
 var y=" "; 
 for(var x of result) 
 { 
 y=y+x.index + " " 
 
 } 
 if(x!=str2){ 
 cmp="String 1 is not matching with string 2"; 
 } 
 else{ 
 cmp="String 1 is matching with string 2 <br>Index : "+y+"<br>"+" Element : "+ x; 
 } 
 document.getElementById("result2").innerHTML = cmp ; 
 
 } 
 funcƟon localcompare()
 { 
 var str1=(document.getElementById("firststr").value); 
 var str2=(document.getElementById("secondstr").value); 
 var str3=str1.localeCompare(str2); 
 var cmp; 
 if(str3==0) 
 { 
 cmp=str3+ ", Means string 1 is equal to string 2 "; 
 } 
 else if(str3==-1) 
 { 
 cmp=str3+", Means string 2 is gerater then string 1"; 
 } 
 else{ 
 cmp=str3+", Means String 1 is gerater then string 2"; 
 } 
 document.getElementById("result3").innerHTML = cmp ; 
 } 
 </script>