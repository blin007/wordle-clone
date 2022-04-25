The content below is an example project proposal / requirements document. Replace the text below the lines marked "__TODO__" with details specific to your project. Remove the "TODO" lines.

# Guess the Word

## FOR FINAL MILESTONE: [heroku deployment](https://wordgame-app.herokuapp.com/)
### PROJECT STRUCTURE

![projectstructure](documentation/word%20app%20project%20structure.png)

## Overview

Yep, you guessed it (haha get it?), the main focus of my project is a word guessing game. 
The game will be similar to wordle (practically a clone), 
where the game consists of a 5 x 6 array and the user has 6 attempts to guess a 5-letter word.

This app functions as a game where users have to guess the correct word chosen by the game. 
Anyone can add and remove words from the game given 
that they fulfill the requirements (for example newly added words must be 5-letters).

## Data Model

The application will store Words

An Example Word:

```javascript
{
  _id: //unique identifier for the word
  text: "VIVID",
}
```


## [Link to Commented First Draft Schema](backend/models/wordModel.js)

## Wireframes

'/' the home page which goes directly to the game

![home](documentation/home.png)

/wordlist - page for showing all words that can be possible solutions in the game

![words](documentation/wordlist.png)


## Site map

![site-map](documentation/Site%20map.jpeg)

## User Stories 

1. Anyone can add words to the game as long as it contains 5 letters and the word is in the wordOptions.js file
2. Anyone can delete words from the game as long as there are 10 or more words in the DB
3. Anyone can view all the words that can be possible solutions to the game
4. Anyone can play the game

## Research Topics

Subject to change

* (2 points) Use a CSS framework
    * Used Tailwind.css to prettify the game
* (6 points) Reactjs
    * Used Reactjs as the frontend framework; I've assigned it 6 pts since I've been doing a lot more research than I expected initially.

8 points total out of 8 required points


## [Link to Initial Main Project File](backend/server.js) 

## Annotations / References Used

1. [reactjs tutorial](https://www.youtube.com/watch?v=w7ejDZ8SWv8)
   1. [entirety of frontend](https://github.com/nyu-csci-ua-0467-001-002-spring-2022/final-project-blin007/tree/2ccf3ffd1bf7239d23eb27eeed35fc761a4987b7/frontend)
2. [tailwind docs](https://tailwindcss.com/docs/installation)
   1. [tailwind was mostly used in the frontend components](https://github.com/nyu-csci-ua-0467-001-002-spring-2022/final-project-blin007/tree/2ccf3ffd1bf7239d23eb27eeed35fc761a4987b7/frontend/src/components)
3. [connecting react to express backend](https://www.youtube.com/watch?v=kJA9rDX7azM) 
   1. [use of axios](https://github.com/nyu-csci-ua-0467-001-002-spring-2022/final-project-blin007/blob/16e5ce982f700ea54a7a6ab0d9a974a5d6a1364e/frontend/src/pages/Words.jsx#L15-L24)
   2. [proxy in package.json file](https://github.com/nyu-csci-ua-0467-001-002-spring-2022/final-project-blin007/blob/16e5ce982f700ea54a7a6ab0d9a974a5d6a1364e/frontend/package.json#L5)
4. [deploying with heroku](https://www.youtube.com/watch?v=5PaUiPyBDJY&t=747s)
   1. [process.env.PORT](https://github.com/nyu-csci-ua-0467-001-002-spring-2022/final-project-blin007/blob/eaba0a8a53f6ff4cedb72676b7de789c552cf230/backend/server.js#L12)
   2. [process.env.MONGODB_URI](https://github.com/nyu-csci-ua-0467-001-002-spring-2022/final-project-blin007/blob/eaba0a8a53f6ff4cedb72676b7de789c552cf230/backend/config/db.js#L6)
   3. [process.env.SESSION_SECRET](https://github.com/nyu-csci-ua-0467-001-002-spring-2022/final-project-blin007/blob/eaba0a8a53f6ff4cedb72676b7de789c552cf230/backend/server.js#L31)
   4. [package.json scripts](https://github.com/nyu-csci-ua-0467-001-002-spring-2022/final-project-blin007/blob/eaba0a8a53f6ff4cedb72676b7de789c552cf230/package.json#L8-L10)
   5. [process.env.NODE_ENV](https://github.com/nyu-csci-ua-0467-001-002-spring-2022/final-project-blin007/blob/eaba0a8a53f6ff4cedb72676b7de789c552cf230/backend/server.js#L50-L56)
5. [reactjs useEffect hook](https://www.youtube.com/watch?v=0ZJgIjIuY7U&list=LL&index=4&t=666s)
   1. [GameLogic.jsx window event listener](https://github.com/nyu-csci-ua-0467-001-002-spring-2022/final-project-blin007/blob/16e5ce982f700ea54a7a6ab0d9a974a5d6a1364e/frontend/src/components/GameLogic.jsx#L27-L33)
   2. [LayoutLogic.jsx](https://github.com/nyu-csci-ua-0467-001-002-spring-2022/final-project-blin007/blob/16e5ce982f700ea54a7a6ab0d9a974a5d6a1364e/frontend/src/components/LayoutLogic.jsx#L55-L155)
6. [reactjs tailwind to create modal](https://www.youtube.com/watch?v=ZCvemsUfwPQ)
   1. [EndGameModal.jsx](https://github.com/nyu-csci-ua-0467-001-002-spring-2022/final-project-blin007/blob/16e5ce982f700ea54a7a6ab0d9a974a5d6a1364e/frontend/src/components/EndGameModal.jsx#L6-L24)
7. [user input validation for word](https://stackoverflow.com/questions/3073176/javascript-regex-only-english-letters-allowed)
   1. [in words.jsx](https://github.com/nyu-csci-ua-0467-001-002-spring-2022/final-project-blin007/blob/052f81edba6ad9ec27abdd5c247ef7e0818ea58e/frontend/src/pages/Words.jsx#L11-L14)
8. [tailwind css animations](https://tailwindcss.com/docs/animation#customizing-your-theme)
   1. [in tailwind config file](https://github.com/nyu-csci-ua-0467-001-002-spring-2022/final-project-blin007/blob/2ccf3ffd1bf7239d23eb27eeed35fc761a4987b7/frontend/tailwind.config.js#L5-L26)

