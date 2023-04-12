# Horned Beast

## Overview
Create an application that displays images and information of horned animals. This application will allow you to filter the images by number of horns and chose your favorite image.

For this class we will just be focusing on the component structure of the application. You will create a new React application using create-react-app and fill it with components. Refer to ‘Feature Tasks’ to see exactly which components to build and where to display them.

***

## Lab 1
Create a new React application using `create-react-app` and fill it with components. Refer to ‘Feature Tasks’ to see exactly which components to build and where to display them.

**Feature Tasks**

Complete the following steps to setup your repository:
Create a React application using create-react-app as demonstrated in class.
Use the command npx create-react-app `<repo-name>`.
Create a new repository on GitHub WITHOUT a README.md. We will import an “existing” repository with its own README
Follow the instructions given by GitHub to “push an existing repository from the command line”
be sure to select HTTPS or SSH, whichever is relevant for you
Create a Branch and begin your work. As always, ACP often
Your App component should render a Header, Footer and Main component, each of which is defined in their own files.

Your Header component needs to have an `<h1>` with a title.

Your Footer component needs to contain your name as the author.

The Main component needs to render at least two copies of a component called HornedBeast.

The Main component needs to pass title, imageUrl, and description into each HornedBeast component. For the purpose of this lab, you can pass whatever title, url and description that you want into each HornedBeast component.

The HornedBeast component needs to contain an `<h2>` that displays the title of the animal, an `<img>` element with src, alt and title attributes, and a `<p>` that displays the description.

***

## Lab 2
**Time Estimate**

For each of the features listed below, make an estimate of the time it will take you to complete the feature, and record your start and finish times for that feature:

Number and name of feature: Lab 2 Features 1 - 3

Estimate of time needed to complete: 4 hours

Start time: 1pm

Finish time: 7pm

Actual time needed to complete: 6 hours

**Feature #1: Display Images**

As a user, I want to view the images on the page so that I can browse the photo collection.


**Feature #2: Allow Users to Favorite Individual Beasts**

As a user, I want to be able to interact with the site and favorite beasts.

Put a heart in each HornedBeast component with the number of “Favorites” next to it.

**Feature 3: Bootstrap**

As a user, I want to see a visually pleasing application that is also reponsive when I view this application on different screen sizes.

Bring in the react-bootstrap library and use it to style your application making sure that it is responsive.
