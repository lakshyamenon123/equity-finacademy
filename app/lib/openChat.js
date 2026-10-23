export const OPEN_CHAT_EVENT = "efa-open-chat";

export function openChat() {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new CustomEvent(OPEN_CHAT_EVENT));
}
