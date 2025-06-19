// Function to toggle the visibility of the chat body
function toggleChat() {
  const chatWidget = document.getElementById('chat-widget');
  // Toggle the 'active' class on the chat-widget
  // The CSS will handle showing/hiding the chat-body based on this class
  chatWidget.classList.toggle('active');
}

// Function to display a custom message box instead of alert()
function showMessageBox(message) {
  // Create a new div element for the message box
  const messageBox = document.createElement('div');
  messageBox.id = 'customMessageBox';
  messageBox.style.cssText = `
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 20px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    z-index: 10000; /* Ensure it's above other elements */
    text-align: center;
    font-family: Arial, sans-serif;
    color: #333;
    max-width: 300px;
  `;

  // Create paragraph for the message text
  const messageText = document.createElement('p');
  messageText.textContent = message;
  messageText.style.marginBottom = '15px';

  // Create a close button
  const closeButton = document.createElement('button');
  closeButton.textContent = 'OK';
  closeButton.style.cssText = `
    background-color: #25D366;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1rem;
    transition: background-color 0.3s ease;
  `;
  closeButton.onmouseover = () => closeButton.style.backgroundColor = '#1DA851';
  closeButton.onmouseout = () => closeButton.style.backgroundColor = '#25D366';
  closeButton.onclick = () => document.body.removeChild(messageBox); // Remove message box on click

  // Append elements to the message box
  messageBox.appendChild(messageText);
  messageBox.appendChild(closeButton);

  // Append the message box to the body
  document.body.appendChild(messageBox);
}


// Function to send the message to WhatsApp
function sendToWhatsApp() {
  const messageInput = document.getElementById('userMessage');
  const message = messageInput.value.trim();
  const phoneNumber = '2348000000000'; // Replace with your desired WhatsApp number, without the '+'

  if (message) {
    // Encode the message to ensure it's URL-safe
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank'); // Open WhatsApp in a new tab

    // Clear the input field after sending
    messageInput.value = '';
  } else {
    // Show custom message box if the message is empty
    showMessageBox("Please type a message first.");
  }
}
