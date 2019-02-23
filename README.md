# andromeda
App for post-rock fans and bands.

# Getting Started
## Install:
Install **[Node.js](https://nodejs.org/)** (8.9+ version required and LTS version recommented).

Install [Angular-cli](https://angular.io/cli) globally using following command: 
  ```
  npm install -g @angular/cli
  ```
  
Open repo directory and proceed to **/frontend/andromeda** with following command:
  ```
  cd frontend/andromeda
  ```
  
Install node_modules:
  ```
  npm install
  ```
  
Run application with:
  ```
 npm run local-serve
  ```
  
Application will be available from [http://localhost:4200/](http://localhost:4200/).

# Some notes
## Init
App was created by [Angular-cli](https://angular.io/cli) with following command:
  ```
  ng new andromeda --style=scss --routing=true
  ```
## Generate components
  ```
  ng g component an--${componentName} --selector=an-${componentName}
  ```
  And then replace selector with an--${componentName}
