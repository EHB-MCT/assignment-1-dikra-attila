# Starterfile frontend and backend

A short description of our project.

This is a starterfile for coding project involving Frontend and Backend.
Everything is explained in the comments and if you want to add more sections, please do so after the existing ones.

## Up & running (optional)

to run the project

- open the project in visual studio code
- open the terminal
- in terminal type cd BACKEND
- type npm init -y
- type npm install express cors dotenv mongodb
- then type node index.js
- if you see Server running on port http://localhost:3000 that means your backend is running
- then click on go live to see the website in your browser

.gitignore

- create a .gitignore file in the folder BACKEND
- Type this in the file:

package.json
package-lock.json
node_modules

- this will make sure that thes files are not picked up un github

.env file

- the .env file is a template for you to change
- after you used the template be sure to write .env in the .gitignore file

to test here are the routes for BACKEND

- http://localhost:3000/
- http://localhost:3000/api/get

Testing in postman

- POST body :{ "key": "value" } http://localhost:3000/api/post
- PUT body :{ "key": "value" } http://localhost:3000/api/put
- PACTH body :{ "key": "value" } http://localhost:3000/api/patch
- DELETE http://localhost:3000/api/delete

## Sources

For Frontend:

- [Chatgpt.com](https://chatgpt.com/share/670d20af-3ef8-8007-b100-ac8144208f55) used to help making sure the frontend works correctly

For Backend:

- [Chatgpt.com](https://chatgpt.com/share/66ffaef7-17c4-800e-b6ab-32f50a27c564) used for inspiration and help in BACKEND:index.js
- [Chatgpt.com](https://chatgpt.com/share/670bd2d8-76f0-800e-a2f2-a48484034412) used to fix errors in BACKEND/index.js
