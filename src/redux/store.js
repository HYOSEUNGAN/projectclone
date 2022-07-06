import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducers";
// 스토어 생성, 미들웨어 가져오기(api), redux devtool, rootReducer는 reducers파일에서 가져옴

let store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
// devtool을 활용하기 위해 미들웨어 thunk를 인자로 !

export default store;
// store을 수출해준다 어디로? index.js로 ~
