const socket = io();

const chatBox = document.getElementById('chat-box');
const userInput = document.getElementById('user-input');
const usernameInput = document.getElementById('username-input');
const sendButton = document.getElementById('sendButton');

sendButton.addEventListener('click', () => {
    const message = userInput.value;
    const username = usernameInput.value;
    if (message.trim() !== '' && username.trim() !== '') {
        socket.emit('chat message', { username, message });
        userInput.value = '';
    }
});

socket.on('chat message', ({ username, message }) => {
    const messageElement = document.createElement('div');
    messageElement.textContent = `${username}: ${message}`;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight;
});
