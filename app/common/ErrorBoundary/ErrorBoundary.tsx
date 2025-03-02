// Copyright © 2025 Sustains AI, All Rights Reserved
import React from "react"
import { makeStyles } from "tss-react/mui";
import { logger } from "../logger";
import { strings } from "../i18n";
import { Label, View } from "../components";

const useStyles = makeStyles()(() => ({
  mainContainer: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    width: "100vw",
    height: "100vh",
    alignItems: "center",
    justifyContent: "center"
  }
}))

class ErrorBoundaryComponent extends React.Component<any, any> {
  constructor(props: any) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(): any {
    return { hasError: true }
  }

  componentDidCatch(error: Error) {
    logger.error("Error Boundary Error", error);
  }

  render(): any {

    if (this.state.hasError) {
      return (
        <Error />
      )
    }

    return this.props.children
  }
}

export const ErrorBoundary = ErrorBoundaryComponent

const Error = () => {

  const { classes } = useStyles();

  return (
    <View className = {classes.mainContainer} >
      <Label xxl black title = {strings("somethingWentWrong")} />
    </View>
  );
};

