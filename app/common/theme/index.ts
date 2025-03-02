// Copyright © 2025 Sustains AI, All Rights Reserved
import { createTheme } from "@mui/material/styles"
import { Colors, colors, themeOptions } from "./colors"

const commonTheme: any = {
  fontFamily: "Rubik",
  fontWeight: {
    light: 400,
    regular: 400,
    medium: 600,
    bold: 700
  },
  fontSizes: {
    xs: "11px",
    s: "12px",
    m: "14px",
    l: "16px",
    xl: "18px",
    xl20: "20px",
    xl22: "22px",
    xxl: "24px",
    xxxl: "30px",
    xxxl34: "34px",
    xxxl36: "36px",
    xxxxl: "40px",
    xl5: "50px"
  }
}

export const theme = {
  ...commonTheme,
  colors
}

declare module "@mui/material/styles" {
  interface Theme {
      colors: Colors,
      fontSizes: any,
      fontFamily: string,
      fontWeight: {
          light: number,
          regular: number,
          medium: number,
          bold: number
      }
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    colors?: any,
    fontSizes?: any,
    fontFamily?: string,
    fontWeight?: {
      light: number,
      regular: number,
      medium: number,
      bold: number
  }
  }
}

export const themeProvider = createTheme({
  ...theme,
  ...themeOptions
})
