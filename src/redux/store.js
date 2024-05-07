import { appReducer } from "./reducers/app-reducer";
import { legacy_createStore as createStore ,combineReducers } from "redux";

const rootReducer = combineReducers({
  app: appReducer,
});

export const store = createStore(rootReducer);
store.subscribe(() => console.log(store.getState()));
