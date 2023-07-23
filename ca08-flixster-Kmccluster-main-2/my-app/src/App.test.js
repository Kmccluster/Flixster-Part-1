import React, {Component} from 'react';
import axios from "axios";
import MovieCard from "./MovieCard";

class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies : []
    };
    this.apiKey = process.env.REACT_APP_CURRENT_MOVIES_API_KEY
  }
  componentDidMount() {
    let url = "https://api.themoviedb.org/3/movie/now_playing?api_key=a07e22bc18f5cb106bfe4cc1f83ad8ed";
    const getMovies = async () => {
      await axios.get(url).then((response) => {

        this.setState({movies: response.data.results});
        console.log({movies: response.data.results})
      }).catch((err) => {
        console.log(err);
      })
    }
    getMovies();
    console.log(this.movies);
  }
  render() {
    return (
        <>

          <div className="row row-cols-sm-2 row-cols-md-5 row-cols-xxl-6">
            {
              this.state.movies.map((movie,idx) => {
                return <MovieCard movie={movie} key={idx} />

              })

            }
          </div>
        </>
    );
  }

}


export default MovieList;