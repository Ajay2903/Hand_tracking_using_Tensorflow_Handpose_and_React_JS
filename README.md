# Handtracking using Tensorflow Javascript models and React.

This project is made using extensive use of tensorflow and react library for Javascript. The hand tracking model is deployed in the web browser using these extensions.

## React JS

React is javascript library that is used for building user interface for websites. The advantage of using react is that it helps in creating complex UI by combining isolated pieces of code called components. This makes the UI simple and efficient. React helps in changing and re-rendering components on change of data.

![React](https://user-images.githubusercontent.com/78751003/119483887-14a24680-bd73-11eb-92fa-10da7c6f25bd.PNG)

https://reactjs.org/

## Tensorflow Javascript models

Tensorflow.js is an open source library by google that helps in deploying machine learning onto a web browser. Javascript which is used widely in web development can also train, test, or run existing ML models thanks to tensorflow. Another added advantage of Tensorflow.js, is that it contains a number of pre trained models that can be used in a website with a few lines of code, eliminating the need or resourses and time for training ML model.

![Tensorflow](https://user-images.githubusercontent.com/78751003/119484586-cc375880-bd73-11eb-84a2-da09e42224c1.PNG)

https://www.tensorflow.org/js

# Creating a React Enviroment
![image](https://user-images.githubusercontent.com/78751003/120310161-b4bc1a80-c2f3-11eb-80ff-021e1f18edbb.png)
The create-react-app command is a one step solution in creating a single page react working enviroment.It creates a frontend build pipeline, to use it with any backend. Under the hood, it uses Babel and webpack.


# Working on App.js file
App.js created during the react enviroment will hold the main structure of the app. It therefore requires all the required dependencies of tensorflow and react library.

![image](https://user-images.githubusercontent.com/78751003/120310876-7c690c00-c2f4-11eb-85e3-d63e509bf454.png)

The App.css is a seperate file for css styling. tensorflows hand-pose model is used in the project. React is imported for obvious reasons. The webcam component of the react app is is imported to interface with webcam needed for the project. The utilities.js file is another key component of the project. It draws the hand of the user using the key hand points that are detected by the tensorflow handpose model.


