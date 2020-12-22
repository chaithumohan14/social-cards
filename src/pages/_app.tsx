import React from "react";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";
import { setContext } from "@apollo/client/link/context";
import { defaultDataIdFromObject } from "@apollo/client";
import { split } from "@apollo/client";
import { getMainDefinition } from "@apollo/client/utilities";
import { WebSocketLink } from "@apollo/client/link/ws";
import * as ws from "isomorphic-ws";
import "../../public/styles/base.css";

interface Props {
   Component: React.ComponentClass;
   pageProps: React.PropsWithChildren<any>;
}

const wsLink = new WebSocketLink({
   uri: `ws://localhost:3000/graphql`,
   options: {
      reconnect: true,
   },
   webSocketImpl: ws,
});

const authLink = setContext((_, { headers }) => {
   const token = localStorage.getItem("token");
   return {
      headers: {
         ...headers,
         authorization: token ? `Bearer ${token}` : "",
      },
   };
});

const uploadLink = createUploadLink({
   uri: "/api",
   credentials: "include",
});

const httpLink = authLink.concat(uploadLink);
const splitLink = split(
   ({ query }) => {
      const definition = getMainDefinition(query);
      return (
         definition.kind === "OperationDefinition" &&
         definition.operation === "subscription"
      );
   },
   wsLink,
   httpLink
);

const client = new ApolloClient({
   link: splitLink,
   cache: new InMemoryCache({
      dataIdFromObject: (resp) => {
         if (resp.__typename === "Users" && resp.token) {
            localStorage.setItem("token", resp.token as string);
         }
         return defaultDataIdFromObject(resp);
      },
   }),
});

const MyApp = ({ Component, pageProps }: Props) => {
   return (
      <ApolloProvider client={client}>
         <Component {...pageProps} />
      </ApolloProvider>
   );
};

export default MyApp;
