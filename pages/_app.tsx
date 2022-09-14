import "abort-controller/polyfill";

import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Root } from "../app/root";
import { wrapper } from "../app/store";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Root>
      <Component {...pageProps} />
    </Root>
  );
}

export default wrapper.withRedux(MyApp);
