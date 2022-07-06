import React, { useEffect } from "react";
import { movieAction } from "../redux/actions/movieAction";
import { useDispatch } from "react-redux";
// import Banner from "../components/Banner";

// 액션호출을 위해 dispatch필요

//웹페이지가 켜지자마자 데이터를 보여줘야함 => useEffect
//리덕스에서 api 호출 => 리덕스 미들웨어 이용 => actions

const Home = () => {
  const dispatch = useDispatch();

  // const { popularMovies, topRatedMovies, upcomingMovies } = useSelector(
  //   (state) => state.movie
  // );

  useEffect(() => {
    dispatch(movieAction.getMovies());
  });
  //useEffect는 렌더를 하고 호출되므로 충돌이 있음 => 나중에 불러줘야함!
  return (
    <div>
      {/* {popularMovies.result && <Banner movie={popularMovies.results[0]} />}
      조건부렌더링 */}
    </div>
  );
};

export default Home;
