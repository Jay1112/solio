import { appReducer } from "./reducers/app-reducer";
import { socialReducer } from "./reducers/socials-reducer";
import { legacy_createStore as createStore ,combineReducers } from "redux";

const rootReducer = combineReducers({
  app: appReducer,
  social : socialReducer
});

export const store = createStore(rootReducer);
store.subscribe(() => console.log(store.getState()));
