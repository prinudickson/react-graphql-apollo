import React from "react";
import { useQuery, gql } from "@apollo/client";
import logo from './logo.svg';
import './App.css';

const FILMS_QUERY = gql`
  {
    launchesPast(limit: 10) {
      id
      mission_name
    }
  }
`;

function App() {
  const { data, loading, error } = useQuery(FILMS_QUERY);

  if (loading) return "Loading...";
  if (error) return <pre>{error.message}</pre>

  return (
    <div className="App">
      <div>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
      <div>
        <h1>SpaceX Launches</h1>
        <ul>
          {data.launchesPast.map((launch) => (
            <li key={launch.id}>{launch.mission_name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
