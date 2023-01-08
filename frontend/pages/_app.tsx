import type { AppProps } from "next/app";

if (process.env.NEXT_PUBLIC_MOCK_API === "enabled") {
  require("mocks");
}

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default App;
