# Angular & Express Stack
> Made by Nicholas Ramsay

## Contents
1. Introduction
2. Getting started
3. Server scaffolding

## Introduction
This project is a general outline for the generation of my most recent projects. It includes an Angular front-end/client with routing capabilities which is then served via express which handles server routes such as `/admin'.

### Features
1. /admin route handled by express
2. /admin/docs will take you to a VuePress generated documentation page.
3. Angular front end with routing

### Potential improvements
1. Use a task runner such as Grunt to automate installing packages & building client as well as production and development scripts.
2. Use a backend framework to automate many processes (e.g. auth, hashing, etc). Frameworks being assessed are:
    * Express.js - This is the currently used framework, however other packages such as Seqelize.js and Passport.js can be used in addition.
    * Adonis.js
    * Nest.js - Similar to angular syntax e.g. Typescript
    * Sails.js - Very good CLI, good for MVC, compatible with all databases.
    * Feathers.js - Lightweight, just like express, however with some more tools and easier to learn than larger frameworks.

## Getting started
From the project root, and with angular-cli installed, use `npm run start-dev-first-time`, or for production `npm run start-prod-first-time`.

### Advanced setup
Once this project is forked you have two options:
1. Start working on the front-end and worry about building the backend later.
2. Prototype the full working project without the developed front-end.

#### Building the front-end
1. Run `cd client` to enter into the client directory.
2. Run `ng serve --open` to run the angular-cli development site (If angular-cli is not installed, install with `npm install -g @angular/cli`)
3. Now you can play around with the client/src folder to generate your front-end in Angular

#### Building the full project with server
If you look at the root package.json you can see a set of very useful scripts:

```json
...
    "install-wide": "...",
    "build-client": "...",
    "start-prod": "...",
    "start-prod-first-time": "...",
    "start-dev": "...",
    "start-dev-first-time": "..."
...
```

Most primarily, the `start-dev`(development) and `start-prod`(production) scripts with their respective `...-first-time` versions.

Both development and production start scripts will *successfully* run your server with certain configurations(see below) as long as:
1. All ./client npm packages are installed
2. All ./server npm packages are installed
3. The ./client has been built with `ng build --prod` and the built files are in ./client/dist/.

If none of these have been completed then the `-first-time` post-fix will automate this process. In particular, `start-prod-first-time` is a very useful script for running on a server/production environment for the first time

## Server scaffolding
Features currently NOT provided are authentification, authorisation, hashing
