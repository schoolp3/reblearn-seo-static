import { siteBaseUrl } from "@/lib/site";

export type LeadCategory =
  | "parent_evaluation"
  | "parent_intervention"
  | "adult_accommodations"
  | "district"
  | "general";

export const NEXT_STEPS: Record<
  LeadCategory,
  { path: string; label: string }
> = {
  parent_evaluation: {
    path: "/psychoeducational-evaluation",
    label: "the psychoeducational evaluation overview",
  },
  parent_intervention: {
    path: "/services#intervention",
    label: "intervention and tutorial support on the services page",
  },
  adult_accommodations: {
    path: "/contact",
    label: "contacting Dennis about accommodations testing",
  },
  district: {
    path: "/district-contracting",
    label: "the district contracting page",
  },
  general: {
    path: "/contact",
    label: "reaching Dennis through the contact page",
  },
};

export function classifyLeadTriageCategory(text: string): LeadCategory {
  const t = text.toLowerCase();
  if (!t.trim()) return "general";

  const district =
    /\b(district|school district|sped director|special education director|contractor|vendor|lea|district office)\b/.test(
      t,
    );
  if (district) return "district";

  const adultAcc =
    (/\b(adult|employee|professional license|licensing exam)\b/.test(t) &&
      /\b(accommodation|ada|disability documentation|standardized test|lsat|mcat|gre|gmat|bar exam)\b/.test(
        t,
      )) ||
    /\b(testing for accommodations|exam accommodations|accommodations testing)\b/.test(
      t,
    );
  if (adultAcc) return "adult_accommodations";

  const intervention =
    /\b(tutor|tutoring|intervention|remediation|writing support|reading support|executive function coach|homework help|academic support|tutorial)\b/.test(
      t,
    );
  if (
    intervention &&
    !/\b(iee|independent educational evaluation|evaluate|evaluation|assessment|testing battery)\b/.test(
      t,
    )
  ) {
    return "parent_intervention";
  }

  const evalSeek =
    /\b(evaluat|assessment|testing|iee|dyslexia|dysgraphia|adhd|add\b|iep|504|psychoeducational|learning disability|school psychologist|eligib)\b/.test(
      t,
    );
  if (evalSeek) return "parent_evaluation";

  return "general";
}

/** Short acknowledgements — no next-step nudge. */
function isClosingAcknowledgement(text: string): boolean {
  const t = text.trim().toLowerCase();
  return /^(thanks|thank you|thx|ty|ok|okay|got it|cool|sounds good|perfect)\.?$/i.test(
    t,
  );
}

/**
 * When true, the model may end with one calm next-step line (see triage skill text).
 * When false, answer without adding contact/scheduling CTAs unless the user explicitly asked how to reach Dennis.
 */
export function shouldSuggestLeadNextStep(
  text: string,
  category: LeadCategory,
  hasBoundary: boolean,
): boolean {
  if (hasBoundary) return false;
  const t = text.trim();
  if (t.length < 12) return false;
  if (isClosingAcknowledgement(t)) return false;

  if (category !== "general") return true;

  return /\b(how do i|how to|where do i|contact|reach|get in touch|start|begin|book|schedule|next step|consult|call|email)\b/i.test(
    t,
  );
}

export function buildTriageSkillContext(
  category: LeadCategory,
  suggestNextStep: boolean,
): string {
  const base = siteBaseUrl().replace(/\/$/, "");
  const step = NEXT_STEPS[category];
  const url = `${base}${step.path}`;

  if (!suggestNextStep) {
    return `## Service triage skill
Likely visitor intent category: "${category}" (internal label; do not quote the label to the user unless helpful).
Answer in a consultative, non-salesy way. Do **not** add a contact or scheduling call-to-action in this turn unless the user explicitly asked how to reach Dennis.
If a gentle closing fits, you may invite a follow-up question rather than pushing a next step.`;
  }

  return `## Service triage skill
Likely visitor intent category: "${category}" (internal label).
If—and only if—your reply already addressed their question, you may close with **one** calm sentence offering a next step. Do not stack multiple CTAs. Do not sound promotional.
Preferred pattern: explain first, then optionally: "A next step could be…" with a single option.
Relevant link (full URL for tap-to-open): ${url}
Describe it naturally as ${step.label}.
Skip the next-step sentence entirely if they only needed a definition or a quick clarification.`;
}
