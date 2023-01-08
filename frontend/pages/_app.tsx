import type { AppProps } from "next/app";
import GlobalStyle from "styles/global-style";

if (process.env.NEXT_PUBLIC_MOCK_API === "enabled") {
  require("mocks");
}

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

export default App;
