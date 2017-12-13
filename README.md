# sign-in
CSC 583 final, a simple sign in application
by: Kevin Rau

## Nonfunctional Requirements

- The application shall allow users to sign in by providing:
  - Name
  - Email 
  - Telephone
  - Company
  - Official visit (checkbox)
  - Escort required (checkbox)
  - Escort name (if Escort is checked)
- The user shall recieve visual confirmation the the sign in was successful
- The application shall provide 2 user interfaces. One UI shall be displayed on a tablet for users sign in and one UI for the desktop browser for an administrator to view.
- The administrator shall access the admin portal through the url/admin path
- The administrator shall be required to sign in prior to accessing admin portal
- The adminstrator login shall required a username and password
- The adminstrator portal shall display a list of all users that have logged in. If the number of users is greater than __ include subsequent pages to navigate.

## Installation Instructions

1. Install dependencies

$ npm install

2. launch front end

$ npm run dev

3. Launch backend

$ sudo service mongod start

$ nodemon ./server/index

## Architecture Discussion

The MEVN stack was chosen. Recent experience with MongoDB, Vuejs, nodejs and Express made this architecture the best choice. See  https://github.com/csudh/toro-net/wiki/non-functional-requirements for a more detailed analysis of tooling. 

## Plan of Action

[x] Tooling

[x] Create git repo with readme

[x] Ensure recent copies of nodejs and mongodb are installed

[x] Install vue-cli and initialize a project with webpack

[x] Create client-side

  - add vue components for sign-in and admin page
  
  - establish endpoints for post user and get users
  
[x] Create server-side API

  - establish connection with mongo DB
  
  - create Schema for user obj
  
  - establish endpoints 
  
[x] Deploy client and server in localhost and test endpoints

[] Add Additional features

  - [] Deploy
  
  - [x] Admin login
  
  - [] Admin table pagenation
  
[] Document project readme

