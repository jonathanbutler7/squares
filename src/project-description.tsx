export const ProjectDescription = () => (
  <>
    <h1>Goal</h1>
    <p>
      Create a browser-based game where the user sees a 4x4 grid of red squares
      that change color from red to blue to green, while also changing the color
      of squares around them to the previous color, with the goal of changing
      all the squares to green (see below for functional requirements).
    </p>
    <h3>Technical Requirements </h3>
    <ul>
      <li>Solution needs to be implemented using React</li>
      <li>TypeScript is preferable but JavaScript is acceptable </li>
      <li>
        Use any CSS framework you want or even just inline styling if you prefer
      </li>
      <li>Solution needs to be implemented using React</li>
      <li>
        Use either “npm” or “yarn” as your build tool so you can run your code
        to test it out during a review session with one of our engineers.
      </li>
    </ul>
    <h3>Functional Requirements</h3>
    <ul>
      <li>Clicking on a red square turns it blue </li>
      <li>
        Clicking on a blue square turns it green, and turns its neighbors blue
      </li>
      <li>
        Clicking on a green square will turn its red neighbors blue and its blue
        neighbors green
      </li>
      <li>The game is completed when all of the squares are green</li>
      <li>
        The number of clicks used to turn all squares green should be tracked
        and shown
      </li>
    </ul>
  </>
);
