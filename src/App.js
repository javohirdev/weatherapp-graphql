import React from 'react';
// import ApolloClient from 'apollo-boost';
// import { ApolloProvider } from 'react-apollo';
// import Courses from './Courses';

import Home from './Home';
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const App = () => {

  const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: "https://graphql-weather-api.herokuapp.com/"
  });

  return (
    <ApolloProvider client={client}>
      <div>
          <Home/>
      </div>
    </ApolloProvider>
  );
}

export default App;
