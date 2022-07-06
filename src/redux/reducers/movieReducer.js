let initialState = {
  popularMovies: {},
  topRatedMovies: {},
  upcomingMovies: {},
};

function movieReducer(state = initialState, action) {
  let { type, payload } = action;
  switch (type) {
    case "GET_MOVIES_SUCCESS":
      return {
        ...state,
        popularMovies: payload.popularMovies,
        topRatedMovies: payload.topRatedMovies,
        upcomingMovies: payload.upcomingMovies,
      };
    default:
      return { ...state };
  }
  // payload로 보낸 data가져오기!
}
//store에 전달해주기 !

export default movieReducer;

//초기설정
// 리듀서는 인자 state action가짐
//export default설정
