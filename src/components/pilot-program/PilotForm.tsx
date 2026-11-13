"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { useState, type FormEvent, type ReactNode } from "react";
import { Check } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { Photo, cream, sectionPad, wrap } from "./shared";

const EASE = [0.16, 1, 0.3, 1] as const;

/** External form endpoint from the platform team (static site: there is no /api route). See .env.example. */
const FORM_URL = process.env.NEXT_PUBLIC_FORM_ENDPOINT;

const orgTypes = ["League / competition organizer", "Club / team", "Venue operator", "Event delivery partner", "Other"];
const timings = ["Next 30 days", "31–90 days", "3–6 months", "6+ months", "Exploring"];
const challenges = [
  "Schedule changes",
  "Venue readiness",
  "Cross-org approvals",
  "Event-day exceptions",
  "Handoffs",
  "Records & review",
  "Other",
];
const involvement = ["Yes", "No", "Not yet known"];
// NOTE: the design only shows the default option of these two dropdowns; review the rest before launch.
const pilotUsers = ["Not sure yet", "1–10", "11–50", "51–200", "More than 200"];
const integrationNeeds = ["Not known", "None needed", "Scheduling system", "Venue systems", "Other"];

const inputCls =
  "mt-2 h-12 w-full rounded-md border border-[#DEDAD0] bg-white px-4 text-[14.5px] text-ink outline-none transition-all duration-200 placeholder:text-ink/45 hover:border-[#c9c4b6] focus:border-[#24163A] focus:shadow-[0_0_0_4px_rgba(36,22,58,0.08)]";

const pillCls =
  "inline-flex cursor-pointer items-center gap-2.5 rounded-full border border-[#DEDAD0] bg-white px-4 py-2.5 font-heading text-[14px] font-medium text-ink transition-all duration-200 hover:border-[#24163A] has-[:checked]:border-[#24163A] has-[:checked]:bg-[#24163A] has-[:checked]:text-white has-[:focus-visible]:shadow-[0_0_0_4px_rgba(36,22,58,0.12)]";

function Group({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="mt-7">
      <p className="text-[12px] font-bold uppercase tracking-[0.1em] text-ink/70">{title}</p>
      {children}
    </div>
  );
}

function Field({ label, required, children }: { label: string; required?: boolean; children: ReactNode }) {
  return (
    <label className="block">
      <span className="text-[13px] font-semibold text-ink/60">
        {label}
        {required && " *"}
      </span>
      {children}
    </label>
  );
}

type Status = "idle" | "sending" | "sent" | "error";

export function PilotForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [challengeError, setChallengeError] = useState(false);

  const submit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const selected = form.getAll("challenges") as string[];
    // Browsers can't require "at least one" checkbox natively, so check it here.
    if (!selected.length) {
      setChallengeError(true);
      return;
    }
    setChallengeError(false);

    const data = { ...(Object.fromEntries(form) as Record<string, string>), challenges: selected };
    if (!FORM_URL) {
      console.error("NEXT_PUBLIC_FORM_ENDPOINT is not set, so the pilot request cannot be sent.");
      setStatus("error");
      return;
    }
    setStatus("sending");
    try {
      const res = await fetch(FORM_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      setStatus(res.ok ? "sent" : "error");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="scope-a-pilot" className={`scroll-mt-24 bg-white ${sectionPad}`}>
      <div className={`${wrap} grid gap-10 lg:grid-cols-[496px_1fr] lg:gap-6`}>
        {/* Photo starts level with the first form group, as in the design */}
        <Reveal delay={0.1} className="hidden lg:block lg:pt-[228px]">
          <Photo
            src="/images/pilot-program/form-tennis-serve.webp"
            alt="Tennis player in turquoise reaching up to serve on a clay court"
            sizes="496px"
            className="h-full min-h-[600px] w-full"
          />
        </Reveal>

        <Reveal>
          <p className="text-[12px] font-bold uppercase tracking-[0.14em] text-ink/70">Scope a pilot</p>
          <h2 className="mt-4 text-[clamp(1.75rem,3.2vw,2.35rem)] font-bold leading-[1.2] tracking-tight text-ink">
            Tell us about your organization and the event workflow you want to evaluate.
          </h2>
          <p className="mt-4 text-[15.5px] text-ink-muted">
            This request begins a conversation; it does not confirm a pilot place. Typical completion time is 2–4
            minutes.
          </p>

          <AnimatePresence mode="wait" initial={false}>
            {status === "sent" ? (
              <motion.div
                key="sent"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: EASE }}
                className={`mt-10 rounded-2xl border border-[#DEDAD0] ${cream} px-6 py-14 text-center`}
                role="status"
              >
                <span className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-brand-yellow text-ink">
                  <Check className="h-8 w-8" strokeWidth={3} />
                </span>
                <h3 className="mt-6 text-[24px] font-bold text-ink">Request received</h3>
                <p className="mx-auto mt-2 max-w-sm text-[14.5px] text-ink-muted">
                  Thank you. We’ll review the details and come back to you to arrange a scoping conversation.
                </p>
              </motion.div>
            ) : (
              <motion.form key="form" onSubmit={submit} exit={{ opacity: 0, y: -10 }}>
                <Group title="Who should we contact">
                  <div className="mt-3 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                    <Field label="Work email" required>
                      <input
                        type="email"
                        name="email"
                        required
                        autoComplete="email"
                        placeholder="you@organization.com"
                        className={inputCls}
                      />
                    </Field>
                    <Field label="Full name" required>
                      <input name="name" required autoComplete="name" placeholder="Jordan Reyes" className={inputCls} />
                    </Field>
                  </div>
                </Group>

                <Group title="Your organization">
                  <div className="mt-3 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                    <Field label="Organization name" required>
                      <input
                        name="organization"
                        required
                        autoComplete="organization"
                        placeholder="Riverside League"
                        className={inputCls}
                      />
                    </Field>
                    <Field label="Organization type" required>
                      <select name="organizationType" required defaultValue="" className={inputCls}>
                        <option value="" disabled>
                          Select one
                        </option>
                        {orgTypes.map((t) => (
                          <option key={t}>{t}</option>
                        ))}
                      </select>
                    </Field>
                    <Field label="Country / market" required>
                      <input
                        name="country"
                        required
                        autoComplete="country-name"
                        placeholder="e.g. United States"
                        className={inputCls}
                      />
                    </Field>
                    <Field label="Sport or competition type" required>
                      <input name="sport" required placeholder="e.g. Youth soccer league" className={inputCls} />
                    </Field>
                  </div>
                </Group>

                <Group title="Event & coordination challenge">
                  <fieldset className="mt-3">
                    <legend className="text-[13px] font-semibold text-ink/60">When is the event? *</legend>
                    <div className="mt-2 flex flex-wrap gap-2.5">
                      {timings.map((t, i) => (
                        <label key={t} className={pillCls}>
                          <input
                            type="radio"
                            name="timing"
                            value={t}
                            required={i === 0}
                            className="h-4 w-4 accent-brand-yellow"
                          />
                          {t}
                        </label>
                      ))}
                    </div>
                  </fieldset>

                  <fieldset className="mt-5" aria-describedby={challengeError ? "challenge-error" : undefined}>
                    <legend className="text-[13px] font-semibold text-ink/60">
                      Coordination challenge (select all that apply) *
                    </legend>
                    <div className="mt-2 flex flex-wrap gap-2.5">
                      {challenges.map((c) => (
                        <label key={c} className={pillCls}>
                          <input
                            type="checkbox"
                            name="challenges"
                            value={c}
                            onChange={() => setChallengeError(false)}
                            className="h-4 w-4 accent-brand-yellow"
                          />
                          {c}
                        </label>
                      ))}
                    </div>
                    {challengeError && (
                      <p id="challenge-error" role="alert" className="mt-2 text-[13px] text-red-700">
                        Select at least one coordination challenge.
                      </p>
                    )}
                  </fieldset>

                  <label className="mt-5 block">
                    <span className="text-[13px] font-semibold text-ink/60">
                      What are you trying to improve? *
                      <br />
                      (max 500 characters)
                    </span>
                    <textarea
                      name="problem"
                      required
                      maxLength={500}
                      rows={4}
                      placeholder="Describe the coordination gap in your own words."
                      className={`${inputCls} h-auto resize-y py-3`}
                    />
                  </label>

                  <p className={`mt-4 rounded-md border border-[#DEDAD0] ${cream} px-4 py-4 text-[13px] leading-[1.7] text-ink-muted`}>
                    Do not include athlete medical details, safeguarding information, credentials, individual incident
                    reports or sensitive participant information in your request.
                  </p>

                  <fieldset className="mt-5">
                    <legend className="text-[13px] font-semibold text-ink/60">
                      Are other organizations (venue, club, partner) already involved? *
                    </legend>
                    <div className="mt-2 flex flex-wrap gap-2.5">
                      {involvement.map((o, i) => (
                        <label key={o} className={pillCls}>
                          <input
                            type="radio"
                            name="othersInvolved"
                            value={o}
                            required={i === 0}
                            className="h-4 w-4 accent-brand-yellow"
                          />
                          {o}
                        </label>
                      ))}
                    </div>
                  </fieldset>
                </Group>

                <Group title="Optional context">
                  <div className="mt-3 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                    <Field label="Approx. pilot users">
                      <select name="pilotUsers" defaultValue={pilotUsers[0]} className={inputCls}>
                        {pilotUsers.map((u) => (
                          <option key={u}>{u}</option>
                        ))}
                      </select>
                    </Field>
                    <Field label="Integration need">
                      <select name="integration" defaultValue={integrationNeeds[0]} className={inputCls}>
                        {integrationNeeds.map((n) => (
                          <option key={n}>{n}</option>
                        ))}
                      </select>
                    </Field>
                    <Field label="Phone (optional)">
                      <input
                        type="tel"
                        name="phone"
                        autoComplete="tel"
                        placeholder="+1 555 000 0000"
                        className={inputCls}
                      />
                    </Field>
                  </div>
                </Group>

                <div className="mt-7 border-t-2 border-[#24163A] pt-4">
                  <p className="text-[13px] text-ink-muted">
                    By submitting, you agree to be contacted about this request. See the{" "}
                    <Link href="/legal/privacy-policy" className="font-semibold text-[#3d2c6b] underline hover:text-brand-blue">
                      Privacy Notice
                    </Link>
                    .
                  </p>

                  {status === "error" && (
                    <p role="alert" className="mt-4 rounded-lg bg-red-50 px-4 py-3 text-[13.5px] text-red-700">
                      Something went wrong sending your request. Please try again.
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="mt-5 rounded-lg bg-brand-yellow px-7 py-3.5 font-heading text-[15.5px] font-semibold text-ink shadow-[0_12px_28px_-10px_rgba(254,207,35,0.9)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-yellow-hover disabled:opacity-60"
                  >
                    {status === "sending" ? "Sending…" : "Send pilot request"}
                  </button>
                </div>
              </motion.form>
            )}
          </AnimatePresence>
        </Reveal>
      </div>
    </section>
  );
}
