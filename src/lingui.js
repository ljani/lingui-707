import { setupI18n } from "@lingui/core";
import messagesEn from "./locales/en/messages.po";
import messagesCs from "./locales/cs/messages.po";

export function setup() {
  return setupI18n({
    locale: "cs",
    locales: ["en", "cs"],
    messages: {
      en: messagesEn.messages,
      cs: messagesCs.messages
    },
  });
}
