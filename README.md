# crumble-API-mg

The second project for the course is to build a full stack application.  This app is called Crumble and is a cookie recipe sharing application. The application allows a user to create, search for, update, delete and like various cookie recipes!

## Link to Crumble-Front-End-Repo
- [Crumble-Front-End-Repo](https://github.com/MGubernick/crumble-front-end-mg)

## Important Links & Resources Used:

**specific Links**
- [full-stack project repo](https://git.generalassemb.ly/ga-wdi-boston/full-stack-project)
- [express-api-template repo](https://git.generalassemb.ly/ga-wdi-boston/express-api-template)
- [express-api-deployment guide](https://git.generalassemb.ly/ga-wdi-boston/express-api-deployment-guide)

**Website Resources**
- [w3schools](w3schools.com)
- [developer.mozilla](developer.mozilla.org)
- [stackOverflow](stackOverflow.com)
- [heroku](https://heroku.com/)
- [atlas](https://cloud.mongodb.com/)

**Other Resources**
- Classmate collabs!

## Planning and Story: Development Process and Problem-Solving Strategy:

### Planning:
- The planning process for the API portion of this project began along with the front-end planning and the full-stack-project-practice. I then drew out a ERD to describe the relationships between the user and their recipes.

### API Build:
- The first part of this process was creating a model for the Recipe Schema.  The model includes the needed to to craeate a recipe on the front-end: name, author, cookieType, ingredients, directions and information regarding the owner (the user that created the specific recipe).  Once I had the Recipe model built, I began writing the routes that I would need in the recipe_routes.js file. I wrote a POST route for Create, a couple GET routes: for user index, index all, show one (owned by user) recipe and show one (owned by anyone) recipe.  After the GET routes, I wrote the PATCH route to update a recipe and a DELETE route to destroy a recipe but only if you're the onwer.  Once the routes were all completed, I required them to the server.js file and regestered them to be used in the app.

### Problem-Solving:
- My **problem-solving strategy** bigan with spending a little bit of time trying to figure out how to solve a problem on my own, depending on what it was. I did this by working through any ideas that I could come up with right away.  Then, I would start to reference back to our lesson repos and use google as needed to search for resource like stackOverflow or other documentation that could help understand how to solve the problem at hand.  While troubleshooting on my own, I utilized zoom breakout rooms to work with fellow classmates to collaborate and brainstorm ideas.  After ~20 - 30minutes of brainstorming, if I was still stuck with no progress, I would submit an issue to the issues page on the projct repo.

### Everything Else:
- Once I had completed the required functions for the projet, I wanted to add a like button function to my application.  In order to find a users 'favorites' (any recipe that they have cliked the 'like' button on), I added an additional key-value pair to the recipe model with the key of 'liked' and a value of Boolean.  This would allow me to filter recipes based on the ones a user has liked.

## User Stories:

- As a user, I want to interact with the API and create a recipe

- As a user, I want to interact with the API and update a recipe

- As a user, I want to interact with the API and index all of a specific user's recipes

- As a user, I want to interact with the API and index all recipes on the db

- As a user, I want to interact with the API and Destroy a recipe owned by a user

- As a user, I want to linteract with the API and allow a user to 'like' a recipe and change the Boolean value of Liked to true

## Technologies Used:
- Javascript
- Express
- mongoose
- cors
- Crumble Front-End
- Google
- Heroku

## Unsolved Problems:
- The problem that I am currently working on is a part of my Find My Favorites function.  Currently, this will display all of the recipes that have the 'liked' key's value set to 'true'.  This part works great but I want to only select the liked recipes by the specific user.
- I would like to eventually create a feature that allows the users to leave a review on other user's recipes.

## ERD
![ERD_v2](https://imgur.com/UwTZ5yT.png)
