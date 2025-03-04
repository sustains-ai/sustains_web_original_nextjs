// Copyright © 2025 Sustains AI, All Rights Reserved
import React from "react";

export const View = React.forwardRef<
    HTMLDivElement,
    React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
>((props, ref) => (
    <div ref={ref} {...props}>
        {props.children}
    </div>
));

View.displayName = "View"; // Add display name