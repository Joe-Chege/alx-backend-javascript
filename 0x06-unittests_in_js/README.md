# Project README: Unit Tests in JavaScript

## Project Overview

This project focuses on unit testing in JavaScript, specifically using Mocha as the testing framework and Chai for assertions. The project is designed to be completed within a specified time frame and includes tasks related to writing tests for JavaScript functions, using spies, stubs, hooks, and conducting integration testing.
## Learning Objectives

Upon completing this project, you should be able to explain the following concepts without the help of external resources:

1. How to use Mocha to write a test suite.
2. Utilizing different assertion libraries (Node assert or Chai).
3. Presenting long test suites effectively.
4. Understanding and applying spies in testing.
5. Understanding and applying stubs in testing.
6. Knowledge of hooks and when to use them.
7. Unit testing asynchronous functions.
8. Writing integration tests with a small Node server.

## Resources

To successfully complete this project, it is essential to read or watch the following resources:

- [Mocha Documentation](https://mochajs.org/)
- [Chai Documentation](https://www.chaijs.com/)
- [Sinon Documentation](https://sinonjs.org/)
- [Express Documentation](https://expressjs.com/)
- [Request Library](https://www.npmjs.com/package/request)
- [How to Test NodeJS Apps using Mocha, Chai, and SinonJS](#) (Link not provided)

## Requirements

1. **Development Environment:**
   - All code execution will be on Ubuntu 18.04 using Node 12.x.x.
   - Allowed editors: vi, vim, emacs, Visual Studio Code.
   - All files should end with a new line.

2. **Code Structure:**
   - Each task should have its own directory within the project.
   - Code files should use the .js extension.

3. **README.md File:**
   - A `README.md` file at the root of the project folder is mandatory.

4. **File Extensions:**
   - All code should use the `.js` extension.

5. **Running Tests:**
   - When running tests with `npm run test *.test.js`, everything should pass correctly without any warnings or errors.

## Tasks

### 0. Basic Test with Mocha and Node Assertion Library

**Description:**
- Install Mocha using npm.
- Set up a script in your `package.json` to quickly run Mocha using `npm test`.
- Create a function named `calculateNumber` that accepts two arguments, rounds them, and returns the sum.
- Write test cases for the function.

**Requirements:**
- Use the Node assert library.
- Tests should be in a separate file (`0-calcul.test.js`).
- You should be able to run the test suite using `npm test 0-calcul.test.js`.

### 1. Combining Descriptions

**Description:**
- Upgrade the function created in Task 0 (`calculateNumber`).
- Add a new argument named `type` to the function (SUM, SUBTRACT, or DIVIDE).
- Implement functionality based on the `type` argument.
- Write test cases for the updated function.

**Requirements:**
- Use the Node assert library.
- Tests should be in a separate file (`1-calcul.test.js`).
- You should be able to run the test suite using `npm test 1-calcul.test.js`.

### 2. Basic Test Using Chai Assertion Library

**Description:**
- Install Chai with npm.
- Copy the files from Task 1 (`1-calcul.js` and `1-calcul.test.js`) to new files (`2-calcul_chai.js` and `2-calcul_chai.test.js`).
- Rewrite the test suite using Chai's `expect`.

**Requirements:**
- You should be able to run the test suite using `npm test 2-calcul_chai.test.js`.

### 3. Spies

**Description:**
- Install Sinon with npm.
- Create a module (`utils.js`) with a property (`calculateNumber`) that uses the function from Task 1.
- Create a new function (`sendPaymentRequestToApi`) that calls `calculateNumber` and displays the result.
- Write tests using Sinon to validate the usage of `calculateNumber` in `sendPaymentRequestToApi`.

**Requirements:**
- You should be able to run the test suite using `npm test 3-payment.test.js`.
- Use a spy to complete this exercise.

### 4. Stubs

**Description:**
- Create a new file (`4-payment.js`) and copy the code from Task 3 (`3-payment.js`).
- Create a new file (`4-payment.test.js`) and copy the code from Task 3 (`3-payment.test.js`).
- Stub the function `calculateNumber` to always return the same number.
- Verify that the stub is being called with specific arguments.

**Requirements:**
- You should be able to run the test suite using `npm test 4-payment.test.js`.
- Use a stub to complete this exercise.

### 5. Hooks

**Description:**
- Copy the code from Task 4 (`4-payment.js`) to a new file (`5-payment.js`).
- Create a new file (`5-payment.test.js`).
- Use one spy to verify specific console log outputs in two test cases.
- Utilize `beforeEach` and `afterEach` hooks.

**Requirements:**
- You should be able to run the test suite using `npm test 5-payment.test.js`.
- Use one spy and hooks to complete this exercise.

### 6. Async Tests with `done`

**Description:**
- Create a new file (`6-payment_token.js`) with a function (`getPaymentTokenFromAPI`) that returns a promise based on a boolean argument.
- Write a test suite (`6-payment_token.test.js`) for the asynchronous function.
- Use the `done` callback to ensure proper test execution.

**Requirements:**
- You should be able to run the test suite using `npm test 6-payment_token.test.js`.
- Use the `done` callback to complete this exercise.

### 7. Skip

**Description:**
- Use the provided file (`7-skip.test.js`) and make the test suite pass without fixing or removing the failing test.
- Maintain the original description of the failing test.

**Requirements:**
- You should be able to run the test suite using `npm test 7-skip.test.js`.
- Make the suite pass without fixing the failing test.

### 8. Basic Integration Testing

**Description:**
- Create a new folder (`8-api`) with the provided `package.json`, `

api.js`, and `api.test.js`.
- Implement an Express server that listens on port 7865.
- Add a route (`GET /`) that returns a welcome message.

**Requirements:**
- You should be able to run the test suite using `npm test api.test.js`.
- Every test should pass without any warnings.

### 9. Regex Integration Testing

**Description:**
- Reuse the project in `8-api` for this task.
- Modify the `api.js` file to add a new endpoint (`GET /cart/:id`) with number validation.
- Write test cases in `api.test.js` for the new endpoint with correct and incorrect inputs.

**Requirements:**
- You should be able to run the test suite using `npm test api.test.js`.
- Every test should pass without any warning.

### 10. Deep Equality & Post Integration Testing

**Description:**
- Reuse the project in `9-api` for this task.
- Modify the `api.js` file to add two new endpoints (`GET /available_payments` and `POST /login`).
- Write test suites in `api.test.js` for both endpoints.

**Requirements:**
- You should be able to run the test suite using `npm test api.test.js`.
- Every test should pass without any warning.
- The server should not display any errors.

## Copyright

Copyright © 2024 ALX, All rights reserved.