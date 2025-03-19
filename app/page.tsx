"use client";

import { ErrorBoundary } from "./common/ErrorBoundary/ErrorBoundary";
import { ThemeProvider } from "@mui/material";
import { themeProvider } from "./common/theme";
import Home from "./home";

export default function App() {
  return (

    <ErrorBoundary>
      <ThemeProvider theme={themeProvider}>
        <Home />
      </ThemeProvider>
    </ErrorBoundary>
  );
}
