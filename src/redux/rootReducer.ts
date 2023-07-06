import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
// states
import { auth } from "./slices";

// ----------------------------------------------------------------------

const rootPersistConfig = {
  key: "root",
  storage,
  keyPrefix: "redux-",
  whitelist: [],
};

const rootReducer = combineReducers({
  auth,
});

export { rootPersistConfig, rootReducer };
