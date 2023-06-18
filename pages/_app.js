import { Provider } from "react-redux";
import { store } from "../store/store";
// import { createContext } from 'react';
import "../styles/globals.css";
import "../styles/bootstrap.min.css";
import "../styles/style.css";
import "../styles/plugins.css";
import "../styles/responsive.css";
import "../styles/account.css";
import "../styles/shop.css";
import "../styles/tracking.css";
import "../styles/index.css";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
