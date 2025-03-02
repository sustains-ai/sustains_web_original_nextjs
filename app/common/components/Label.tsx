// Copyright © 2025 Sustains AI, All Rights Reserved
import React from "react";
import { makeStyles } from "tss-react/mui";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";

type labelPopsType = {
  readonly title?: any
  readonly center?: boolean
  readonly right?: boolean
  readonly white?: boolean
  readonly secondary?: boolean
  readonly primary?: boolean
  readonly black?: boolean
  readonly light?: boolean
  readonly regular?: boolean
  readonly medium?: boolean
  readonly bold?: boolean
  readonly lowerCase?: boolean
  readonly upperCase?: boolean,

  readonly xs?: boolean
  readonly s?: boolean
  readonly m?: boolean
  readonly l?: boolean
  readonly xl?: boolean
  readonly xl20?: boolean
  readonly xl22?: boolean
  readonly xxl?: boolean
  readonly xxxl?: boolean
  readonly xxxl34?: boolean,
  readonly xxxl36?: boolean,
  readonly xxxxl?: boolean
  readonly xl5?: boolean
  readonly className?: any
}

const useStyles = makeStyles()((mTheme, style: any) => ({
  labelStyle: style
}))

export const Label = ({
  title,
  center,
  right,
  white,
  secondary,
  primary,
  black,
  light,
  regular,
  medium,
  bold,
  lowerCase,
  upperCase,

  xs,
  s,
  m,
  l,
  xl,
  xl20,
  xl22,
  xxl,
  xxxl,
  xxxl34,
  xxxl36,
  xxxxl,
  xl5,
  className
}: labelPopsType) => {

  const theme = useTheme()

  // Default style
  const newStyle: any = {
    fontSize: theme.fontSizes.l,
    color: theme.colors.light.primary,
    fontFamily: theme.fontFamily,
    fontWeight: theme.fontWeight.light
  }

  lowerCase && (newStyle.textTransform = "lowercase")
  upperCase && (newStyle.textTransform = "uppercase")

  // Assign Font Colors based on type.
  white && (newStyle.color = theme.colors.light.surfaceContainerLowest)
  secondary && (newStyle.color = theme.colors.light.secondary)
  primary && (newStyle.color = theme.colors.light.primary)
  black && (newStyle.color = theme.colors.light.black)

  // Align Self
  center && (newStyle.alignSelf = newStyle.textAlign = "center")
  right && (newStyle.textAlign = "right")

  // Set font Style
  light && (newStyle.fontWeight = theme.fontWeight.light)
  regular && (newStyle.fontWeight = theme.fontWeight.regular)
  medium && (newStyle.fontWeight = theme.fontWeight.medium)
  bold && (newStyle.fontWeight = theme.fontWeight.bold)

  // Easily Set Font Sizes
  xs && (newStyle.fontSize = theme.fontSizes.xs)
  s && (newStyle.fontSize = theme.fontSizes.s)
  m && (newStyle.fontSize = theme.fontSizes.m)
  l && (newStyle.fontSize = theme.fontSizes.l)
  xl && (newStyle.fontSize = theme.fontSizes.xl)
  xl20 && (newStyle.fontSize = theme.fontSizes.xl20)
  xl22 && (newStyle.fontSize = theme.fontSizes.xl22)
  xxl && (newStyle.fontSize = theme.fontSizes.xxl)
  xxxl && (newStyle.fontSize = theme.fontSizes.xxxl)
  xxxl34 && (newStyle.fontSize = theme.fontSizes.xxxl34)
  xxxl36 && (newStyle.fontSize = theme.fontSizes.xxxl36)
  xxxxl && (newStyle.fontSize = theme.fontSizes.xxxxl)
  xl5 && (newStyle.fontSize = theme.fontSizes.xl5)

  const { classes, cx } = useStyles(newStyle)

  return <Typography style = {{ whiteSpace: "pre-line" }} className = {cx(classes.labelStyle, className)}>{title}</Typography>
}
