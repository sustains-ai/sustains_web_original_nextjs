"use client"

import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import MuiCard from "@mui/material/Card";
import Checkbox from "@mui/material/Checkbox";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import { makeStyles } from "tss-react/mui";
import { loginAction } from "./redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { Label } from "../Label";
import { View } from "../View";
import { CircularProgress, IconButton, InputAdornment } from "@mui/material";
import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import { loaderSelector } from "../../loaderRedux/selectors";
import { redirect } from "next/navigation";

const Card = styled(MuiCard)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignSelf: "center",
  width: "100%",
  padding: theme.spacing(4),
  gap: theme.spacing(2),
  boxShadow:
    "hsla(220, 30%, 5%, 0.05) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.05) 0px 15px 35px -5px",
  [theme.breakpoints.up("sm")]: {
    width: "450px"
  },
  ...theme.applyStyles("dark", {
    boxShadow:
      "hsla(220, 30%, 5%, 0.5) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.08) 0px 15px 35px -5px"
  })
}));

const useStyles = makeStyles()((theme) => ({
  mainContainer: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    width: "100vw",
    height: "100vh",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.colors.light.background
  },
  button: {
    fontWeight: theme.fontWeight.bold,
    minHeight: "48px",
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2)
  }
}))

export default function SignIn() {
  const [emailError, setEmailError] = React.useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = React.useState("");
  const [passwordError, setPasswordError] = React.useState(false);
  const [passwordErrorMessage, setPasswordErrorMessage] = React.useState("");
  const [showPassword, setShowPassword] = React.useState(false);
  const { loading }: { loading: boolean } = useSelector(loaderSelector("Login"))

  const { classes } = useStyles()
  const dispatch = useDispatch()

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (emailError || passwordError) {
      return;
    }
    const data = new FormData(event.currentTarget);
    dispatch(loginAction({ email: data.get("email") as string, password: data.get("password") as string }))
  };

  const validateInputs = () => {
    const email = document.getElementById("email") as HTMLInputElement;
    const password = document.getElementById("password") as HTMLInputElement;

    let isValid = true;

    if (!email.value || !/\S+@\S+\.\S+/.test(email.value)) {
      setEmailError(true);
      setEmailErrorMessage("Please enter a valid email address.");
      isValid = false;
    } else {
      setEmailError(false);
      setEmailErrorMessage("");
    }

    if (!password.value || password.value.length < 6) {
      setPasswordError(true);
      setPasswordErrorMessage("Password must be at least 6 characters long.");
      isValid = false;
    } else {
      setPasswordError(false);
      setPasswordErrorMessage("");
    }

    return isValid;
  };

  const isLoggedIn = useSelector((state: any) => state.login.isLoggedIn)

  React.useLayoutEffect(() => {
    if (isLoggedIn) {
      redirect("/")
    }
  }, [isLoggedIn])

  return (
    <View className={classes.mainContainer}>
      <Card variant="outlined">
        <Label black xxxl title={"Sign in"} />
        <Box
          component="form"
          onSubmit={handleSubmit}
          noValidate
          sx={{ display: "flex", flexDirection: "column", width: "100%", gap: 2 }}
        >
          <FormControl>
            <FormLabel htmlFor="email">Email</FormLabel>
            <TextField
              error={emailError}
              helperText={emailErrorMessage}
              id="email"
              type="email"
              name="email"
              placeholder="your@email.com"
              autoComplete="email"
              autoFocus
              required
              fullWidth
              variant="outlined"
              color={emailError ? "error" : "primary"}
            />
          </FormControl>
          <FormControl>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <FormLabel htmlFor="password">Password</FormLabel>
              {/* <Link
                component = "button"
                type = "button"
                onClick = {() => {}}
                variant = "body2"
                sx = {{ alignSelf: "baseline" }}
              >
              Forgot your password?
              </Link> */}
            </Box>
            <TextField
              error={passwordError}
              helperText={passwordErrorMessage}
              name="password"
              placeholder="••••••"
              type={showPassword ? "text" : "password"}
              id="password"
              autoComplete="current-password"
              autoFocus
              required
              fullWidth
              variant="outlined"
              color={passwordError ? "error" : "primary"}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                      {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </FormControl>
          {/* <FormControlLabel
            control = {<Checkbox value = "remember" />}
            label = "Remember me"
          /> */}
          <Button type="submit" fullWidth variant="contained" onClick={validateInputs} className={classes.button} >
            {loading ? <CircularProgress size={24} color="inherit" /> : "Sign in"}
          </Button>
          <Typography sx={{ textAlign: "center" }}>
            Don&apos;t have an account?{" "}
            <span>
              <Link href="/signup" style={{ textDecoration: "underline", cursor: "pointer" }}>
                Sign up
              </Link>
            </span>
          </Typography>
        </Box>
      </Card>
    </View>
  );
}
