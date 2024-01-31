import React from "react";
import { Provider } from "react-redux";
import store from "./js/store.js";
import Todo from "./Classes/Todo";
const App = () => {
    return (
        <Provider store={store}>
            <Todo />
        </Provider>
    );
};
export default App;

