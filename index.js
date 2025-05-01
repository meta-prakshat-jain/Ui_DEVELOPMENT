const form = document.querySelectorAll(".form-step");
console.log(form);
form.forEach((step) => {
    if (step.id === "step-1") {
    step.style.display = "block";
 } else {
  step.style.display = "none";
 }
});

const form2 = document.querySelectorAll(".form-vehicle");
form2.forEach((step) => {
 if (step.id === "step-v-1") {
  step.style.display = "block";
 } else {
  step.style.display = "none";
 }
});
function moveToNext(nextId, currId) {

 if (currId === "step-1" && !checkValidationName()) {
  return;
 }

 const currElem = document.getElementById(currId);
 const nextElem = document.getElementById(nextId);

 if (currElem) currElem.style.display = "none";
 if (nextElem) nextElem.style.display = "block";
}

function checkValidationName() {
 const fname = document.getElementById("fname").value.trim();
 const errorDiv = document.getElementById("name-error");

 if (!fname) {
  errorDiv.textContent = "Full name is required.";
  return false;
 }

 const nameRegex = /^([a-zA-Z]+[\s-']?){1,3}$/;

 if (!nameRegex.test(fname)) {
  errorDiv.textContent = "Invalid full name format.";
  return false;
 }

 errorDiv.textContent = ""; 
 return true;
}
function checkEmail() {
 const email = document.getElementById("Email").value.trim();
 const errorDiv = document.getElementById("email-error");
 const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

 if (!email) {
  errorDiv.textContent = "Email is required.";
  return false;
 }

 if (!emailRegex.test(email)) {
  errorDiv.textContent = "Invalid email format.";
  return false;
 }

 errorDiv.textContent = "";
 return true;
}

function checkPassword() {
 const password = document.getElementById("password").value;
 const errorDiv = document.getElementById("password-error");

 if (!password) {
  errorDiv.textContent = "Password is required.";
  return false;
 }

 if (password.length < 6) {
  errorDiv.textContent = "Password must be at least 6 characters.";
  return false;
 }

 errorDiv.textContent = "";
 return true;
}

function checkConfirmPassword() {
 const password = document.getElementById("password").value;
 const confirm = document.getElementById("conpassword").value;
 const errorDiv = document.getElementById("conpassword-error");

 if (!confirm) {
  errorDiv.textContent = "Confirm password is required.";
  return false;
 }

 if (password !== confirm) {
  errorDiv.textContent = "Passwords do not match.";
  return false;
 }

 errorDiv.textContent = "";
 return true;
}

function checkContact() {
 const contact = document.getElementById("Contact").value.trim();
 const errorDiv = document.getElementById("contact-error");
 const phoneRegex = /^[0-9]{10}$/;

 if (!contact) {
  errorDiv.textContent = "Contact number is required.";
  return false;
 }

 if (!phoneRegex.test(contact)) {
  errorDiv.textContent = "Enter a valid 10-digit number.";
  return false;
 }

 errorDiv.textContent = "";
 return true;
}

 function generateEmployeeId() {

  const randomNum = Math.floor(1000 + Math.random() * 9000);
  return `EMP2025${randomNum}`;
 }

 function handleSubmit() {
  const empId = generateEmployeeId();
  document.getElementById(
   "employee-id-display"
  ).textContent = `Employee ID: ${empId}`;
  document.querySelector(".add_employee_form").style.display = "none";
 }

function generateCarPlan() {
 document.getElementById("plan-display").innerHTML = `
<h4>Selected Plan: <span style="color:green">Car</span></h4>
<ul>
  <li>$20 Daily</li>
  <li>$500 Monthly</li>
  <li>$35,000 Yearly</li>
</ul>
  `;
}

function generateBikePlan() {
 document.getElementById("plan-display").innerHTML = `
<h4>Selected Plan: <span style="color:green">Motorcycle</span></h4>
<ul>
  <li>$10 Daily</li>
  <li>$200 Monthly</li>
  <li>$1,000 Yearly</li>
</ul>
  `;
}

function generateCyclePlan() {
 document.getElementById("plan-display").innerHTML = `
<h4>Selected Plan: <span style="color:green">Cycle</span></h4>
<ul>
  <li>$5 Daily</li>
  <li>$100 Monthly</li>
  <li>$500 Yearly</li>
</ul>
  `;
}
const pricingINR = {
 Cycle: { Daily: 5, Monthly: 100, Yearly: 500 },
 Motorcycle: { Daily: 10, Monthly: 200, Yearly: 1000 },
 "Four Wheeler": { Daily: 20, Monthly: 500, Yearly: 3500 },
};

const exchangeRates = {
 INR: 1,
 USD: 0.012, 
 YEN: 1.82, 
};

function calculateAndShowPass() {
 const vehicle = document.querySelector(
  'input[name="vehicle-type"]:checked'
 )?.value;
 const plan = document.querySelector('input[name="plan-type"]:checked')?.value;
 const currency = document.getElementById("currency-select").value;

 if (!vehicle || !plan) {
  document.getElementById("final-pass").innerText =
   "Please select vehicle and plan type.";
  return;
 }

 const inrPrice = pricingINR[vehicle][plan];
 const convertedPrice = (inrPrice * exchangeRates[currency]).toFixed(2);
 const usdPrice = (inrPrice * exchangeRates["USD"]).toFixed(2); 

 document.getElementById("final-pass").innerHTML = `
<p>Selected Vehicle: ${vehicle}</p>
<p>Plan Type: ${plan}</p>
<p>Price in ${currency}: ${convertedPrice}</p>
<p style="color: green;">Stored Price (USD): $${usdPrice}</p>
`;
}
