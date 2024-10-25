# Starterfile frontend and backend

A short description of our project.

This is a starterfile for a web apllication involving Frontend and Backend.
Everything is explained in the comments and if you want to add more sections, please do so after the existing ones.

## Up & running (optional)

### Prerequisites

- [Node.js](https://nodejs.org/) (ensure npm is installed with it)
- [Visual Studio Code](https://code.visualstudio.com/)
- [Live Server extension by Ritwick Dey](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) (for frontend testing)

### to run the project

- open the project in visual studio code
- open the terminal
- in terminal type cd BACKEND
- type npm init -y
- type npm install express cors dotenv mongodb
- then type node index.js
- if you see Server running on port http://localhost:3000 that means your backend is running (BACKEND)
- then click on go live (at the bottom of your window) to see the website in your browser (FRONTEND)

.env file

- the .env file is a template for you to change
- after you used the template be sure to write .env in the .gitignore file so that github cannot read the info in it

### to test here are the routes for BACKEND

Base URL: http://localhost:3000/

- GET /api/get: Retrieve data.
- POST /api/post: Create new data.
  Body: { "key": "value" }
- PUT /api/put: Update existing data.
  Body: { "key": "value" }
- PATCH /api/patch: Partially update data.
  Body: { "key": "value" }
- DELETE /api/delete: Remove data.

Use Postman or a similar tool to test the API endpoints.

## Sources

For Frontend:

- [Chatgpt.com](https://chatgpt.com/share/670d20af-3ef8-8007-b100-ac8144208f55) used to help making sure the frontend works correctly

For Backend:

- [Chatgpt.com](https://chatgpt.com/share/66ffaef7-17c4-800e-b6ab-32f50a27c564) used for inspiration and help in BACKEND:index.js
- [Chatgpt.com](https://chatgpt.com/share/670bd2d8-76f0-800e-a2f2-a48484034412) used to fix errors in BACKEND/index.js
- [Chatgpt.com](https://chatgpt.com/share/671b89f7-084c-800e-84de-144c8840395d) used to make folder structure better, add a dummy code and help with git branches and commits
