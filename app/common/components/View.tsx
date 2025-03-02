// Copyright © 2025 Sustains AI, All Rights Reserved
import React from "react"

export const View = React.forwardRef((props: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, ref: any) => (
  <div ref = {ref} {...props} >{props.children}</div>
))
