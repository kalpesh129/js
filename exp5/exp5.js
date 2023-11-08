let expiryDate = 0; 
let ƟmerInterval;
document.getElementById("start-buƩon").addEventListener("click", funcƟon () {
 const inputDate = document.getElementById("expiry-input").value; 
 const parsedDate = new Date(inputDate).getTime(); 
 if (!isNaN(parsedDate) && parsedDate > new Date().getTime()) { 
 expiryDate = parsedDate; 
 clearInterval(ƟmerInterval);
 ƟmerInterval = setInterval(updateTimer, 1000);
 } else { 
 document.getElementById("me").textContent = "Please enter a valid future date and 
Ɵme.";
 } 
}); 
funcƟon updateTimer() {
 const currentDate = new Date().getTime(); 
 const difference = expiryDate - currentDate; 
 if (difference <= 0) { 
 clearInterval(ƟmerInterval);
 document.getElementById("me").textContent = "WELCOME RITIk"; 
 } else { 
 const days = Math.floor(difference / (1000 * 60 * 60 * 24)); 
 const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)); 
 const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)); 
 const seconds = Math.floor((difference % (1000 * 60)) / 1000); 
document.getElementById("days").textContent = days + " : " + hours + " : " + minutes + " : " + 
seconds; 
 } 
}