const userName=document.getElementById("username");
const greeting=document.getElementById("output");
const btnSubmit=document.getElementById("btnSubmit");


const greetWithTime=(name)=>{
    let date = new Date();
    let currentTime = date.toLocaleString([], {
        hour: '2-digit',
        minute: '2-digit'});
    if(currentTime.endsWith("AM"))
    {
        
    }
    
    greeting.textContent=`Hi ${name}, it's ${currentTime}.`;
}

btnSubmit.addEventListener("click",()=>{
    if(userName.value!=='')
    {
        greetWithTime(userName.value);
        console.log(userName.value);
        userName.value='';
    }
    else{
        alert("Please enter a name");
    }
});
