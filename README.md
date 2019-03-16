CinaFlix Meeting Minutes is a notes application that can be leveraged to record, review and delete meeting minutes in one place for future releases of the existing CinaFlix Project 2 Application. 

The meeting minutes application allows users to collaboratively capture meeting minutes in one place. Users will have the ability to do the following:

1. Login to the application with the credentials provided by the Admin User
2. Access the Meeting Minutes page for the specified release and review previous meeting minutes
3. Enter and store new meeting minutes, which will be stored in MongoDB
4. Delete incorrect notes from the UI which will result in removing all information for that particular meeting from the database in mongo. 
5. Logout from the application. 

The following technologies, frameworks and libraries are used:
1. Express.js 
2. Node.js
3. React
4. Mongod
5. MongoLab add-on
5. Bootstrap 
6. Heroku
7. Okta User Authentication


#####Note: 
Currently, this app is non-functional due to issues in consolidating the user authentication and meeting minutes components of the app.

Below the links to the all individual functional apps on Heroku:

##Deployed # Project3_User_Authentication app on Heroku:
https://obscure-dusk-50431.herokuapp.com/

##Deployed Meeting Minutes app excluding user authentication on Heroku:

Below the links to the non-functional consolidated final app on Heroku:

##Deployed Final App (Inlcuding Project3_User_Authentication + Meeting Minutes app) with a bug on Heroku:

https://dry-spire-11344.herokuapp.com/








