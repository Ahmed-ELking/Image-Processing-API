# Image Processing API

## Overview
This application runs a simple node.js server and offers a REST endpoint to serve images read and write to disk via a Node.js express server rather than a database.

## Getting Started

1. **Initialize project**

   - I add required dependencies for this project, including Express, TypeScript, Jasmine, Eslint,Prettier and add scripts to package.json.
2. **Set up project structure**
   - I create a very useful structure that make the functionality in separate files , the routes 
     server file and utilities.
   
3. **middleware and dependencies**

   - I included some middleware in this project and other tools shown below.

## Installation Instructions
This section contains all the packages used in this project and how to install them.

1. Clone the project to your local machine:

```
$ git clone https://github.com/Ahmed-ELking/Image-Processing-API.git
```

2. Open the project

```
$ cd Image-Processing-API
```

3. To install all packages:

```
 $ npm install
```
### Tools
- Typescript
- Sharp package
- ESLint
- Nodemon
- fs module
- jasmine
- supertest
- morgan 
- path

### Start App

```
$ npm run start
```

### Building

to transbile the typescripts files to js files in build file

```
$ npm run build
```
### Testing

1. unit tests.
2. End-point tests.

* Run test with
```
$ npm run test
```

### Formatting & Linting

```
$ npm run prettier
```

```
$ npm run lint  
```
### Provided endpoint
After installing the dependencies, building and executing the project, the endpoint will be available as demonstrated below:

### Path

1. Getting the original image with
   - http://localhost:5000/api/images?name=<imagename>&width=<w>&height=<h>
2. Getting the same image with custom dimensions 
   - http://localhost:5000/api/images?name=fjord&width=100&height=100
3. Store the resized image in [thump folder](./images/thumb) file system.

## References
- [Image Optimization with NodeJS using Sharp](https://youtu.be/js_2iTLQFvI)
- [MDN Web Docs](https://developer.mozilla.org/en-US/)
- [How To Work with Files using the fs Module in Node.js](https://www.digitalocean.com) 
- [typescript docs](https://www.typescripttutorial.net/)
- [Express middleware: A complete guide](https://blog.logrocket.com/) 
- [Mohammed Elzanaty](https://www.yonisfy.com/)