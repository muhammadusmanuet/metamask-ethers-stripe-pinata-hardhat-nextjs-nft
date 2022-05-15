import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
import "remixicon/fonts/remixicon.css";
import { AppContext } from "../context/app.context";
import { useState } from "react";
import { APP_CONTEXT_INITAL_STATE } from "../constants/app.constants";

function MyApp({ Component, pageProps }) {
  const [state, setState] = useState(APP_CONTEXT_INITAL_STATE);
  return (
    <>
      <AppContext.Provider value={{ state, setState }}>
        <Component {...pageProps} />
      </AppContext.Provider>
    </>
  );
}

export default MyApp;
