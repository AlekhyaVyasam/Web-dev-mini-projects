// let currDate= document.getElementById("currDate");
// let dateOfBirth = document.querySelector("#DOB");
// const CalcAge= document.getElementById("CalcAge");
// const displayAge= document.getElementById("displayAge");
// const Age= document.getElementById("age");
// var today = new Date();
// currDate.innerText=`Today's Date is : ${today.toLocaleDateString('en-US')}`;
// // currDate.innerText=`Today's Date is : ${today.toLocaleDateString('en-IN')}`;



// CalcAge.addEventListener("click",()=>{
//     var birthDate = new Date(dateOfBirth.value);
//     var age = today.getFullYear() - birthDate.getFullYear();
//     var m = today.getMonth() - birthDate.getMonth();
//     if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
//         age = age - 1;
//     }
// displayAge.style.visibility="visible";
// Age.innerText=`You are ${age} years old.`
// });


let currDate = document.getElementById("currDate");
let dateOfBirth = document.querySelector("#DOB");
const CalcAge = document.getElementById("CalcAge");
const displayAge = document.getElementById("displayAge");
const Age = document.getElementById("age");
var today = new Date();

currDate.innerText = `Today's Date is : ${today.toLocaleDateString('en-IN')}`; // Display current date in Indian format

CalcAge.addEventListener("click", () => {
  // Split the date of birth input into parts based on dd/mm/yyyy format
  const [day, month, year] = dateOfBirth.value.split("/");

  // Create a new Date object in the correct order for Indian format
  var birthDate = new Date(year, month - 1, day); // Months are 0-indexed

  // Calculate age as usual
  var age = today.getFullYear() - birthDate.getFullYear();
  var m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age = age - 1;
  }

  displayAge.style.visibility = "visible";
  Age.innerText = `You are ${age} years old.`;
});
