// Pesaearn Login System

const loginForm = document.getElementById("loginForm");


if(loginForm){

loginForm.addEventListener("submit", function(e){

    e.preventDefault();


    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;


    // Get saved account from register

    const savedEmail = localStorage.getItem("email");
    const savedPassword = localStorage.getItem("password");
    const savedName = localStorage.getItem("fullname");



    if(email === savedEmail && password === savedPassword){


        // Save login status

        localStorage.setItem("loggedIn","true");


        alert("Login successful ✅ Welcome " + savedName);


        window.location.href = "dashboard.html";


    }else{


        alert("Invalid email or password ❌");


    }


});


}
