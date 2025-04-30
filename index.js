// const btnClick=document.getElementById("Employee-btn").addEventListener("click", displayName);
// const steps=document.querySelectorAll('.form-step');
// console.log(steps);
// function displayName(){
//     document.getElementById("step-2").style.visibility = "hidden";
// }

function showField_2(nextfieldId, previousFieldId) {
    const prevField = document.getElementById(previousFieldId);
    const nextField = document.getElementById(nextfieldId);

    if (prevField) {
        prevField.style.display = "none";
    }
    
    if (nextField) {
        nextField.style.display = "block"; 
    }

    return false; 
}
function showField(nextfieldId, previousFieldId) {
    if (previousFieldId === "step-4" || previousFieldId === "step-5") {
        const passwordInput = document.getElementById("password");
        const confirmPasswordInput = document.getElementById("conpassword");

        if (passwordInput.value.length < 8) {
            alert("Password must be at least 8 characters long.");
            passwordInput.style.borderColor = "red";
            return;
        } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(passwordInput.value)) {
            alert("Password must include uppercase, lowercase, and numeric characters.");
            passwordInput.style.borderColor = "red";
            return;
        } else {
            passwordInput.style.borderColor = "green";
        }

        if (previousFieldId === "step-5" && confirmPasswordInput.value !== passwordInput.value) {
            alert("Passwords do not match. Please enter again.");
            confirmPasswordInput.style.borderColor = "red";
            return;
        } else {
            confirmPasswordInput.style.borderColor = "green";
        }
    }

    const prevField = document.getElementById(previousFieldId);
    const nextField = document.getElementById(nextfieldId);

    if (prevField) prevField.style.display = "none";
    if (nextField) nextField.style.display = "block";
}

document.getElementById("add_employee_form").addEventListener("submit", function (event) {
    event.preventDefault(); 

    const passwordInput = document.getElementById("password");
    const confirmPasswordInput = document.getElementById("conpassword");

    let errorMessage = ""; 

    if (passwordInput.value.length < 8) {
        errorMessage += "Password must be at least 8 characters long.\n";
        passwordInput.style.borderColor = "red";
    } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(passwordInput.value)) {
        errorMessage += "Password must include uppercase, lowercase, and numeric characters.\n";
        passwordInput.style.borderColor = "red";
    } else {
        passwordInput.style.borderColor = "green";
    }

    if (confirmPasswordInput.value !== passwordInput.value) {
        errorMessage += "Passwords do not match. Please try again.\n";
        confirmPasswordInput.style.borderColor = "red";
    } else {
        confirmPasswordInput.style.borderColor = "green";
    }

    if (errorMessage !== "") {
        alert(errorMessage);
        return;
    }

    alert("Password validation passed! Form submitted successfully.");
});

function Generate(){
    const prefix="EMP";
    const unique=Math.floor(Math.random()*9000)+1000;
    return '${prefix}-${unique}';
}
