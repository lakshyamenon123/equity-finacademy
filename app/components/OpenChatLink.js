"use client";

import { openChat } from "../lib/openChat";

export default function OpenChatLink({ className, children }) {
  return (
    <a
      href="#chat"
      data-open-chat=""
      className={className}
      onClick={(event) => {
        event.preventDefault();
        openChat();
      }}
    >
      {children}
    </a>
  );
}
