# webDevProject


# Real-Time Collaborative Whiteboard

A real-time collaborative whiteboard application built with Node.js, Express, and Socket.IO that allows multiple users to draw simultaneously.

## Features

- Real-time drawing collaboration
- Multiple drawing tools:
  - Pencil tool
  - Eraser tool
  - Color picker
  - Line width adjustment
- Clear canvas functionality
- Save drawing as PNG
- Responsive design

## Prerequisites

Before you begin, ensure you have installed:
- [Node.js](https://nodejs.org/) (v12 or higher)
- npm (comes with Node.js)


## Usage

1. Drawing:
   - Select the pencil tool to draw
   - Use the color picker to change drawing color
   - Adjust line width using the slider
   - Use the eraser tool to erase

2. Collaboration:
   - Share the URL with others to draw together
   - All connected users will see changes in real-time

3. Additional Features:
   - Click 'Clear' to erase the entire canvas
   - Click 'Save' to download the drawing as PNG
  
## Tech Stack

- Frontend:
  - HTML5 Canvas
  - JavaScript
  - Socket.IO Client

- Backend:
  - Node.js
  - Express
  - Socket.IO


## Dependencies

- express: ^4.18.2
- socket.io: ^4.7.2



## 🚀 Getting Started
Dear Sir,

To run this project locally, please follow these simple steps:

### Initialize the Project
First, we need to initialize the Node.js project and create the necessary configuration files:

bash
Initialize a new Node.js project
npm init -y


###  Install Required Dependencies
Install the necessary packages that power our whiteboard:

bash
Install Express and Socket.IO
npm install express socket.io


This command will automatically:
- Create `node_modules` folder
- Generate `package-lock.json`
- Update `package.json` with the required dependencies




###  Start the Server

bash
Run the server
node server.js


###  Access the Application
Open your web browser and visit the server link that is being showed in the terminal 2 times, do changes in the 1st tab and you'll notice that the changes you did are visible in the 2nd tab as well :)







