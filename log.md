# React Storybook Project

React - Create React App (SPA)

Server - Express

DB - MongoDB

Storybook - Design System

Dependencies

- CSS: node-sass / styled-componenets /

## log

1. create react app
2. add storybook (`npx sb init`)
3. install expree & nodemon
4. create server.js
5. express.static()
   - cra build -> root
   - storybook build -> /storybook
   - public folder -> root
6. deploy senario
   - cra / storybook build -> serve to server.js
7. develop senario
   - view: 3000 // react dev
   - server: 8080 // express // deploy
   - storybook: 6006
8. scripts
   ```json
       "start": "node server",
       "start:server": "nodemon server",
       "prestart": "yarn run build:cra && yarn run build:storybook",
       "start:cra": "react-scripts start",
       "build:cra": "react-scripts build",
       "start:storybook": "start-storybook -p 6006 -s public",
       "build:storybook": "build-storybook -s public"
   ```
9. deploy: netlify -> 강의 듣고 다시! (heroku?)
10. storybook - components
11. fetch connect to express
12. client & backend 분리!
