# msgrtestbot

- This is a simple nodejs chatbot using Visual Studio Code IDE and Facebook Messenger Platform
- The chatbot is deployed in Heroku
- The project is using express framework

## Setup 
### 1. Clone the project
- Make sure you have a nodejs and git installed in the machine
- In your terminal type command npm init to initialise the project
- Fill in the required fields, make sure you do not change the entry point. 
  The default entry point is index.js
- After filling up the fields, in your terminal type "npm install --save express dotenv ejs body-parser"
- This will install express framework. EJS for view engine. And body-parser to get data from front-end to back-end
- Create a .env file. This is where you are going to store your variables such as your verify token.

### 2. Create a Heroku app, facebook page, and a facebook app

#### 2.1 Create a Heroku app
- Register to https://heroku.com/
- Create your application
- If you have a github repository, just link the repository to heroku. If none, you can use heroku as your repository.
- Deploy your app to heroku
- Config your variables to heroku. Since the .env variables is not pushed, this will enable the project to make use of the variables being used by the project

#### 2.2 Facebook page
- Create a facebook page

#### 2.3 Facebook app
- Log your developer account or account used to create the page
- Follow the docs on how to config the webhook https://developers.facebook.com/docs/messenger-platform/getting-started/webhook-setup
