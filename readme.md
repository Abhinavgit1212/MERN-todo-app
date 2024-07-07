## TO DO APPLICATION

##Frontend: React
##Backend: Node Express
##deployment: Render+Netify

Build a simple CRUD TO-DO Application, with the following features

- Create a TODO
- Read a TODO
- Update a TODO
- Delete a TODO

// Starting with a project its always a good idea to first create the backend then the front end

// Step1: Initialise a node project to put a packagejson file in the bcakend folder, run npm init and fill the details then run npm install express, this should create a package.json file with exprress as a dependency, similarly you can have other dependencies(libraies) installed for your project using npm install <>

//note installing express installs many other dependencies other than express which are used by express (in the node_modules folder)

//note: what is the significance of package.json? these dependencies are very heavy size wise, even having just express as a dependency is huge but we only need these dependencies when actually running the project, so under the dependencies section in the package.json file we have all the dependencies needed to run the project. Now if someone clones your project locally all they have to do is run "npm install" only and all the dependencies listed under the dependencies section in the package.json file gets loaded in their project! You dont have to send them the node moudles folder!

//then you start with the index.js file create the skeleton for routes, then add authentication if any, then use zod for validation by creating types.js and importing its schema to validate inputs, then we create a db.js (run npm install mongoose before)

//initialising frontend [55:20 timestamp]

/\*PS C:\Users\lenovo\Desktop\TO DO APP> npm create vite@latest
Need to install the following packages:
create-vite@5.3.0
Ok to proceed? (y) y
√ Project name: ... frontend
√ Select a framework: » React
√ Select a variant: » JavaScript

Scaffolding project in C:\Users\lenovo\Desktop\TO DO APP\frontend...

Done. Now run:

cd frontend
npm install
npm run dev \*/

// run npm install in the forntend to get all the dependencies for frontend in the forntend folder

// go to app.jsx in src and remove everything in return to just <div>
hi there
</div>
// and completely empty index.jss and app.jss and run npm run dev, now hit localhost:<whatever number vite says in the terminal>

//create a frontend components folder in src, isnide it create createTodo.jsx make sure it ends with jsx and c is small!


to run frontend npm run dev
to run backend node index.js

load http://localhost:5173/admin

// run npm install cors in the backend folder
