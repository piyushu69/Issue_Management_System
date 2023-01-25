
const form = document.querySelector("form");
const phase1 = document.querySelector("#phase1");
const phase2 = document.querySelector("#phase2");
const phase3 = document.querySelector("#phase3");
const phase4 = document.querySelector("#phase4");

form.addEventListener("submit", (event) => {
   event.preventDefault();

  
  const issueId = Math.floor(Math.random() * 100000);
  const issueStatus = "Open";
  const description = document.querySelector("#description").value;
  const severity = document.querySelector("#severity").value;
  const assignedTo = document.querySelector("#assigned-to").value;

  // Create the card element
  const card = document.createElement("div");
  card.classList.add("card");

  // card element

  card.innerHTML = `
    <p>Issue ID: ${issueId}</p>
    <p class="status">Issue Status: ${issueStatus}</p>
    <p>Description: ${description}</p>
    <p>Severity: ${severity}</p>
    <p>Assigned To: ${assignedTo}</p>
    <button class="close">Close</button>
    <button class="delete">Delete</button>
    <br>
    <button class="prev">Prev</button>
    <button class="next">Next</button>
  `;

  // Add the card to the phase 1 div
  phase1.appendChild(card);
  vacateFields();
  scrolldToCurrentIssues();


 // Get the close button and add a click event listener
 const closeBtn = card.querySelector(".close");
 closeBtn.addEventListener("click", () => {
   // Update the issue status
   const issueStatus = card.querySelector("p:nth-of-type(2)");
   issueStatus.textContent = "Issue Status: Closed";
 });
 
 // Get the delete button and add a click event listener
 const deleteBtn = card.querySelector(".delete");
 deleteBtn.addEventListener("click", () => {
   // Remove the card from the DOM
   card.remove();
 });

 // Get the next button and add a click event listener
   // Get the previous button and add a click event listener
   let prevBtn = card.querySelector(".prev");
   let nextBtn = card.querySelector(".next");
   prevBtn.style.display = "none";
   nextBtn.addEventListener("click", () => {
     if(phase1.contains(card)){
       prevBtn.style.display = "block";
       nextBtn.style.display = "block";
       phase1.removeChild(card);
       phase2.appendChild(card);
     } else if(phase2.contains(card)){
       
       phase2.removeChild(card);
       phase3.appendChild(card);
     } else if(phase3.contains(card)){
       
       nextBtn.style.display = "none";
       
       phase3.removeChild(card);
       phase4.appendChild(card);
     }else if(phase4.contains(card)){
      
      
      //  nextBtn.style.visibility = "hidden";
       
      
     }
     
     

   });
   
   prevBtn.addEventListener("click", () => {
     if(phase4.contains(card)){
       phase4.removeChild(card);
       phase3.appendChild(card);
       const issueStatus = card.querySelector("p:nth-of-type(2)");
       issueStatus.textContent = "Issue Status: Verified";
       nextBtn.style.display = "block";
     } else if(phase3.contains(card)){
       phase3.removeChild(card);
       phase2.appendChild(card);
       const issueStatus = card.querySelector("p:nth-of-type(2)");
       issueStatus.textContent = "Issue Status: Verified";
     } else if(phase2.contains(card)){
       phase2.removeChild(card);
       phase1.appendChild(card);
       const issueStatus = card.querySelector("p:nth-of-type(2)");
       issueStatus.textContent = "Issue Status: Verified";
       prevBtn.style.display = "none";
     }
   });
 
 

});



// form.addEventListener("submit", (event) => {
//   event.preventDefault();
//   // Get the current height of the phase 1 div
//   const currentHeight = phase1.offsetHeight;

//   // Update the height of the phase 1 div
//   phase1.style.height = `${currentHeight+card.offsetHeight}px`;

//    const currentHeight1 = phase2.offsetHeight;

//  //Update the height of the phase 2 div
// phase2.style.height = `${currentHeight + card.offsetHeight}px`;


// const currentHeight2 = phase3.offsetHeight;

// // // // Update the height of the phase 3 div
//  phase3.style.height = `${currentHeight + card.offsetHeight}px`;


//  const currentHeight3 = phase4.offsetHeight;

// // // // Update the height of the phase 4 div
//  phase4.style.height = `${currentHeight + card.offsetHeight}px`;

// });

form.addEventListener("submit", (event) => {
  event.preventDefault();
  // the rest of your code
  // Append the card to the phase 1 div
  phase1.appendChild(card);

  
  const issue = {
    id: Date.now(),
    status: "Open",
    description: form.description.value,
    severity: form.severity.value,
    assignedTo: form.assignedTo.value
  };

  // Store the issue in local storage
  localStorage.setItem("issue" + issue.id, JSON.stringify(issue));

  const storedIssue = JSON.parse(localStorage.getItem("issue" + issue.id));
});


function vacateFields() {

  

  document.getElementById("description").value = "";

  document.getElementById("severity").value = "";

  document.getElementById("assigned-to").value = "";

}

function scrolldToCurrentIssues() {

  var elem = document.getElementById("cards");

  elem.scrollIntoView();

}

