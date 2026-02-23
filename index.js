const btnE1=document.querySelector(".btn");
const inputE1 = document.getElementById("input");
const copyIconE1= document.querySelector(".fa-copy");
const alertContainerE1 = document.querySelector(".alert-container");

btnE1.addEventListener("click",()=>{
    CreatePassword()
})

copyIconE1.addEventListener("click",()=>{
       copyPassword();
       if(!inputE1.value) {
        alertContainerE1.classList.remove("active");
       setTimeout(()=>{
        alertContainerE1.classList.add ("active");

       }, 2000)};

});
    

function CreatePassword() {
    const chars="0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const passwordLength=14;
    let password="";
    for (let index = 0; index <passwordLength; index ++) {
        const randomNum = Math.floor (Math.random() * chars.length);
        password += chars.substring(randomNum, randomNum +1);
    
    }
    inputE1.value = password;
     alertContainerE1.innerText = password + " copied!";
}


function copyPassword() {
    inputE1.select();
   inputE1.setSelectionRange(0,9999); 
    navigator.clipboard.writeText(inputE1.value);
}

const toggleBtn = document.getElementById("theme-toggle");

toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        toggleBtn.textContent = "☀️ Light Mode";
    } else {
        toggleBtn.textContent = "🌙 Dark Mode";
    }
});

// Save theme preference
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
}

toggleBtn.addEventListener("click", () => {
    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
});