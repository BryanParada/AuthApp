# AuthApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.7.

![image](https://user-images.githubusercontent.com/51382458/200377969-61c242f1-bd3a-455b-8ba6-aefc94e452c9.png)

## Live Demo

https://node-angular-login.herokuapp.com/auth/login

## Features

* Sign up
* Login
* Log out

## What did i use in this app?

* Connecting an Angular project with a backend server
* JWT
* Lazyload and routes
* Guards
* Keeping the state of a logged user
* Errors management
* RXJS Operators
* SweetAlert
* Deploying the production build into Heroku

## How to use?

Clone/Download this project, run the commands "npm install" and "ng serve -o" to open the app.
Download the DB from my other project: https://github.com/BryanParada/AuthBackend

To run this db is required to install Json Server via npm with the next command:

npm install -g json-server

to start Json Server:

json-server --watch db.json

more info at: 
https://www.npmjs.com/package/json-server

## Built with

* ![Angular][Angular.io]
* ![TypeScript][TypeScript.io]
* ![Bootstrap][Bootstrap.io] 
* ![Nodejs][nodejs.io]  


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

[Angular.io]: https://img.shields.io/badge/-Angular-red
[TypeScript.io]: https://img.shields.io/badge/-TypeScript-blue
[Bootstrap.io]: https://img.shields.io/badge/-Bootstrap%205-blueviolet 
[nodejs.io]: https://img.shields.io/badge/-Node.js-brightgreen
