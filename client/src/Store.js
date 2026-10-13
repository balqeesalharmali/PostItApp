import {configureStore} from "@reduxjs/toolkit";
import usersReducer from "./Features/UserSlice";
const store= configureStore({
    reducer:{
        users:usersReducer,
    }
});
export default store;