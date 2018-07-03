# NodeJS Assignment - Job Position
This is the overall structure of the project.

## Initial setup
Using `NodeJS` to work with API is interesting. I decided for NodeJS framework to use `Express`. Initially I was not sure whether or not to use `AngularJS` for front-end or `Handlebars` template engine. But I decided to use handlebars. Unfortunately, I did not have enough time to do the whole task. So I setup my package JSON where I included the necessary packages. I created a git repository to contain my files.

## Working process
After setting up express and all the packages that I needed, I created a `mlab` MongoDB just to be ready for use. I created a connection to the database via mongoose and I started defining what my data will look like as Models. Figuring out which database collections to use, I was on my way building controllers for those Models.

## Finishing up
I did not have time to build all the controllers, but I managed to build the user and company controllers. The controllers hold some mock data and more specifically the `userController` holds an API to create a all mock data user to the database.
Despite the fact that I built models for all the collections from the database design, I managed to build `API endpoints` only for the `userModel`. The endpoints are showing all users, selecting a user by user name, selecting a user by id, creating a user as well as updating and deleting a user.

## Usage
Just run node where the location of the `app.js` to start the server on port 3000 and from there with localhost:3000/api/users I check the result. Just changing the end point routes in the browser URL the result can be seen.

## Difficulties
I faced difficulties making the relation between the company collection and the user collection specific to the database design that I got.
