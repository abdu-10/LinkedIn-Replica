import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userSlice from "../features/users/userSlice";
import seekerSlice from "../features/seekers/seekerSlice";
import employerSlice from "../features/employers/employerSlice";
import adminSlice from "../features/admins/adminSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";

const persistConfig = {
    key: "root",
    storage,
};

const appReducer = combineReducers({
    /* your app’s top-level reducers */
    user: userSlice,
    seeker: seekerSlice,
    employer: employerSlice,
    admin: adminSlice,
})

// enable user session end on store clearing
const rootReducer = (state, action) => {
    if (action.type === 'USER_LOGOUT') {
      storage.removeItem('persist:root')
      return appReducer(undefined, action)
    }
    return appReducer(state, action)
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== "production",
    middleware: [thunk],
});

export const persistor = persistStore(store);
