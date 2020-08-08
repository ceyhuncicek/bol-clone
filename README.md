This is a very very bad clone of popular e-commerce webpage bol.com. I just used some shapes and product links and built a working shopping cart.

## Requirements

NodeJS v10 or greater
npm v6 or greater

## Setup

```
git clone https://github.com/ceyhuncicek/react-bol-clone
cd bol-clone
npm install
```

## Setting up Firebase **(FREE)**

For authentication, firebase has been used. Firebase config took from .env file. Steps are here to create a firebase account and get config data. If you already have it, skip stepping 9.

1. Create a Gmail account. (if you don't have it)
2. Go to https://firebase.google.com/ login with the Gmail account and click on get started.
3. Put a project name and next, next for the rest.
4. Click on the project and go Authentication.
5. Click on set an Authentication way and enable email.
6. Your project name > project settings.
7. under "Firebase SDK snippet" select Config.
8. Here you have all the .env variable you need.
9. Create a .env file on the root.

```
   REACT_APP_FIREBASE_apiKey=**YOURKEY**
   REACT_APP_FIREBASE_authDomain=**YOURKEY**
   REACT_APP_FIREBASE_databaseURL=**YOURKEY**
   REACT_APP_FIREBASE_projectId=**YOURKEY**
   REACT_APP_FIREBASE_storageBucket=**YOURKEY**
   REACT_APP_FIREBASE_messagingSenderId=**YOURKEY**
   REACT_APP_FIREBASE_appId=**YOURKEY**
   REACT_APP_FIREBASE_measurementId=**YOURKEY**
```

10. Put your data at the correct place in the .env file.
11. That's all! Now Start the project.

## Start Project

```
npm run start
```

or

```
yarn start
```

## Technologies used

- create-react-app
- @material-ui
- react-router-dom
- firebase
