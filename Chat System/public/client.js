// Establish a WebSocket connection to the server using the 'io()' function
const socket = io();

// Add an event listener to the HTML form that triggers when it is submitted
document.querySelector('form').addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent the default form submission behavior

    // Get the message input element from the HTML
    const messageInput = document.getElementById('input');

    // Retrieve the message text from the input element
    const message = messageInput.value;

    // Check if the message is not empty or contains only whitespace
    if (message.trim() !== '') {
        // Emit a 'chat message' event to the server with the message data
        socket.emit('chat message', message);

        // Clear the message input field
        messageInput.value = '';
    }
});

// Listen for incoming 'chat message' events from the server
socket.on('chat message', (msg) => {
    // Get the element that will display the chat messages
    const messages = document.getElementById('messages');

    // Create a new list item (HTML <li>) to display the received message
    const li = document.createElement('li');

    // Set the text content of the list item to the received message
    li.textContent = msg;

    // Append the list item to the chat messages container
    messages.appendChild(li);
});
