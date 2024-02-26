# NodeJS Basics Project

## Overview
This project focuses on developing fundamental skills in NodeJS and ExpressJS for backend development. The curriculum covers topics such as basic JavaScript, ES6, NodeJS, ExpressJS, and handling HTTP requests. The project is designed to be completed within a specified timeframe, with a set of tasks aimed at building practical experience.

## Curriculum Details
- **Short Specializations**: NodeJS Basics
- **Back-end Technologies Covered**: JavaScript, ES6, NodeJS, ExpressJS
- **Instructor**: Johann Kerbrat, Engineering Manager at Uber Works
- **Weight**: 1
- **Project Duration**: February 26, 2024, 6:00 AM - February 28, 2024, 6:00 AM
- **Checker Release**: February 26, 2024, 6:00 PM
- **Auto Review**: Automated review at the project deadline

## Learning Objectives
Upon completion of this project, participants are expected to be able to:
- Run JavaScript using NodeJS
- Use NodeJS modules
- Utilize specific NodeJS modules to read files
- Access command line arguments and environment variables using the process
- Create a small HTTP server using NodeJS
- Create a small HTTP server using ExpressJS
- Implement advanced routes with ExpressJS
- Use ES6 with NodeJS using Babel-node
- Enhance development speed using Nodemon

## Resources
Participants are advised to read or watch the following resources:
- [Node JS getting started](link_to_node_getting_started)
- [Process API documentation](link_to_process_api_doc)
- [Child process documentation](link_to_child_process)
- [Express getting started](link_to_express_getting_started)
- [Mocha documentation](link_to_mocha_doc)
- [Nodemon documentation](link_to_nodemon_doc)

## Project Structure
The project is organized into directories and files as follows:

### 0x05-Node_JS_basic
- **0-console.js**: Implementation of basic JavaScript execution with NodeJS.
- **1-stdin.js**: Program accepting user input via command line and displaying messages accordingly.
- **2-read_file.js**: Function to read a file synchronously and display information about students.
- **3-read_file_async.js**: Function to read a file asynchronously and display information about students.
- **4-http.js**: Implementation of a small HTTP server using Node's HTTP module.
- **5-http.js**: Implementation of a more complex HTTP server using Node's HTTP module.
- **6-http_express.js**: Small HTTP server using Express.
- **7-http_express.js**: More complex HTTP server using Express.

### Full Server Implementation
- **full_server/utils.js**: Utility function to read the database asynchronously.
- **full_server/controllers/AppController.js**: AppController class with a static method to handle the homepage.
- **full_server/controllers/StudentsController.js**: StudentsController class with static methods to handle student-related requests.
- **full_server/routes/index.js**: Routing configuration linking routes to controllers.
- **full_server/server.js**: Express server implementation using the configured routes.

## Project Requirements
- **Allowed Editors**: vi, vim, emacs, Visual Studio Code
- **Node Version**: 12.x.x
- **Testing**: Jest, npm run test
- **Linting**: ESLint, npm run full-test
- **Code Format**: .js extension for code files
- **Function/Class Export**: module.exports = myFunction;

## How to Run
1. Clone the GitHub repository: [alx-backend-javascript](link_to_repository)
2. Navigate to the project directory: `0x05-Node_JS_basic`
3. Run `npm install` to install the required dependencies.
4. Execute tasks as specified in each file's instructions.
5. Test the code using `npm run test`.
6. Ensure linting passes using `npm run full-test`.

## Additional Notes
- The project includes provided files such as `database.csv`, `package.json`, `babel.config.js`, `.eslintrc.js`, etc.
- Participants should follow the instructions in each task and adhere to the specified file structure.
- For the full server implementation, make sure to follow the instructions for organizing the structure, creating controllers, routes, and server.

## Copyright
© 2024 ALX, All rights reserved.