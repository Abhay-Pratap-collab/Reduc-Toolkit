<<<<<<< HEAD
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
=======
Understanding Redux Toolkit (RTK) 🚀
Welcome to the Redux Toolkit (RTK) learning and reference repository! This project is designed to break down the core concepts of Redux Toolkit, showing how it simplifies state management in modern JavaScript and React applications compared to traditional "vanilla" Redux.

Why Redux Toolkit?
Traditional Redux often required a lot of boilerplate code (actions, reducers, types, constants). Redux Toolkit is the official, opinionated, batteries-included toolset for efficient Redux development.

It addresses three common concerns about Redux:

"Configuring a Redux store is too complicated."

"I have to add a lot of packages to get Redux to do anything useful."

"Redux requires too much boilerplate code."

Key Concepts & Architecture
Redux Toolkit simplifies data flow into a predictable unidirectional cycle. Here is how the core pieces fit together:

Store: The single source of truth that holds your application's state.

Slice: A collection of Redux reducer logic and actions for a single feature of your app (created using createSlice).

Actions & Reducers: Dispatched to tell the store to update its state. RTK uses Immer under the hood, allowing you to write "mutating" code that safely updates state immutably.

Dispatch: The trigger mechanism to send actions to the store.

Core API Methods Explained
1. configureStore()
Simplifies store creation by automatically combining your reducers, adding useful middleware (like redux-thunk for async logic), and enabling the Redux DevTools extension by default.

2. createSlice()
The superpower of RTK. It accepts an initial state, an object of reducer functions, and a "slice name", and automatically generates action creators and action types that correspond to the reducers and state.

3. createAsyncThunk()
Accepts an action type string and a function that returns a promise, generating a thunk that dispatches pending, fulfilled, and rejected action types based on that promise.
>>>>>>> 11e5f2ff70e4ae9c2313a6c3f2b377d51ab78130
