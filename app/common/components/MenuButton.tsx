// Copyright © 2025 Sustains AI, All Rights Reserved
import * as React from "react";
import Badge, { badgeClasses } from "@mui/material/Badge";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";

export interface MenuButtonProps extends IconButtonProps {
  readonly showBadge?: boolean;
}

export default function MenuButton({
  showBadge = false,
  ...props
}: MenuButtonProps) {
  return (
    <Badge
      color = "error"
      variant = "dot"
      invisible = {!showBadge}
      sx = {{ [`& .${badgeClasses.badge}`]: { right: 2, top: 2 } }}
    >
      <IconButton size = "small" {...props} />
    </Badge>
  );
}
