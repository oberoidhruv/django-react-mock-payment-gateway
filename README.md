# django-react-mock-payment-gateway

This is a Mock Payment Gateway Interface using a Django Backend (with Django Rest Framework) and a React Frontend.

Usage as below:

![](usage.gif)


Installation can be done using the setup.sh (which will also download the repo)

## Linux, WSL and Mac:
Some basic instructions on how to install: (with pip3 installed)
- Copy setup.sh to a directory to host project
- run "source setup.sh" in a terminal window in the mentioned directory

This will start the Django backend server on 127.0.0.1:8000

## Windows:
- Install Linux (https://www.debian.org/releases/bullseye/installmanual)

# Note:
After the script runs, you will be required to open a second terminal window to run the React frontend. My approach was to create separate interfaces, running similar to a microservice architecture, communicating over Rest APIs.
To run the frontend, from the root of the project directory, type the following in the second terminal window:

- cd frontend/gui/
- npm start

You are required to have npm and node.js installed on your local machine.

The frontend server will run on 127.0.0.1:3000

I created some test entries with SuperUser access as an example. The superuser details are as follows:

Username: "user", Password: "potato123"
