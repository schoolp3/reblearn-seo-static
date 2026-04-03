/**
 * Boundary / safety skill: flags higher-risk asks so the model holds a calm line
 * and does not simulate diagnosis, legal work, eligibility decisions, or crisis care.
 */
export type BoundaryKind =
  | "crisis"
  | "diagnosis"
  | "legal"
  | "eligibility"
  | "records"
  | null;

export function detectBoundaryKind(text: string): BoundaryKind {
  const t = text.toLowerCase();
  if (!t.trim()) return null;

  if (
    /\b(suicid|kill myself|end my life|want to die|self[- ]harm|hurt myself)\b/.test(
      t,
    )
  ) {
    return "crisis";
  }

  if (
    /\b(lawyer|attorney|sue|lawsuit|due process|idea violation|ferpa|legal action|subpoena)\b/.test(
      t,
    )
  ) {
    return "legal";
  }

  if (
    /\b(diagnos|diagnosis|do you think (he|she|they|my child|my son|my daughter)|does (he|she|they) have|is this (adhd|add|dyslexia|autism|asd)|clinical impression|disorder)\b/.test(
      t,
    )
  ) {
    return "diagnosis";
  }

  if (
    /\b(qualify for|eligible for|will (he|she|they) get|guaranteed iep|guaranteed 504|entitled to services)\b/.test(
      t,
    )
  ) {
    return "eligibility";
  }

  if (
    /\b(read (this|my)|look at (this|my)|attached (report|iep|evaluation)|interpret (these|the) (scores|results|data)|here (are|is) (the |his |her )?(scores|results))\b/.test(
      t,
    )
  ) {
    return "records";
  }

  return null;
}

export function buildBoundarySkillInstruction(kind: BoundaryKind): string {
  if (kind === "crisis") {
    return `BOUNDARY SKILL (crisis): The message may indicate self-harm or acute crisis.
You are not a crisis counselor. Respond briefly with calm empathy. Encourage contacting 988 (Suicide & Crisis Lifeline) or local emergency services (911 in the US) if there is immediate danger.
Do not pivot to evaluation scheduling. Do not assess risk level clinically.`;
  }

  if (kind === "diagnosis") {
    return `BOUNDARY SKILL (diagnosis): The visitor is asking for diagnostic judgment about a person or situation.
Respond with a brief, steady boundary: you cannot diagnose or label conditions here. Offer general education only from approved knowledge, and invite Dennis for case-specific clinical questions.
Use a natural variant of: "I can give general information, but not diagnosis or clinical judgment about a specific child or adult."`;
  }

  if (kind === "legal") {
    return `BOUNDARY SKILL (legal): The visitor is asking for legal guidance or dispute strategy.
Decline legal advice clearly and calmly. Suggest consulting a qualified attorney for legal questions. You may still describe RebLearn services at a high level from approved knowledge if relevant, without predicting legal outcomes.`;
  }

  if (kind === "eligibility") {
    return `BOUNDARY SKILL (eligibility): The visitor is asking whether someone qualifies for special education services or similar determinations.
Do not determine eligibility or predict district decisions. Explain at a high level how evaluations can inform conversations (from approved knowledge only) and that specifics belong with a qualified professional.`;
  }

  if (kind === "records") {
    return `BOUNDARY SKILL (records): The visitor is asking you to interpret confidential or case-specific records in chat.
Refuse interpretation. Use a calm variant of: "That sounds case-specific, and I don't want to guess. Dennis is the right person to review that properly."
Do not ask them to paste private records here.`;
  }

  return "";
}
