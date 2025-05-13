import React from "react";
import Row from "../Row/Row";
import requests from "../../../utils/requests";

const RowLists = () => {
  return (
    <>
      <Row
        title="Netflix Originals"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow={true}
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Tp Rated" fetchUrl={requests.fetchTopRatedMovies} />
      <Row title="Action movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Tv Shows" fetchUrl={requests.fetchTvShow} />
      <Row title="Docementaries" fetchUrl={requests.fetchDocumentaries} />
    </>
  );
};

export default RowLists;
