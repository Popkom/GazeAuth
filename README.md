# GazeAuth - Group M

## Application Overview

GazeAuth is a new system, designed to be an easier alternative to traditional CAPTCHA systems. In GazeAuth, a Gaze needs to be detected through the in-built camera to allow users to input their password. For testing purposes, the default correct password is `1563`. This is a React Application, therefore the main code that we have written can be found in `/src/App.js` and `/src/numpad.js`

## Quick-Start Instructions

To run the project, navigate to the root directory (e.g. /GazeAuth), open a terminal, and install the dependencies using `npm i`

After the dependencies have been installed, you can run the application using `npm start`

This will open up a browser window, where you'll be asked for camera permissions. This is essential for the Gaze Detection Library to work.

## Gaze Detection Library

For this project, we have used WebGazer.js, created by students at Brown University, US. 

More information can be found at `https://webgazer.cs.brown.edu/`