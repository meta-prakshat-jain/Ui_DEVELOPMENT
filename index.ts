

function moveToNext(nextId: string, currId: string): void {
    if (currId === "step-1" && !checkValidationName()) return;
    if (currId === "step-3" && !checkEmail()) return;
    if (currId === "step-4" && !checkPassword()) return;
    if (currId === "step-5" && !checkConfirmPassword()) return;
    if (currId === "step-6" && !checkContact()) return;

    const curr = document.getElementById(currId);
    const next = document.getElementById(nextId);
    if (curr) curr.style.display = "none";
    if (next) next.style.display = "block";
}

function checkValidationName(): boolean {
    const fname: string = (document.getElementById("fname") as HTMLInputElement).value.trim();
    const errorDiv: HTMLElement | null = document.getElementById("name-error");

    if (!fname) {
        if (errorDiv) errorDiv.textContent = "Full name is required.";
        return false;
    }

    const nameRegex: RegExp = /^([a-zA-Z]+[\s-']?){1,3}$/;

    if (!nameRegex.test(fname)) {
        if (errorDiv) errorDiv.textContent = "Invalid full name format.";
        return false;
    }

    if (errorDiv) errorDiv.textContent = ""; 
    return true;
}

function checkEmail(): boolean {
    const email: string = (document.getElementById("Email") as HTMLInputElement).value.trim();
    const errorDiv: HTMLElement | null = document.getElementById("email-error");
    
    const emailRegex: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) {
        if (errorDiv) errorDiv.textContent = "Email is required.";
        return false;
   }

   if (!emailRegex.test(email)) {
       if (errorDiv) errorDiv.textContent = "Invalid email format.";
       return false;
   }

   if (errorDiv) errorDiv.textContent = "";
   return true;
}

function checkPassword(): boolean {
   const password: string = (document.getElementById("password") as HTMLInputElement).value;
   const errorDiv: HTMLElement | null= document.getElementById("password-error");

   if (!password) {
       if(errorDiv) errorDiv.textContent=  "Password is required.";
       return false;
   }

   if(password.length < 6){
       if(errorDiv) errorDiv.textContent=  "Password must be at least 6 characters.";
       return false;   
   }

   if(errorDiv) errorDiv.textContent= '';
   return true;  
}

function checkConfirmPassword(): boolean { 
  const password: string = (document.getElementById("password") as HTMLInputElement).value; 
  const confirm: string = (document.getElementById("conpassword") as HTMLInputElement).value; 
  const errorDiv: HTMLElement | null = document.getElementById("conpassword-error"); 

  if (!confirm) { 
     if (errorDiv) errorDiv.textContent = "Confirm password is required."; 
     return false; 
  } 

  if (password !== confirm) { 
     if (errorDiv) errorDiv.textContent = "Passwords do not match."; 
     return false; 
  } 

  if (errorDiv) errorDiv.textContent = ""; 

  return true;
}

function checkContact(): boolean {
  const contact: string = (document.getElementById("Contact") as HTMLInputElement).value.trim();
  const errorDiv: HTMLElement | null = document.getElementById("contact-error");
  const phoneRegex: RegExp = /^[0-9]{10}$/;

  if (!contact) {
      if (errorDiv) errorDiv.textContent = "Contact number is required.";
      return false;
  }

  if (!phoneRegex.test(contact)) {
      if (errorDiv) errorDiv.textContent = "Invalid contact number format.";
      return false;
  }

  if (errorDiv) errorDiv.textContent = "";
  return true;
}

function generateEmployeeID():string{
const randomNum:number=Math.floor(1000+Math.random()*9000);return`EMP2025${randomNum}`;}
function handleSubmit(): void {
  const empID: string = generateEmployeeID();
  (document.getElementById("employee-id-display") as HTMLElement).textContent = `Employee ID: ${empID}`;
  (document.querySelector(".add_employee_form") as HTMLElement).style.display = "none";
}

function generateCarPlan(): void {
  document.getElementById("planDetails")!.innerHTML = `
      <h4 id="s-plan">Selected Plan: <span style="color:green">Car</span></h4>
      <table style="width:100%">
          <tr><th>Cost</th><th>Time</th></tr>
          <tr><td>20</td><td>Daily</td></tr>
          <tr><td>500</td><td>Monthly</td></tr>
          <tr><td>35000</td><td>Yearly</td></tr>
      </table>`;
}

function generateBikePlan():void{
(document.getElementById)("planDetails")!.innerHTML=`
<h4 id="s-plan">Selected Plan:<span style="color.green">Motorcycle</span></h4><table style="width.100%">
<tr><th>Cost</th><th>Time </th></tr><tr><td >20 </ td >< td > Daily </ td ></ tr >
< tr >
< td >500< / td >
< td > Monthly < / td >
< / tr >
< tr >
< td >35000< / td >
< td > Yearly < / td >
< / tr ></ table > ` ;}

 function generateCyclePlan (): void {  
(document.getElementById)("planDetails")!.innerHTML=`  
<h4 id =" s - plan "> Selected Plan : < span style =" color : green "> Cycle < / span >< / h4 >< ul >  
<li >5 Daily < / li >< li >100 Monthly < / li >< li >500 Yearly < / li >< / ul > ` ;}  

const pricingINR:{[key:string]:{[key:string]:number}}={Cycle:{Daily :5 , Monthly :100 , Yearly :500 }, Motorcycle:{Daily :10 , Monthly :200 , Yearly :1000 }, FourWheeler:{Daily :20 , Monthly :500 , Yearly :3500 }, };  

const exchangeRates:{[key:string]:number}={INR:1, USD:.012,YEN:.182};  

function calculateAndShowPass(): void {
  const randomNum: number = Math.floor(1000 + Math.random() * 9000);
  const randomemployee: string = `EMP2025${randomNum}`;

  const vehicle = (document.querySelector('input[name="vehicle-type"]:checked') as HTMLInputElement)?.value;
  const plan = (document.querySelector('input[name="plan-type"]:checked') as HTMLInputElement)?.value;
  const currency: string = (document.getElementById("currency-select") as HTMLSelectElement).value;

  if (!vehicle || !plan) {
      document.getElementById("final-pass")!.innerText = "Please select vehicle and plan type.";
      return;
  }

  let inrPrice: number = pricingINR[vehicle][plan];
  let convertedPrice: string = (inrPrice * exchangeRates[currency]).toFixed(2);
  let usdPrice: string = (inrPrice * exchangeRates["USD"]).toFixed(2);

  document.getElementById("final-pass")!.innerHTML = `
      <p>Select Vehicle: ${vehicle}</p>
      <p>Plan Type: ${plan}</p>
      <p>Price in ${currency}: ${convertedPrice}</p>
      <p style="color:green;">Stored Price (USD): $${usdPrice}</p>`;
}
