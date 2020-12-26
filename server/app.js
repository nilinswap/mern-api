// Import all dependencies & middleware here
import express from 'express';

import bodyParser from 'body-parser';
import mongoose from 'mongoose';


import { 
    userController,
 } from './controller';



// Init an Express App. This later starts a server and put all dependencies into your project to use
const app = express();

// Use your dependencies here
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/', userController);

// Start Anything here
const dbport=27017;
app.listen(8080, () => {
   console.log('Example app listening on port 8080!');
   console.log(`Started successfully server at port ${dbport}`);
   mongoose.connect('mongodb://localhost/test').then(() => {
      console.log(`Conneted to mongoDB at port 27017`);
   });
});

