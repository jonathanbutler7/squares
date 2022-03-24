I created this repo as part of the interview process for Ripple.

---

# What's in this project?

This project includes 3 different solutions to the "Goal" statement below.

1. hash table
2. 1d Array
3. Document selector API

# How to run this project

1. From the project root, run `npm install`
2. Once the install has completed, run `npm run dev` from the same directory to start the development server

# Available commands

`npm run test`
- runs vitest test suite

`npm run coverage`
- shows converage 

# Goal

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
