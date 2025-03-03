// Copyright © 2025 Sustains AI, All Rights Reserved
export interface Colors {
  light: {
    primary: string;
    surfaceTint: string;
    onPrimary: string;
    primaryContainer: string;
    onPrimaryContainer: string;
    secondary: string;
    onSecondary: string;
    secondaryContainer: string;
    onSecondaryContainer: string;
    tertiary: string;
    onTertiary: string;
    tertiaryContainer: string;
    onTertiaryContainer: string;
    error: string;
    onError: string;
    errorContainer: string;
    onErrorContainer: string;
    background: string;
    onBackground: string;
    surface: string;
    onSurface: string;
    surfaceVariant: string;
    onSurfaceVariant: string;
    outline: string;
    outlineVariant: string;
    shadow: string;
    scrim: string;
    inverseSurface: string;
    inverseOnSurface: string;
    inversePrimary: string;
    primaryFixed: string;
    onPrimaryFixed: string;
    primaryFixedDim: string;
    onPrimaryFixedVariant: string;
    secondaryFixed: string;
    onSecondaryFixed: string;
    secondaryFixedDim: string;
    onSecondaryFixedVariant: string;
    tertiaryFixed: string;
    onTertiaryFixed: string;
    tertiaryFixedDim: string;
    onTertiaryFixedVariant: string;
    surfaceDim: string;
    surfaceBright: string;
    surfaceContainerLowest: string;
    surfaceContainerLow: string;
    surfaceContainer: string;
    surfaceContainerHigh: string;
    surfaceContainerHighest: string;
    black: string;
  }
}

export const colors: Colors = {
  light: {
    primary: "#36693E",
    surfaceTint: "#36693E",
    onPrimary: "#FFFFFF",
    primaryContainer: "#B8F1B9",
    onPrimaryContainer: "#002108",
    secondary: "#516351",
    onSecondary: "#FFFFFF",
    secondaryContainer: "#D4E8D1",
    onSecondaryContainer: "#0F1F11",
    tertiary: "#39656C",
    onTertiary: "#FFFFFF",
    tertiaryContainer: "#BDEAF3",
    onTertiaryContainer: "#001F24",
    error: "#BA1A1A",
    onError: "#FFFFFF",
    errorContainer: "#FFDAD6",
    onErrorContainer: "#410002",
    background: "#fcfcfc",
    onBackground: "#181D18",
    surface: "#F7FBF2",
    onSurface: "#181D18",
    surfaceVariant: "#DDE5D9",
    onSurfaceVariant: "#424940",
    outline: "#727970",
    outlineVariant: "#C1C9BE",
    shadow: "#000000",
    scrim: "#000000",
    inverseSurface: "#2D322C",
    inverseOnSurface: "#EEF2E9",
    inversePrimary: "#9CD49F",
    primaryFixed: "#B8F1B9",
    onPrimaryFixed: "#002108",
    primaryFixedDim: "#9CD49F",
    onPrimaryFixedVariant: "#1D5128",
    secondaryFixed: "#D4E8D1",
    onSecondaryFixed: "#0F1F11",
    secondaryFixedDim: "#B8CCB5",
    onSecondaryFixedVariant: "#3A4B3A",
    tertiaryFixed: "#BDEAF3",
    onTertiaryFixed: "#001F24",
    tertiaryFixedDim: "#A1CED6",
    onTertiaryFixedVariant: "#1F4D54",
    surfaceDim: "#D7DBD3",
    surfaceBright: "#F7FBF2",
    surfaceContainerLowest: "#FFFFFF",
    surfaceContainerLow: "#F1F5EC",
    surfaceContainer: "#EBEFE7",
    surfaceContainerHigh: "#E5E9E1",
    surfaceContainerHighest: "#E0E4DB",
    black: "#000000"
  }
};

export const themeOptions = {
  palette: {
    mode: "light",
    primary: {
      main: "#0cbf53",
      contrastText: "rgba(255,255,255,0.95)"
    },
    secondary: {
      main: "#516351"
    },
    info: {
      main: "#0288d1"
    }
  }
};
