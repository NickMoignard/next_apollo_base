import { ApolloProvider } from "@apollo/client";
import client from "../apollo/client";

import Header from "../components/core/Header";
import Footer from "../components/core/Footer";

import "../styles/globals.css";

const headerData = {
  links: [
    {
      id: 1,
      text: "platform",
      url: "/platform",
    },
    {
      id: 2,
      text: "pricing",
      url: "/pricing",
    },
    {
      id: 3,
      text: "faq",
      url: "/faq",
    },
    {
      id: 4,
      text: "about",
      url: "/about",
    },
    {
      id: 5,
      text: "inspiration",
      url: "/inspiration",
    },
  ],
};

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Header links={headerData.links} />
      <Component {...pageProps} />
      <Footer />
    </ApolloProvider>
  );
}

export default MyApp;
