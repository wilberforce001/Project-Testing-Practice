Project: Testing Practice

The objective of this project was to learn how to test code in while working on a project to ensure that it works as expected even under different conditions.
Testing is important in achieving the following;
    1. Ensuring code quality
    2. Facilitating refactoring
    3. Facilitates achievement of executable documentation
    4. Prevents regression i.e. prevents unintended changes in behaviour that happe in modification of existing code.
    5. Gives confidence in deployments
    6. Promotes modular design

The project started as follows;

I initialized the project by running npm init -y to create 'package.json' with default settings

I then installed Webpack and Webpack CLI as developement dependencies by running the following code: npm install webpack webpack-cli --save-dev

The next step was to create a Webpack configuration file 'webpack.config.js' which defines how webpack bundles the assets of the project

Installed Babel and necessary presets as dev dependencies

Wrote describe function in my test file that performs what is expected such as capitalization, reversing of strings etc. 

Created a calculator object that contains functions for the basic operations such as add, subtract, divide, and multiply. Each of the functions should take two numbers and return the correct calculation.

Created a caesarCipher function that takes a string and a shift factor and returns it with each character “shifted”. 

Created an analyzeArray function that takes an array of numbers and returns an object with the follwing properties: average, min, max, and length. 
