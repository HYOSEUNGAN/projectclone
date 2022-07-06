import api from "../api";
// axios를 활용한 api를 써보자!

const API_KEY = process.env.REACT_APP_API_KEY;
function getMovies() {
  return async (dispatch) => {
    const popularMovieApi = api.get(
      `/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
    );

    const topRatedApi = api.get(
      `/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`
    );
    const upComingApi = api.get(
      `/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`
    );

    let [popularMovies, topRatedMovies, upcomingMovies] = await Promise.all([
      popularMovieApi,
      topRatedApi,
      upComingApi,
    ]);

    // get은 .https함수 ! => api호출
    // 동시에 작업하기위한 (병렬로) => Promise.all([])이라는 함수이용 !

    dispatch({
      type: "GET_MOVIES_SUCCESS",
      payload: {
        popularMovies: popularMovies.data,
        topRatedMovies: topRatedMovies.data,
        upcomingMovies: upcomingMovies.data,
      },
    });
    // dispatch로 api.data를 보내도록함 !

    // let url = `https://api.themoviedb.org/3/movie/popular?api_key=<<api_key>>&language=en-US&page=1`;
    // let response = await fetch(url);
    // let data = await response.json;
    // // fetch 에는 기본적으로 첫 번째 인자에 요청할 url을 받고 json파일로 리턴합니다

    // let url2 = `https://api.themoviedb.org/3/movie/top_rated?api_key=<<api_key>>&language=en-US&page=1`;
    // let response2 = await fetch(url2);
    // let data2 = await response2json;

    // let url3 = `https://api.themoviedb.org/3/movie/upcoming?api_key=<<api_key>>&language=en-US&page=1`;
    // let response3 = await fetch(url3);
    // let data3 = await response.json;
  };
}
// => 난잡한 코드를 axios로 api요청을해보자 !!

//리덕스에서 api 호출 => 리덕스 미들웨어 이용 => actions
// 리덕스 미들웨어 thunk는 함수를  !
export const movieAction = { getMovies };
