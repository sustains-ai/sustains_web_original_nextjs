// Copyright © 2025 Sustains AI, All Rights Reserved
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./locales/en"

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: en
      }
    },
    lng: "en",
    interpolation: {
      escapeValue: false
    }
  });

export function strings (name: string, params: {
    [key: string]: string | number
} = {}): string {

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return i18n.t(name, params);
}
