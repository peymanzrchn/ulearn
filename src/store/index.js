import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { compose, applyMiddleware } from "redux";
import { coursesReducer } from "../reducers/courses";
import { courseReducer } from "../reducers/course";
import { userReducer } from "../reducers/user";
import { getAllCourses } from "../actions/courses";

export const store = configureStore(
    {
        reducer: {
            courses: coursesReducer,
            course: courseReducer,
            user: userReducer,
        },
    },
    compose(applyMiddleware(thunk)),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.dispatch(getAllCourses());

store.subscribe(() => console.log(store.getState()));
