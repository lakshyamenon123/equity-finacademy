"use client";

import { openChat } from "../lib/openChat";

export default function OpenChatLink({ className, children, intent = "" }) {
  return (
    <a
      href="#chat"
      data-open-chat=""
      {...(intent ? { "data-chat-intent": intent } : {})}
      className={className}
      onClick={(event) => {
        event.preventDefault();
        openChat(intent ? { intent } : undefined);
      }}
    >
      {children}
    </a>
  );
}
