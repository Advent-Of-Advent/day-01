import { AppProps } from "next/app";

import DisclaimerBar from "components/DisclaimerBar";
import MainContainer from "components/MainContainer";

import "../global.css";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <DisclaimerBar link="https://adventofadvent.com/01-minimum-viable-blog-post" />
      <MainContainer>
        <Component {...pageProps} />
      </MainContainer>
    </>
  );
};

export default App;
