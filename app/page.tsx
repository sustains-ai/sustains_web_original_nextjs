"use client";
import FeaturesSection from "./common/components/FeaturesSection";
import ProductsSection from "./common/components/ProductsSection";
import Testimonials from "./common/components/Testimonials";
import HeroSection from "./common/components/HeroSection";
import Quotes from "./common/components/Quotes";
import Sandbox from "./common/components/Sandbox";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react"
import { persistor, store } from "./common/store";
import { ErrorBoundary } from "./common/ErrorBoundary/ErrorBoundary";
import { ThemeProvider } from "@mui/material";
import { themeProvider } from "./common/theme";

export default function Home() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ErrorBoundary>
          <ThemeProvider theme={themeProvider}>
            <HeroSection />
            <FeaturesSection />
            <Sandbox />
            <ProductsSection />
            <Testimonials />
            <Quotes />
          </ThemeProvider>
        </ErrorBoundary>
      </PersistGate>
    </Provider>
  );
}
