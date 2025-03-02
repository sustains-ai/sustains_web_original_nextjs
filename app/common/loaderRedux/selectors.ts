// Copyright © 2025 Sustains AI, All Rights Reserved
const defaultValue = { loading: false };

export const loaderSelector = (name: string): any => (store: any) => {

  return store.loader.loaders[name] || defaultValue;
};
