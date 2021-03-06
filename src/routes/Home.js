import React from "react";
import axios from "axios";
import Movie from "../components/Movie";
import "./Home.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

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
    } = await axios.get("https://yts-proxy.now.sh/list_movies.json?");
    this.setState({ movies, isLoading: false });
  };
  componentDidMount() {
    this.getMovies();
  }
  render() {
    const { isLoading, movies } = this.state;
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader_text">Loading ...</span>
          </div>
        ) : (
          <div className="movies">
            <Header />
            {movies.map((movie) => (
              <Movie
                key={movie.id}
                id={movie.id}
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image}
                genres={movie.genres}
                rating={movie.rating}
              />
            ))}
            <Footer />
          </div>
        )}
      </section>
    );
  }
}

export default App;
