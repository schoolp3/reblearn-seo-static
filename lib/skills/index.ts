import {
  buildBoundarySkillInstruction,
  detectBoundaryKind,
} from "@/lib/skills/boundary-skill";
import { FAQ_SKILL_PROMPT } from "@/lib/skills/faq-skill";
import { HANDOFF_SKILL_PROMPT } from "@/lib/skills/handoff-skill";
import {
  buildTriageSkillContext,
  classifyLeadTriageCategory,
  shouldSuggestLeadNextStep,
} from "@/lib/skills/triage-skill";

/**
 * Composes all lightweight "skills" into one server-only block for the system prompt.
 */
export function buildSkillsServerContext(lastUserText: string): string {
  const boundaryKind = detectBoundaryKind(lastUserText);
  const boundaryInstruction = buildBoundarySkillInstruction(boundaryKind);

  if (boundaryKind === "crisis") {
    return boundaryInstruction;
  }

  const hasBoundary = boundaryKind !== null;
  const category = classifyLeadTriageCategory(lastUserText);
  const suggestNext = shouldSuggestLeadNextStep(
    lastUserText,
    category,
    hasBoundary,
  );

  const parts: string[] = [];
  if (boundaryInstruction) parts.push(boundaryInstruction);
  parts.push(FAQ_SKILL_PROMPT);
  parts.push(HANDOFF_SKILL_PROMPT);
  parts.push(buildTriageSkillContext(category, suggestNext));

  return parts.join("\n\n---\n\n");
}

export type { LeadCategory } from "@/lib/skills/triage-skill";
