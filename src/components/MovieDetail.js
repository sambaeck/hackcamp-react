import React, {Component} from 'react';
import PropTypes from 'prop-types';
import movies from '../mocks/movies.json';
import {BACKDROP_URL_780} from '../constants/urls';

/**
 * This component can be used as the detail page for a Movie
 */
export class MovieDetail extends Component {
  state = {
    movie: movies.find(movie => movie.id === this.props.movieId)
  };

  render() {
    const {movie} = this.state;
    const {title, backdrop_path, overview, release_date, vote_average} = movie;
    return (
      <div className="card mb-3 movie-card">
        <img className="card-imt-top" src={BACKDROP_URL_780 + backdrop_path} />
        <div className="card-block">
          <h1 className="black">{title}</h1>

          <p>{overview}</p>

          <button className="btn btn-primary">Back</button>
        </div>
        <div className="card-footer">
          <small className="text-muted">Out since {release_date}</small>
          <small className="text-muted right">Rating: {vote_average}/10</small>
        </div>
      </div>
    );
  }
}

MovieDetail.propTypes = {
  movieId: PropTypes.number.isRequired,
  goBack: PropTypes.func.isRequired
};
