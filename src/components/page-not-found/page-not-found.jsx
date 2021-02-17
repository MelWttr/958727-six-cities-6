import React from 'react';
import {Link} from 'react-router-dom';

const PageNotFound = () => {

  return (
    <main className="page__main page__main--index">
      <section className="not-found container">
        <h1>404 Error</h1>
        <p className="not-found__text">Page not found</p>
        <div className="not-found__disclaimer">
          <p>Sorry, that page seems to be taking a break!</p>
          <p>
              Came back to our <Link to={`/`} className="not-found__link">home page </Link>
              and plan your own break there! </p>
        </div>
      </section>
    </main>
  );
};

export default PageNotFound;
