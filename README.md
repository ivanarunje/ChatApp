# React Chat App

This is a chat application built with React that allows users to join different chat rooms and communicate with other members using the Scaledrone chat service.

## Features

Home: The landing page of the application provides an overview of the chat app and offers options to log in.

Login: The login form allows users to enter their username and choose a chat room to join. If the validation is successful, the user is redirected to the ChatRoom component.

ChatRoom: This component displays the active members in the room and the messages exchanged between them. Each member is assigned a random color for identification. The list of active members is dynamically updated when a member joins or leaves the room. The messages are displayed in a chronological order in a message container, showing the name of the user who sent the message and the timestamp of when it was sent. 

Not Found: This component is displayed when a user accesses an invalid or non-existent page. It provides a friendly message and includes a button to redirect the user back to the home page.

## Installation

1. Clone the repository
2. Navigate to the folder
3. Install dependencies: npm install
4. Set up the Scaledrone channel ID: 
    - Create a new account on Scaledrone at https://www.scaledrone.com/
    - Save your Scaledrone channel ID
    - Create a new file named .env in the root directory of the project
    - Add next line in the created file: REACT_APP_CHANNEL_ID=<YOUR_CHANNEL_ID>
5. Run application with npm start
6. Open http://localhost:3000 in your web browser
