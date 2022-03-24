# What is this project?

This project includes 3 different solutions to the "Project description" statement below.

1. Hash table
2. 1D Array
3. Document selector API (and 2D array/matrix)

The hash table and 1d array solutions focus on the React paradigm for state management, namely the `useState` hook.

The document selector API solution is not necessarily a React-appropriate solution, because it directly manipulates the DOM. But I wanted to try it out as an experiment because querying the DOM circumvents a lot of the logic that is required by manipulating application state.

**Note:** I broke this project down into different directories in an effort so organize shared resources between solutions 1 and 2.

My rationale was that if more than one component used a utility, type, or constant, it should be moved into the `shared` directory.

One could certainly make the case that this repo may feature too much abstraction for the scope of the project, but part of my reasoning was to improve utilities by making them more generic and avoid duplicate code across files.

# How to run this project

1. From the project root, run `npm install`\*
2. Once the install has completed, run `npm run dev` from the same directory to start the development server
3. The project will open on `http://localhost:3000/` in your browser

[*] In the event that `npm` is not configured on your machine, feel free to refer to the `npm` docs [setup guide](https://docs.npmjs.com/cli/v8/configuring-npm/install).

# Available commands

`npm run test`

- runs vitest test suite

`npm run coverage`

- collect and report coverage of tested code

# Project description

Create a browser-based game where the user sees a 4x4 grid of red squares that change color from red to blue to green, while also changing the color of squares around them to the previous color, with the goal of changing all the squares to green (see below for functional requirements).

### Technical Requirements

- Solution needs to be implemented using React
- TypeScript is preferable but JavaScript is acceptable
- Use any CSS framework you want or even just inline styling if you prefer
- Solution needs to be implemented using React
- Use either “npm” or “yarn” as your build tool so you can run your code to test it out during a review session with one of our engineers.

### Functional Requirements

- Clicking on a red square turns it blue
- Clicking on a blue square turns it green, and turns its neighbors blue
- Clicking on a green square will turn its red neighbors blue and its blue neighbors green
- The game is completed when all of the squares are green
- The number of clicks used to turn all squares green should be tracked and shown
