module.exports = {

    testEnvironment: "jsdom",
 
     transform: {
 
       '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
 
     },
 
     setupFilesAfterEnv: ['<rootDir>/node_modules/@testing-library/jest-dom','<rootDir>/node_modules/@testing-library/react'],

     moduleNameMapper:{
      "\\.(css|less)$":"<rootDir>/empty-module.js"
     }
 
   };