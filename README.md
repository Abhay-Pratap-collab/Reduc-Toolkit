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
