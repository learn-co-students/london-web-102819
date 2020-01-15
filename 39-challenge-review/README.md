# Module 4 Code Challenge: Poesy

Welcome to Poesy, where your poetry masterpieces come to life! Our old front-end team laid down the foundations for our app, but it looks like they forgot all the functionality! Yikes!

![Demo GIF](./demo.gif)

Your job will be to make our app work according to the following specifications.

## Setup instructions

When you run `npm start` a json server will spin up and you can access the poem info at `http://localhost:3000/poems`, _and_ your react application will also start, on port 3001.

## Deliverables

1. Display poems from the database

Make a GET request to `http://localhost:3000/poems` to fetch poem data. Use this data to render `Poem` components in the `PoemsContainer`!

2. Show / hide the `NewPoemForm`

Hook up the button in the sidebar to toggle the visibility of the `NewPoemForm`.

3. Create poems

When a user submit's a poem from the `NewPoemForm`, it should be posted to the API and it should be added to the list of poems on the right.

4. Mark poems as read

When a poem's `Mark as read` button is clicked, it should be marked as read and the button should read `Mark as unread`. Clicking it again should change it back to unread. _This does not need to be persisted in the database._ Bonus: change the background color of the button, too.

## Checkpoint

_Please `commit` at this point!_

5. Favorite poems

Add a second `PoemsContainer` component that will be used to display favorites. Add a "Like" button to each `Poem` component. When clicked, that poem will be added to a list of favorites and be displayed in the second `PoemContainer`.

6. Delete poems

Add a button to the `Poem` component which will remove a poem from the page _and_ delete it from the backend.
