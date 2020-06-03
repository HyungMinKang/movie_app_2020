import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./Detail.css";

class Detail extends React.Component {
  componentDidMount() {
    console.log(this.props);
    const { location, history } = this.props;
    // 링크를 클릭해서 접근하는게 아닌 url에 직접쳐서 접근하는경우 home으로 redirect
    if (location.state === undefined) {
      history.push("/");
    }
  }

  render() {
    const { location } = this.props;
    if (location.state) {
      return (
        <div className="detail_container">
          <Header />
          <div className="movie">
            <div className="movie__poster">
              <img
                src={location.state.poster}
                alt={location.state.title}
                title={location.state.title}
              />
            </div>
            <div className="movie__data">
              <h3 className="movie__title">{location.state.title}</h3>
              <h5 className="movie__year">{location.state.year}</h5>
              <ul className="movie__genres">
                {location.state.genres.map((genre, index) => (
                  <li key={index} className="moive__genre">
                    {location.state.genre}
                  </li>
                ))}
              </ul>
              <span className="movie_rating">⭐{location.state.rating}</span>
              <p className="movie__summary">{location.state.summary}</p>
              <button className="movie__subscribe">view it right now</button>
            </div>
          </div>
          <Footer />
        </div>
      );
    } else {
      return null;
    }
  }
}

export default Detail;
