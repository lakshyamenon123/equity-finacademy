export const DEMO_PROMPT_KEY = "efa-demo-prompt";

export function demoPromptSeen() {
  try {
    return window.localStorage.getItem(DEMO_PROMPT_KEY) === "1";
  } catch {
    return false;
  }
}

export function markDemoPromptSeen() {
  try {
    window.localStorage.setItem(DEMO_PROMPT_KEY, "1");
  } catch {
    /* private browsing can block storage */
  }
}
