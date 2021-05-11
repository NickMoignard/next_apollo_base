import { ApolloProvider } from "@apollo/client";
import client from "../apollo/client";

import Header from "../components/core/Header";
import Footer from "../components/core/Footer";

import "../styles/globals.css";
import "tailwindcss/tailwind.css";

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </ApolloProvider>
  );
}

export default MyApp;
