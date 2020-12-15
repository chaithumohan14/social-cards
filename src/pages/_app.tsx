import React from "react";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";

interface Props {
   Component: React.ComponentClass;
   pageProps: React.PropsWithChildren<any>;
}

const uploadLink = createUploadLink({
   uri: "/api",
   credentials: "include",
});

const client = new ApolloClient({
   link: uploadLink,
   cache: new InMemoryCache(),
});

const MyApp = ({ Component, pageProps }: Props) => {
   return (
      <ApolloProvider client={client}>
         <Component {...pageProps} />
      </ApolloProvider>
   );
};

export default MyApp;
