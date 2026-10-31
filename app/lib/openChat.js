export const OPEN_CHAT_EVENT = "efa-open-chat";

export function openChat(detail) {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new CustomEvent(OPEN_CHAT_EVENT, { detail }));
}
