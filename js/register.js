// Pesaearn Register System

const registerForm = document.getElementById("registerForm");


if(registerForm){

registerForm.addEventListener("submit", function(e){

    e.preventDefault();


    const fullname = document.getElementById("fullname").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;



    // Save user details

    localStorage.setItem("fullname", fullname);
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);



    // Save account status

    localStorage.setItem("accountCreated", "true");



    alert("Account successfully created ✅");



    // Redirect to dashboard

    window.location.href = "dashboard.html";


});


}
