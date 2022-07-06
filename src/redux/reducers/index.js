import { combineReducers } from "redux";
// combineReducer => 많은 Reducer를 하나로 합치는 작업!
import movieReducer from "./movieReducer";

export default combineReducers({
  moive: movieReducer,
});
// combineReducers에는  객체가들어감(리듀서들)
