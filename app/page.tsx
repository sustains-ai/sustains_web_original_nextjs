"use client";
import FeaturesSection from "./components/FeaturesSection";
import ProductsSection from "./components/ProductsSection";
import Testimonials from "./components/Testimonials";
import HeroSection from "./components/HeroSection";
import Quotes from "./components/Quotes";
import Sandbox from "./components/Sandbox";
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
            <HeroSection /> {/* Use the new Hero Section component */}
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
