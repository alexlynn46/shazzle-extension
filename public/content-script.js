/*global chrome*/

var button = document.createElement("button");
button.innerHTML = "Send Email";
button.classList.add("btn-send", "right", "mleft10px");

var body = document.getElementsByClassName("no_print wrap right mleft10px")[0];
body.appendChild(button);

/* Send Message */

// button.addEventListener("click", async function () {
//   // Fetch Patient by ID
//   const patientInfo = await fetch(
//     "https://shazzle-api.herokuapp.com/api/patients/353"
//   )
//     .then((response) => response.json())
//     .then((res) => res.data.patient);
//   // console.log("Phone number for Patients:353 => ", patientInfo.phone);

//   // Create a form dynamically
//   var form = document.createElement("form");
//   form.classList.add("sms-form");

//   // Create an label element for Phone Number
//   // var labelTo = document.createElement("label");
//   // labelTo.setAttribute("for", "to");
//   // labelTo.innerHTML = "To: ";

//   // Create an input element for Phone Number
//   var phone = document.createElement("input");
//   phone.setAttribute("type", "tel");
//   phone.setAttribute("name", "to");
//   phone.setAttribute("id", "phone");
//   phone.setAttribute("placeholder", "Phone Number");
//   phone.setAttribute("value", patientInfo.phone);

//   // Create an label element for Message
//   // var labelMessage = document.createElement("label");
//   // labelMessage.setAttribute("for", "message");
//   // labelMessage.innerHTML = "Message: ";

//   // Create an textarea element for Message
//   var message = document.createElement("textarea");
//   message.setAttribute("id", "message");
//   message.setAttribute("name", "message");
//   message.setAttribute("placeholder", "Send Message");

//   // Create a submit button
//   var submit = document.createElement("input");
//   submit.setAttribute("type", "submit");
//   submit.setAttribute("id", "submit");
//   submit.setAttribute("value", "Submit");

//   // Create line break
//   var linebreak = document.createElement("br");

//   // Append the full name input to the form
//   // form.appendChild(labelTo);
//   form.appendChild(phone);

//   // Append the emailID to the form
//   // form.appendChild(labelMessage);
//   form.appendChild(message);
//   // Insert a line break
//   form.appendChild(linebreak);

//   // Append the submit button to the form
//   form.appendChild(submit);

//   document.getElementsByTagName("body")[0].appendChild(form);

//   form.addEventListener("submit", function (event) {
//     event.preventDefault();

//     const message = {
//       to: document.getElementById("phone").value,
//       body: document.getElementById("message").value,
//     };

//     fetch("https://shazzle-api.herokuapp.com/api/send-sms", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(message),
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         if (data.success) {
//           console.log("data success: ", data);
//         } else {
//           console.log("data failed: ", data);
//         }
//       });
//   });
// });

/* Send Email */

button.addEventListener("click", async function () {
  const patientInfo = await fetch(
    "https://shazzle-api.herokuapp.com/api/patients/353"
  )
    .then((response) => response.json())
    .then((res) => res.data.patient);

  // Create a form dynamically
  var form = document.createElement("form");
  form.classList.add("sms-form");

  // Create an label element for Email Address
  // var labelTo = document.createElement("label");
  // labelTo.setAttribute("for", "email");
  // labelTo.innerHTML = "To Email: ";

  // Create an input element for Email Address
  var email = document.createElement("input");
  email.setAttribute("type", "email");
  email.setAttribute("name", "email");
  email.setAttribute("id", "emailC");
  email.setAttribute("placeholder", "Email Address");
  email.setAttribute("value", patientInfo.email);

  // Create an label element for Subject
  // var labelSubject = document.createElement("label");
  // labelSubject.setAttribute("for", "subject");
  // labelSubject.innerHTML = "Subject: ";

  // Create an input element for Subject
  var subject = document.createElement("input");
  subject.setAttribute("type", "text");
  subject.setAttribute("name", "subject");
  subject.setAttribute("id", "subjectC");
  subject.setAttribute("placeholder", "Subject");
  // subject.setAttribute("value", "");

  // Create an label element for Message
  // var labelMessage = document.createElement("label");
  // labelMessage.setAttribute("for", "message");
  // labelMessage.innerHTML = "Message: ";

  // Create an textarea element for Message
  var message = document.createElement("textarea");
  message.setAttribute("id", "message");
  message.setAttribute("name", "message");
  message.setAttribute("placeholder", "Send Message");

  // Create a submit button
  var submit = document.createElement("input");
  submit.setAttribute("type", "submit");
  submit.setAttribute("id", "submit");
  submit.setAttribute("value", "Send Message");

  // Create line break
  var linebreak = document.createElement("br");

  // Append the email input to the form
  // form.appendChild(labelTo);
  form.appendChild(email);

  // Append the subject input to the form
  // form.appendChild(labelSubject);
  form.appendChild(subject);

  // Append the message to the form
  // form.appendChild(labelMessage);
  form.appendChild(message);
  // Insert a line break
  form.appendChild(linebreak);

  // Append the submit button to the form
  form.appendChild(submit);

  document.getElementsByTagName("body")[0].appendChild(form);

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const message = {
      email: document.getElementById("emailC").value,
      subject: document.getElementById("subjectC").value,
      body: document.getElementById("message").value,
    };

    fetch("https://shazzle-api.herokuapp.com/api/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(message),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          console.log("data success: ", data);
        } else {
          console.log("data failed: ", data);
          console.log(message);
        }
      });
  });
});
