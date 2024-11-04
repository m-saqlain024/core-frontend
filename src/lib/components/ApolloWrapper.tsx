"use client";

import { HttpLink } from "@apollo/client";
import {
  ApolloNextAppProvider,
  ApolloClient,
  InMemoryCache,
} from '@apollo/experimental-nextjs-app-support';
import React from 'react';

function makeClient(): ApolloClient<any> {
  const httpLink = new HttpLink({
    uri: "https://flyby-router-demo.herokuapp.com/",
  });

  return new ApolloClient({
    cache: new InMemoryCache(),
    link: httpLink,
  });
}

interface ApolloClientProviderProps {
  children: React.ReactNode;
}

export function ApolloWrapper({ children }: ApolloClientProviderProps) {
  return (
    <ApolloNextAppProvider makeClient={makeClient} >
      {children}
    </ApolloNextAppProvider>
  );
}
