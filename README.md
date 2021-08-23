<p align="center"> 
  <img src="./src/assets/img/eventio-logo" alt="Eventio Logo" width="80px" height="80px">
</p>
<h1 align="center"> Eventio </h1>

<!-- TABLE OF CONTENTS -->
<h2 id="table-of-contents"> :book: Table of Contents</h2>

<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#overview"> ➤ Overview</a></li>
    <li><a href="#getting-started"> ➤ Getting Started</a></li>
    <li><a href="#publish"> ➤ Publish</a></li>
    <li><a href="#project-files-description"> ➤ Project Files Description</a></li>
    <li><a href="#technologies-used"> ➤ Technologies Used</a></li>
  </ol>
</details>

![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)

<!-- OVERVIEW -->
<h2 id="overview"> :cloud: Overview</h2>

<p align="justify"> 
    Eventio is a project that helps you organize and visualize your events.
</p>

![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)

<!-- GETTING STARTED -->
<h2 id="getting-started"> :book: Getting Started</h2>
<p><strong>Clone the repository</strong></p>
<p><strong>Before Start</strong></p>
<p>Create the .env file and fill in the necessary variables like env-example </p>

<p><strong>You are able to start the project by typing the following commands in the command line:</strong></p>
<p>Install all dependency of the project:</p>
<pre><code>$ npm install || yarn install</code></pre>
<p>Start the project:</p>
<pre><code>$ npm start || yarn start</code></pre>

![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)

<!-- Publish -->
<h2 id="publish"> :book: Publish</h2>
<p><strong>You are able to publish the project by typing the following commands in the command line:</strong></p>
<p>Generate a build</p>
<pre><code>$ npm run build || yarn build</code></pre>
<p>Install firebase-tools</p>
<pre><code>$ npm i -g firebase-tools</code></pre>
<p>Login</p>
<pre><code>$ firebase login</code></pre>
<p>Deploy</p>
<pre><code>$ firebase deploy</code></pre>

![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)

<!-- PROJECT FILES DESCRIPTION -->
<h2 id="project-files-description"> :floppy_disk: Project Files and Folder Description</h2>

<h3> Folders </h3>
<ul>
  <li><b>assets</b> - Store static files with images and fonts. </li>
  <li><b>components</b> - Contains components that are reused throughout the application. </li>
  <li><b>config</b> - Configuration files like redux configuration and saga. </li>
  <li><b>enviroment</b> - Folder where the environment variables are worked. </li>
  <li><b>hooks</b> - Contains hooks that are reused throughout the application. </li>
  <li><b>models</b> - Contains models that are reused throughout the application. </li>
  <li><b>pages</b> - Contains the containers and their components. </li>
  <li><b>services</b> - Contains the direct communication layer with the api as endpoints and or other services. </li>
  <li><b>styles</b> - Contains the theme and other files related a styles. </li>
  <li><b>utils</b> - Contains a file with functions and variables that will be useful in the application. </li>
  <li><b>Store</b> - is the place where the application's functional rule is executed and the information is stored.</li>
</ul>

<h3> Files </h3>
<ul>
  <li><b>actions.ts</b> - file where the actions that are triggered to change storage or trigger asynchronous functions are located.</li>
  <li><b>reducer.ts</b> - Data that will be stored to populate that container's components.</li>
  <li><b>saga.ts</b> - Location where asynchronous functions to the API are performed.</li>
  <li><b>{ComponentName}.tsx</b> - React Component.</li>
  <li><b>{ComponentName}Style.tsx</b> - Most basic and stylized react components.</li>
</ul>

![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)

<!-- TECHNOLOGIES USED -->
<h2 id="technologies-used"> :floppy_disk: Technologies used Description</h2>

<h3> Techs </h3>
<ul>
 <li><b>React</b> - React it's used to create the layout page and allow us to have reusable componets .</li>
  <li><b>Redux-Saga</b> -Redux-saga is a tool that helps with asyncronous calls and works very well with redux in the part of loading information into the api and saving in redux. It also facilitates the organization of functions by facilitating unit testing.</li>
  <li><b>Redux</b> -Redux helps in managing data between components and has a flow of state change and performance in relation to the necessary renderings. </li>
  <li><b>Styled-Components</b> - Styled-components helps in the Stylization of components using javascript making them very readable and breaking this barrier between JS and CSS. </li>
 <li><b>Typescript</b> - Typescript helps us to keep the application solid and readble based on typing, make the development more productive.</li>
</ul>

![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)
