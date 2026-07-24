document.querySelector('form').addEventListener('submit', async (e) => {
    e.preventDefault(); // Stops page from reloading
    
    const submitBtn = e.target.querySelector('button');
    submitBtn.innerText = "Processing...";
    submitBtn.disabled = true;

    const formData = {
        fullname: document.getElementById('fullname').value,
        email: e.target.email.value,
        password: e.target.password.value
    };

    try {
        const response = await fetch('/api/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        });

        const data = await response.json();

        if (response.ok) {
            alert("Registration successful! Redirecting to your dashboard...");
            window.location.href = "/dashboard"; 
        } else {
            alert("Error: " + data.message);
            submitBtn.innerText = "Get Started";
            submitBtn.disabled = false;
        }
    } catch (error) {
        alert("Server error. Please try again later.");
        submitBtn.innerText = "Get Started";
        submitBtn.disabled = false;
    }
});
