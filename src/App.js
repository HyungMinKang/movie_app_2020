import React from "react";
import axios from "axios";
import Movie from "./Movie";

class App extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };

  //   비동기화 async - await - axios 로딩될 때까지 기다려라
  getMovies = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get(
      "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
    );
    this.setState({ movies, isLoading: false });
  };
  componentDidMount() {
    this.getMovies();
  }
  render() {
    const { isLoading, movies } = this.state;
    return (
      <section class="container">
        {/* state를 통해 로딩/ 준비완료 표시 */}
        {isLoading ? (
          <div class="loader">
            <span class="loader_text">Loading ...</span>
          </div>
        ) : (
          // map을 통해 api에서 받은 데이터를 내가 쓰고자하는 형식에 맞게 가져온후 새로운 Movie로 반환
          movies.map((movie) => (
            <Movie
              key={movie.id}
              id={movie.id}
              year={movie.year}
              title={movie.title}
              summary={movie.summary}
              poster={movie.medium_cover_image}
            />
          ))
        )}
      </section>
    );
  }
}

export default App;
