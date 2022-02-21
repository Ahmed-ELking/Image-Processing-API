# Image Processing API

# Overview
This application runs a simple node.js server and offers a REST endpoint to serve images read and write to disk via a Node.js express server rather than a database.

## Getting Started

1. **Initialize project.**

   - I add required dependencies for this project, including Express, TypeScript, Jasmine, Eslint, and Prettier.
     And add scripts to package.json.
2. **Set up your project structure.**
   - I create a very useful structure that make the functionality in separate files , the routes 
     server file and utilities.
   
3. **middleware and dependencies.**

   - I included some middleware in this project and other tools shown below ==>

# Tools
Typescript
Sharp package
ESLint
Nodemon
fs module
jasmine
supertest
morgan 
path

# Provided endpoint
After installing the dependencies, building and executing the project, the endpoint will be available as demonstrated below:

# Path
/api/images
- Getting the original image - http://localhost:5000/api/images?name=<imagename>&width=<w>&height=<h>
- Getting the same image with custom dimensions - http://localhost:5000/api/images?name=fjord&width=100&height=100
- Store the resized image in a file system.

# References
- https://youtu.be/js_2iTLQFvI "Image Optimization with NodeJS using Sharp".
- MDN Web Docs>
- https://www.digitalocean.com/ "How To Work with Files using the fs Module in Node.js".
- https://www.typescripttutorial/ "typescript docs".
- https://blog.logrocket.com/ "Express middleware: A complete guide".
- https://www.yonisfy.com/ " By Mohammed Elzanaty".