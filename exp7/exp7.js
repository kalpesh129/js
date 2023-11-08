<script > 
 var objectArray = []; 
// FuncƟon to add an object to the array
funcƟon addObjectToArray() {
 var field = document.getElementById("field").value; 
 var value = document.getElementById("value").value; 
 
 // Create an object with the given field and value 
 var newObject = { field: field, value: value }; 
 
 // Add the object to the array 
 objectArray.push(newObject); 
 
 // Clear input fields 
 document.getElementById("field").value = ""; 
 document.getElementById("value").value = ""; 
 
 // Display the updated array 
 displayArray(); 
} 
funcƟon displayArray() {
 var output = document.getElementById("output"); 
 output.innerHTML = ""; 
 
 objectArray.forEach(funcƟon(obj) {
 var listItem = document.createElement("li"); 
 listItem.textContent = JSON.stringify(obj); 
 output.appendChild(listItem); 
 }); 
} 
// FuncƟon to check if a variable is in the array
funcƟon checkInArray() {
 var variableToCheck = document.getElementById("checkVariable").value; 
 
 // Check if the variable is in the array 
 var isInArray = objectArray.some(funcƟon(obj) {
 return obj.field === variableToCheck; 
 }); 
 
 var result = document.getElementById("result"); 
 if (isInArray) { 
 result.textContent = "Variable is in the array."; 
 } else { 
 result.textContent = "Variable is not in the array."; 
 } 
} 
 </script> 
</body> 
</html>