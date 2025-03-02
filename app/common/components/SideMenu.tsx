// Copyright © 2025 Sustains AI, All Rights Reserved
import * as React from "react";
import { styled } from "@mui/material/styles";
import Avatar from "@mui/material/Avatar";
import MuiDrawer, { drawerClasses } from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import MenuContent from "./MenuContent";
import OptionsMenu from "./OptionsMenu";
import { Label } from "./Label";
import { useSelector } from "react-redux";
import { theme } from "../theme";

const drawerWidth = 240;

const Drawer = styled(MuiDrawer)({
  width: drawerWidth,
  flexShrink: 0,
  boxSizing: "border-box",
  mt: 10,
  [`& .${drawerClasses.paper}`]: {
    width: drawerWidth,
    boxSizing: "border-box"
  }
});

export default function SideMenu() {

  const user = useSelector((state: any) => state.login.user) ?? {}

  const { name = "", email = "" } = user

  return (
    <Drawer
      variant = "permanent"
      sx = {{
        display: { xs: "none", md: "block" },
        [`& .${drawerClasses.paper}`]: {
          backgroundColor: "#f5f6fa"
        }
      }}
    >
      <Box
        sx = {{
          display: "flex",
          height: "4rem",
          justifyContent: "center"
        }}
      >
        <Label xl bold title = {"SANDBOX"} center />
      </Box>
      <Divider />
      <MenuContent />
      <Stack
        direction = "row"
        sx = {{
          p: 2,
          gap: 1,
          alignItems: "center",
          borderTop: "1px solid",
          borderColor: "divider"
        }}
      >
        <Avatar
          sizes = "small"
          alt = {name}
          sx = {{ width: 36, height: 36, bgcolor: theme.colors.light.primary }}
        >{name.charAt(0).toUpperCase()}</Avatar>
        <Box sx = {{ mr: "auto" }}>
          <Label m black title = {name} />
          <Label s black title = {email} />
        </Box>
        <OptionsMenu />
      </Stack>
    </Drawer>
  );
}
