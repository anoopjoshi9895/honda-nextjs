import App from "next/app"
import "../styles/globals.css";
import "../styles/Home.scss";
import "../styles/sass/common.scss";
import "../styles/index.scss";
import { appWithTranslation } from "next-i18next";
import "bootstrap/dist/css/bootstrap.min.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "../app/store";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

// MyApp.getInitialProps = async (ctx: any) => {
//   const appProps = await App.getInitialProps(ctx)
//   return {
//     ...appProps, pageProps: {
//     }
//   }
// }

export default appWithTranslation(MyApp);
