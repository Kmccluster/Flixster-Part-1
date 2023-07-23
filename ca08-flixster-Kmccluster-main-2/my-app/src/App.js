import "./App.css"
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import MovieList from './components/MovieList';

function App() {
  return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h3 className="display-4 page-title text-center m-3">Movies Playing in Theater</h3>
            <hr/>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <MovieList />
          </div>
        </div>

      </div>
  );
}

export default App