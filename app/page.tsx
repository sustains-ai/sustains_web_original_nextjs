"use client";

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react"
import { persistor, store } from "./common/store";
import { ErrorBoundary } from "./common/ErrorBoundary/ErrorBoundary";
import { ThemeProvider } from "@mui/material";
import { themeProvider } from "./common/theme";
import Home from "./home";

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ErrorBoundary>
          <ThemeProvider theme={themeProvider}>
            <Home />
          </ThemeProvider>
        </ErrorBoundary>
      </PersistGate>
    </Provider>
  );
}
