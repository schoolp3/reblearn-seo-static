import {
  convertToModelMessages,
  gateway,
  streamText,
  type UIMessage,
} from "ai";

import { buildAssistantSystemPrompt } from "@/lib/assistant-prompt";
import { getLastUserText } from "@/lib/chat-messages";
import { buildSkillsServerContext } from "@/lib/skills";

export const maxDuration = 60;

/** Default: Claude via Vercel AI Gateway (override with REBLEARN_AI_MODEL). */
const DEFAULT_GATEWAY_MODEL = "anthropic/claude-haiku-4.5";

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as { messages?: UIMessage[] };
    const messages = body.messages;

    if (!messages?.length) {
      return new Response(JSON.stringify({ error: "Missing messages" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const modelId =
      process.env.REBLEARN_AI_MODEL?.trim() || DEFAULT_GATEWAY_MODEL;

    const lastUser = getLastUserText(messages);
    const skillsContext = buildSkillsServerContext(lastUser);
    const system = buildAssistantSystemPrompt(skillsContext);

    const result = streamText({
      model: gateway(modelId),
      system,
      messages: await convertToModelMessages(messages),
    });

    return result.toUIMessageStreamResponse();
  } catch (err) {
    console.error("[api/chat]", err);
    return new Response(
      JSON.stringify({
        error:
          "The assistant is temporarily unavailable. Please email dennis@reblearn.com or call/text 669-248-6602.",
      }),
      { status: 502, headers: { "Content-Type": "application/json" } },
    );
  }
}
