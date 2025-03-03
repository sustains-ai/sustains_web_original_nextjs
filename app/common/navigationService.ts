// Copyright © 2025 Sustains AI, All Rights Reserved
import { createBrowserHistory } from "history";

export const history = createBrowserHistory();

export const navigate = (path: string) => {
  history.push(path);
};
