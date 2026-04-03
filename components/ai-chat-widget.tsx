"use client";

import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport } from "ai";
import { type FormEvent, type ReactNode, useEffect, useRef, useState } from "react";

const STARTERS = [
  "What service do I need?",
  "Do you do IEE evaluations?",
  "How does district contracting work?",
  "Can you help with dyslexia concerns?",
  "What is the difference between tutoring and an evaluation?",
];

function extractMessageText(message: {
  parts?: Array<{ type: string; text?: string }>;
  content?: unknown;
}): string {
  if (message.parts?.length) {
    return message.parts
      .filter((p) => p.type === "text")
      .map((p) => p.text ?? "")
      .join("");
  }
  if (typeof message.content === "string") return message.content;
  return "";
}

function linkifyText(text: string): ReactNode {
  const parts = text.split(/(https?:\/\/[^\s]+)/g);
  return parts.map((part, i) =>
    /^https?:\/\//.test(part) ? (
      <a key={i} href={part} target="_blank" rel="noopener noreferrer">
        {part}
      </a>
    ) : (
      part
    ),
  );
}

function ChatGlyph() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M4 5.5C4 4.67 4.67 4 5.5 4h13c.83 0 1.5.67 1.5 1.5v9c0 .83-.67 1.5-1.5 1.5H9l-4 3v-3H5.5A1.5 1.5 0 0 1 4 16v-10.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M8 9h8M8 12h5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function AiChatWidget() {
  const [open, setOpen] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const { messages, sendMessage, status, error } = useChat({
    transport: new DefaultChatTransport({ api: "/api/chat" }),
  });

  useEffect(() => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [messages, open, status]);

  const busy = status !== "ready";

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const text = String(fd.get("message") ?? "").trim();
    if (!text || busy) return;
    sendMessage({ text });
    e.currentTarget.reset();
  };

  return (
    <>
      <button
        type="button"
        className="reblearn-chat-toggle"
        aria-label={open ? "Close assistant" : "Open RebLearn assistant"}
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
      >
        {open ? "×" : <ChatGlyph />}
      </button>

      {open ? (
        <section className="reblearn-chat-panel" aria-label="RebLearn assistant chat">
          <div className="reblearn-chat-header">
            <div>
              <h2 className="reblearn-chat-title">RebLearn assistant</h2>
              <p className="reblearn-chat-sub">
                Calm, general information from approved site content. For anything
                personal or detailed, Dennis is the right next step.
              </p>
            </div>
            <button
              type="button"
              className="reblearn-chat-close"
              aria-label="Close chat"
              onClick={() => setOpen(false)}
            >
              ×
            </button>
          </div>

          <div className="reblearn-chat-starters">
            {STARTERS.map((label) => (
              <button
                key={label}
                type="button"
                className="reblearn-chat-chip"
                disabled={busy}
                onClick={() => sendMessage({ text: label })}
              >
                {label}
              </button>
            ))}
          </div>

          <div className="reblearn-chat-messages" ref={scrollRef}>
            {messages.length === 0 ? (
              <p
                className="reblearn-chat-msg assistant"
                style={{ opacity: 0.9 }}
              >
                Hi — I&apos;m the RebLearn website assistant. I can explain
                services, help you pick a starting point, and share how to reach
                Dennis. What brings you here today?
              </p>
            ) : null}
            {messages.map((m) => (
              <div
                key={m.id}
                className={`reblearn-chat-msg ${m.role === "user" ? "user" : "assistant"}`}
              >
                {m.parts?.length
                  ? m.parts.map((part, i) =>
                      part.type === "text" ? (
                        <span key={i}>{linkifyText(part.text ?? "")}</span>
                      ) : null,
                    )
                  : linkifyText(extractMessageText(m))}
              </div>
            ))}
          </div>

          <div className="reblearn-chat-footer">
            <p className="reblearn-chat-disclaimer">
              General informational assistant only. Not diagnosis, legal advice, or
              case-specific evaluation guidance.
            </p>
            <form className="reblearn-chat-form" onSubmit={onSubmit}>
              <input
                className="reblearn-chat-input"
                name="message"
                placeholder="Ask about services or getting started…"
                autoComplete="off"
                disabled={busy}
              />
              <button
                type="submit"
                className="reblearn-chat-send"
                disabled={busy}
              >
                Send
              </button>
            </form>
            {error ? (
              <p className="reblearn-chat-error">{error.message}</p>
            ) : null}
          </div>
        </section>
      ) : null}
    </>
  );
}
