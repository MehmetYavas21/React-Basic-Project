# 12. React Basics Project

## Introduction

This final project concludes the module on React Basics.

During this project, you will be assessed on how well you have achieved the learning goals of this module and are now able to:

- Create basic React components
- Use React props
- Use React state
- Use conditionals in JSX
- Use a design system
- Create event handlers
- Build a basic web application in React
- Create lists, loops and keys in React

During this project, you will develop a simple React application, based on a set of requirements. You will need to apply all the concepts and skills you have learned about and mastered in this module:
- JSX
- Rendering components
- Props
- Conditionals
- State
-  React Devtools in Chrome
-  Lists, loops and keys
-  Handling events
-  Styling with a design system

## Evaluation

This project will be evaluated by our mentors, who will give you feedback on what you did well, what you need to improve (need to haves), and/or what would be nice to improve (nice to haves) and on how you can make these improvements. 

You can continue to make improvements and hand in the project for evaluation and feedback as often as necessary. You need a pass for this project to receive your certification at the end of the course. Many students fail the first time and submit the project several times, so don’t worry if this also happens to you.

## Project

At the end of this exercise, you will be able to develop a simple React application.

**Description**

It’s time to start building a new React app! We will provide you with some starter code with a dataset that you can use to build your app, and then you can take it from there. This Course Project will give you the opportunity to test yourself as a more independent coder

The app you will be creating is a recipe app. We want to expand our Winc restaurant by offering more meals and accommodating more dietary wishes from our customers. We want an app to search for recipes based on diet and health labels (vegan/vegetarian/pescetarian/gluten-free/sesame-free/etc.) or recipe names. This will help us ensure that we avoid accidentally serving the wrong dishes to people with allergies or specific dietary wishes.

For this project, we would like two different pages the user can see: A screen where you can view an overview of available recipes and a screen where you can view the details of a single recipe.

Here is a preview of what the app can look like and what features we would like you to build. You do not have to recreate the same design.

**!!! DON'T FORGET TO ADD VIDEO FROM WINC**

## Instructions

- Download the starter files here on our [GitHub repo](https://github.com/WincAcademy/react-exercise-solutions/tree/main/react-basics-project-starter).

- Inspect the data object in utils/data.js  to get an idea of what data you will work with.

- The data object is a converted JSON string that was retrieved from a recipe API called Edamam(opens in a new tab). It contains 20 recipes in the ‘hit’ key that you can use for the app.

- To access data, such as recipe labels, you need to look into the recipe key, e.g. data.hits[0].recipe.label has the following value "Paleo Chocolate Covered Caramels". Use console.log() to play around with the data and see what you can retrieve.

- In App.jsx, you want to keep track of a selected recipe item and show a <RecipePage /> component (you can use a placeholder for now, or create a new component) if the user has selected one. Else show the <RecipeListPage /> that will contain an overview of all recipes.

- In RecipeListPage.jsx, you can use the imported recipe data and display a list of all recipes. Show the following details for each recipe: 
    1. Recipe name
    2. A picture of the recipe/meal
    3. Diet label (if present)
    4. Cautions (if present)
    5. Meal type
    6. Dish type




