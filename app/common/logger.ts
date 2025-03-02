// Copyright © 2025 Sustains AI, All Rights Reserved
const log = (...args: any) => {
  console.log(...args);
};

const info = (...args: any) => {
  console.info(...args);
};

const error = (message: string, error: Error, additionalInfo: any = {}) => {
  console.log(message, error, additionalInfo);
};

export const logger = {
  log,
  info,
  error
};
