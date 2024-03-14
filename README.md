# -Event-Planning-Application

About the App:
The Event Planning Application allows users to create, manage, and view events. Users can create events with details such as date, location, and description. They can also view upcoming and past events, update event information, and delete events they have created.

Running the App Locally:
To run the application locally, follow these steps:

Clone the repository to your local machine.
Navigate to the project directory.
Install dependencies by running npm install.
Start the server by running node app.js or npm start.
Open your web browser and go to http://localhost:3000 to access the application.
Application Dependencies:
Express.js
Pug
Other dependencies specified in package.json
Links:
GitHub Repository
Hosted Application
Project Structure:
/web-application-root
  - app.js
  - package.json
  - .gitignore
/public
  /images
  /javascripts
  /styles
    - style.css
/routes
  - index.js
  /users
    - index.js
/views
  - index.pug
  - layout.pug
/controllers
  - index.js
  /users
    - index.js
/services
  - index.js
  /users
    - index.js
The project structure follows the recommended layout with separate directories for routes, views, controllers, and services. The public directory contains client-side assets, while the views directory contains Pug templates for rendering views. Route handling, controller logic, and service layer logic are organized into their respective directories for better maintainability and organization.
