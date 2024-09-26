// Initialize an array to store contacts
let contacts = [];

// Function to add a new contact
function addContact() {
  const name = document.getElementById('name').value;
  const phone = document.getElementById('phone').value;

  if (name === "" || phone === "") {
    alert("Please enter both name and phone number!");
    return;
  }

  const contact = { name, phone };

  // Add new contact to the contacts array
  contacts.push(contact);

  // Clear the input fields
  document.getElementById('name').value = "";
  document.getElementById('phone').value = "";

  // Update the display
  displayContacts();
}

// Function to display contacts in the table
function displayContacts() {
  const contactsList = document.getElementById('contactsList');
  contactsList.innerHTML = "";

  contacts.forEach((contact, index) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${contact.name}</td>
      <td>${contact.phone}</td>
      <td><button class="delete" onclick="deleteContact(${index})">Delete</button></td>
    `;
    contactsList.appendChild(row);
  });
}

// Function to delete a contact
function deleteContact(index) {
  contacts.splice(index, 1); // Remove contact from the array
  displayContacts(); // Update the display
}
