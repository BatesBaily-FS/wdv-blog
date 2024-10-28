# A Tutorial on : Building a RESTful API

Creating an API is a powerful way to enable communication between software applications, allowing for seamless intergration and interaction. APIs allow developers to leverage existing functionalities and build creative solutions effeciently. In this post, we'll be exploring the key steps to building a RESTFUL API, from setting up your server to establishing endpoints, ensuring that you have all the tools you need to elevate your applications capabilities.

![Creating RESTful API](../components/rest-api.avif)

## Choose Your Technology Stack

Choose your Technology stack is an important part of the process and one that is subjective to the goal of your application and your preferences. For this stack you will need to choose a Framework, Database, and Enviroment.

### Framework

Popular choices for Frameworks include Express.js (Node.js), Flask (Python), or Django (Python).

### Database

Popular choices for Databases include MongoDB, MySQL, or PostgreSQL.

### Enviroment

Popular run-time enviroment options are Node.js, Python, etc.

## Set Up Your Project

For this project a new project directory will be neccassry, create one. Cd into your new directory and initalize it. From there begin installing all necessary packages for example Express using "npm install express"

## Create the Server

Begin by creating a new file for your Server, following standard naming conventions name it "server.js". Now on to the file setup, establish a require statement for using express, define app = express(), establish a PORT number, and add a middleware to parse JSON. Here is an example of what a basic Express server file may look like:

const express = require('express);
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.listen(PORT => {
console.log(`Server is running on ${PORT}`);
});

## Define Routes

Now to setup Routes which will help us naviagte through our application. Routes determine how your application responds to various HTTP requests. Being familar with HTTP methods is important, these methods are GET, POST, PUT, and DELETE. GET for retrieving data, POST for creating, PUT for updating, and DELETE for removing. For establishing routes GET routes will be for retrieving items for the database and POST request will be for creating new items in the database. An basic example of this looks like:

app.get('/api/items', (req, res) => {
const items = [];
res.json(items);
});

app.post('/api/items', (req, res) => {
const newItem = req.body;
res.status(201).json(newItem)
})

## Connect to a Database

Use a database client to connect your database and perform CRUD operations. For example if your database of choice is MongoDB, install mongoose and set up connection. An example of what this might look like:

const mongoose = require('mongoose');
mongoose.connect('mongod://localhost/mydatabase', {useNewUrlParser: true, useUnifiedTopolgy: true });

## Test Your API

There are tools available like Postman or curl to test your API endpoints. Personally, I find Postman very helpful and is friendly for new developers. Ensure that all of your routes return the expected result.

## Documentation

Document your API endpoints using a tool like Swagger or Postman.

## Deployment

Deploy your API to a hosting service like Heroku, Vercel, or AWS when it is ready.

## Conclusion

Building a RESTful API involves setting up a server, defing routes, connecting to a database, and testing your endpoints. Once finished, you can document and deploy your API for use. I hope you enjoyed this tutorial and learned something new!
