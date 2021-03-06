
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { ApolloClient, InMemoryCache, createHttpLink, ApolloProvider } from '@apollo/client';


const httpLink = createHttpLink({
    uri: "https://oddsure.herokuapp.com/"
});

const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache()
});

export default (
    <ApolloProvider client={client}>
        <BrowserRouter>
            <App />

        </BrowserRouter>


    </ApolloProvider>





)
