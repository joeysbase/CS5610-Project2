# File Structure
```
/
│  App.jsx
│  index.html
│  index.jsx
│  package.json
│  README.md
│  styles.css
│
└─src
    ├─components
    │      Cell.jsx
    │      GameBoard.jsx
    │      NavBar.jsx
    │      NewResetBar.jsx
    │      Timer.jsx
    │
    ├─pages
    │      GameEasy.jsx
    │      GameList.jsx
    │      GameNormal.jsx
    │      Home.jsx
    │      Login.jsx
    │      Register.jsx
    │      Rules.jsx
    │      Scores.jsx
    │
    └─sudoku
            generator.js
            solver.js
            SudokuContext.jsx
            sudokuReducer.js
            validator.js
```
# Writeup
- Q: What were some challenges you faced while making this app?
- A: How to generate valid sudoku efficiently and render it correctly. I discovered that the brute force solution sometime got stuck for a long time. Also, it takes efforts to figure out how to keep track of the board state.
- Q: Given more time, what additional features, functional or design changes would you make?
- A: Maybe I will try to redesign the website to make it looks more fabulous.
- Q: What assumptions did you make while working on this assignment?
- A: The interaction should be easy and the user should find no trouble navigating.
- Q: How long did this assignment take to complete?
- A: About a week.
- Q: What bonus points did you accomplish?  Please link to code where relevant and add any required details.
- A: N/A
# Website Link
![sudoku](https://cs5610-project2-ns4a.onrender.com)
