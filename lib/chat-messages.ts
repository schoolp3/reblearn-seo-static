import type { UIMessage } from "ai";

export function getLastUserText(messages: UIMessage[]): string {
  for (let i = messages.length - 1; i >= 0; i--) {
    const m = messages[i];
    if (m.role !== "user") continue;
    const parts = m.parts;
    if (parts?.length) {
      const text = parts
        .filter((p): p is { type: "text"; text: string } => p.type === "text")
        .map((p) => p.text)
        .join("");
      if (text.trim()) return text;
    }
    const legacy = (m as { content?: unknown }).content;
    if (typeof legacy === "string" && legacy.trim()) return legacy;
  }
  return "";
}
