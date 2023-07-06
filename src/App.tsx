import React, { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import { SnackbarProvider } from "notistack";
// redux
import { Provider as ReduxProvider } from "react-redux";
import { PersistGate } from "redux-persist/lib/integration/react";
import { persistor, store } from "./redux/store";

import { Router } from "./routes";
// import { LoadingScreen } from "./components/LoadingScreen";
// import "./App.css";

function App() {
  return (
    <React.StrictMode>
      <SnackbarProvider>
        <Suspense fallback={<div>Loading ...</div>}>
          <ReduxProvider store={store}>
            <PersistGate persistor={persistor} loading={<p>Loading...</p>}>
              <BrowserRouter>
                <Router />
              </BrowserRouter>
            </PersistGate>
          </ReduxProvider>
        </Suspense>
      </SnackbarProvider>
    </React.StrictMode>
  );
}

export default App;
