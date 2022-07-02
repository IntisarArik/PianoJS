
# Piano JS

This simple virtual piano is made using object literals in javascript. This project is a practical example of alternatives to switch statements. Switch statement can be bug prone and violates the Open-Closed Principle. Object literal is one of the ways to replace switch statement in your project.


## How the piano works

Every sound data has been implemented in a key value pair object. Every key has the piano note class name and its value is an arrow function calling the sound data. 
Whenever a key is pressed, the sound linked with that key is played. 
