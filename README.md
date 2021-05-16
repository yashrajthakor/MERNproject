# MERNproject
* M : MongoDB
* E : ExpressJs
* R : ReactJs
* N : NodeJs

## Server side coding:
Starting with NodeJS , framework is ExpressJS.
* Routing
* Using Nodemon (Globally)

## Connect(Backend to Database) mongoDB Atlas with NodeJs Using Mongoose(10/05/2021) 
* Create account on Mongodb
* create project
* Build cluster
* collection:
	=> create database
	=> create collection	
* connect to cluster
* connect your application:
	=> Add your connection string into your application code:
	'mongodb+srv://username:password@cluster0.ckaho.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
* npm i mongoose
* Network access: Add IP address

### npm i dotenv
### creating mongoose : Schema , Model
## Storing the data in the online database by Express and mongoose
called post api from postman and fetch data on mongodb (totally handle from backend side)
* using promises(then/catch)  
* using async/await

### npm i bcrypt.js
password encrypted , and stored on database while register
also bcyrpt.compare to manage on login flow

## User Authentication using JWT & Stored Token In Mongodb
npm i jsonwebtoken

## Client side (ReactJS project)
* npx create-react-app client
* npm i bootstrap
* npm i react-router-dom
* useState
## Connect React with NodeJS & MongoDB | Stored Registration Form Data in Database in MERN
degrade mongoose version to resolved proxy error ; 
set proxy on package.json
