// import 'bootstrap/dist/css/bootstrap.min.css';
// import { ReactQueryDevtools } from 'react-query/devtools';
// import { QueryClientProvider, QueryClient } from 'react-query';
import { Provider } from 'react-redux';
import { store } from '../store/store';
// import { createContext } from 'react';
import '../styles/globals.css';
import '../styles/bootstrap.min.css';
import '../styles/style.css';
import '../styles/plugins.css';
import '../styles/responsive.css';
import '../styles/account.css';
// import { Fragment } from 'react';
// const initialState = []
// const Shop = createContext({
//   state : initialState,
//   updateState:
// });
// const queryClient = new QueryClient();
function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
