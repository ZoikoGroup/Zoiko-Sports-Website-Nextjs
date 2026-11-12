"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { useState, type FormEvent, type ReactNode } from "react";
import { ArrowLeft, Check } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

const EASE = [0.16, 1, 0.3, 1] as const;

const orgTypes = ["League / competition organizer", "Club / team", "Venue operator", "Event delivery partner", "Other"];
const timings = ["Within 3 months", "3–6 months", "6–12 months", "Not decided yet"];
const partners = ["Organizer", "Clubs", "Venue", "Officials", "Contractors"];

const inputCls =
  "mt-2 w-full rounded-lg border border-[#d6d2e2] bg-white px-3.5 py-3 text-[14.5px] text-ink outline-none transition-all duration-200 placeholder:text-ink-muted/60 hover:border-[#b9b3cc] focus:border-navy-950 focus:shadow-[0_0_0_4px_rgba(38,26,66,0.08)]";

function Field({ label, optional, children }: { label: string; optional?: string; children: ReactNode }) {
  return (
    <label className="block">
      <span className="font-heading text-[13px] font-semibold text-ink">
        {label}
        {optional && <span className="font-normal text-ink-muted"> {optional}</span>}
      </span>
      {children}
    </label>
  );
}

type Status = "idle" | "sending" | "sent" | "error";

/**
 * The site is static, so requests go to an external endpoint provided by the platform team.
 * It is set at build time (see .env.example) and is public by design: never put a secret here.
 */
const FORM_URL = process.env.NEXT_PUBLIC_FORM_ENDPOINT;

export function PilotRequest() {
  const [step, setStep] = useState(0);
  const [status, setStatus] = useState<Status>("idle");
  const [selectedPartners, setSelectedPartners] = useState<string[]>([]);
  // Step 1 unmounts when step 2 shows, so keep its answers here (also refills it on "Back").
  const [details, setDetails] = useState<Record<string, string>>({});

  const next = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!e.currentTarget.reportValidity()) return;
    setDetails(Object.fromEntries(new FormData(e.currentTarget)) as Record<string, string>);
    setStep(1);
  };

  const submit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = {
      ...details,
      ...(Object.fromEntries(new FormData(e.currentTarget)) as Record<string, string>),
      partners: selectedPartners,
    };

    // Only show "sent" once the endpoint has confirmed it; never a fake success.
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
    <section id="pilot-request" className="bg-[#efece5] py-20 lg:py-28">
      <div className="container-page grid items-start gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <Reveal>
          <h2 className="text-[clamp(2rem,3.6vw,2.6rem)] font-bold leading-[1.1] tracking-tight text-ink">
            Send a pilot request
          </h2>
          <p className="mt-3 text-[16px] leading-relaxed text-ink-muted">
            About two to four minutes. Please don’t include medical, safeguarding, athlete, participant, credential, or
            incident information.
          </p>
          <p className="mt-4 text-[13.5px] text-ink-muted">
            Fields marked optional can be left blank. Everything else helps us prepare a useful scoping conversation.
          </p>
          <div className="group relative mt-6 overflow-hidden rounded-2xl">
            <Image
              src="/images/home/pilot-coach.webp"
              alt="Coach briefing a youth team on the pitch"
              width={461}
              height={280}
              sizes="(min-width: 1024px) 460px, 100vw"
              className="h-auto w-full transition-transform duration-[1.2s] ease-out group-hover:scale-105"
            />
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/70 to-transparent" />
            <p className="absolute inset-x-4 bottom-4 text-[13.5px] font-medium leading-snug text-white">
              Start with one event or fixture block, and the people who already run it.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1} y={40}>
          <div
            className="overflow-hidden rounded-3xl border border-black/[0.07] bg-[#fbfaf7] p-6 shadow-[0_40px_80px_-30px_rgba(29,20,51,0.3)] sm:p-8"
          >
            {/* Progress */}
            <div className="grid grid-cols-2 gap-2" aria-hidden="true">
              {[0, 1].map((i) => (
                <div key={i} className="h-1.5 overflow-hidden rounded-full bg-[#e3dfd6]">
                  <motion.div
                    className="h-full rounded-full bg-navy-950"
                    initial={false}
                    animate={{ width: step >= i || status === "sent" ? "100%" : "0%" }}
                    transition={{ duration: 0.6, ease: EASE }}
                  />
                </div>
              ))}
            </div>

            <AnimatePresence mode="wait" initial={false}>
              {status === "sent" ? (
                <motion.div
                  key="sent"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, ease: EASE }}
                  className="py-14 text-center"
                  role="status"
                >
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 260, damping: 16, delay: 0.1 }}
                    className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-brand-yellow text-ink"
                  >
                    <Check className="h-8 w-8" strokeWidth={3} />
                  </motion.span>
                  <h3 className="mt-6 text-[24px] font-bold text-ink">Request received</h3>
                  <p className="mx-auto mt-2 max-w-sm text-[14.5px] text-ink-muted">
                    Thank you. We’ll review the details and come back to you to arrange a scoping conversation.
                  </p>
                </motion.div>
              ) : step === 0 ? (
                <motion.form
                  key="step-1"
                  onSubmit={next}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ duration: 0.35, ease: EASE }}
                  noValidate={false}
                >
                  <p className="mt-6 text-[12.5px] font-semibold text-brand-blue">Step 1 of 2</p>
                  <h3 className="mt-1 text-[20px] font-bold text-ink">About you and your organization</h3>
                  <div className="mt-6 grid gap-5 sm:grid-cols-2">
                    <Field label="Work email">
                      <input name="email" type="email" required autoComplete="email" defaultValue={details.email} className={inputCls} />
                    </Field>
                    <Field label="Full name">
                      <input name="name" required autoComplete="name" defaultValue={details.name} className={inputCls} />
                    </Field>
                    <Field label="Organization name">
                      <input name="organization" required autoComplete="organization" defaultValue={details.organization} className={inputCls} />
                    </Field>
                    <Field label="Organization type">
                      <select name="organizationType" required defaultValue={details.organizationType ?? ""} className={inputCls}>
                        <option value="" disabled>
                          Select one
                        </option>
                        {orgTypes.map((o) => (
                          <option key={o}>{o}</option>
                        ))}
                      </select>
                    </Field>
                    <Field label="Country / primary market">
                      <input name="country" required autoComplete="country-name" defaultValue={details.country} className={inputCls} />
                    </Field>
                    <Field label="Sport / competition type">
                      <input name="sport" required defaultValue={details.sport} className={inputCls} />
                    </Field>
                    <div className="sm:col-span-2">
                      <Field label="Phone" optional="(optional, international format)">
                        <input name="phone" type="tel" autoComplete="tel" defaultValue={details.phone} placeholder="+1 555 000 0000" className={inputCls} />
                      </Field>
                    </div>
                  </div>
                  <div className="mt-7 flex justify-end">
                    <button
                      type="submit"
                      className="rounded-lg bg-navy-950 px-7 py-3 font-heading text-[14.5px] font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_24px_-10px_rgba(29,20,51,0.7)]"
                    >
                      Continue
                    </button>
                  </div>
                </motion.form>
              ) : (
                <motion.form
                  key="step-2"
                  onSubmit={submit}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 30 }}
                  transition={{ duration: 0.35, ease: EASE }}
                >
                  <p className="mt-6 text-[12.5px] font-semibold text-brand-blue">Step 2 of 2</p>
                  <h3 className="mt-1 text-[20px] font-bold text-ink">About the event</h3>
                  <div className="mt-6 grid gap-5 sm:grid-cols-2">
                    <Field label="Event or fixture block">
                      <input name="event" required placeholder="e.g. Spring fixture block" className={inputCls} />
                    </Field>
                    <Field label="Target timing">
                      <select name="timing" required defaultValue="" className={inputCls}>
                        <option value="" disabled>
                          Select one
                        </option>
                        {timings.map((t) => (
                          <option key={t}>{t}</option>
                        ))}
                      </select>
                    </Field>
                    <fieldset className="sm:col-span-2">
                      <legend className="font-heading text-[13px] font-semibold text-ink">
                        Organizations involved <span className="font-normal text-ink-muted">(optional)</span>
                      </legend>
                      <div className="mt-2 flex flex-wrap gap-2">
                        {partners.map((p) => {
                          const on = selectedPartners.includes(p);
                          return (
                            <button
                              type="button"
                              key={p}
                              aria-pressed={on}
                              onClick={() =>
                                setSelectedPartners((cur) => (on ? cur.filter((x) => x !== p) : [...cur, p]))
                              }
                              className={`inline-flex items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-[13px] font-medium transition-all duration-200 ${
                                on
                                  ? "border-navy-950 bg-navy-950 text-white"
                                  : "border-[#d6d2e2] bg-white text-ink hover:border-navy-950"
                              }`}
                            >
                              {on && <Check className="h-3.5 w-3.5" strokeWidth={3} />}
                              {p}
                            </button>
                          );
                        })}
                      </div>
                    </fieldset>
                    <div className="sm:col-span-2">
                      <Field label="Coordination problem" optional="(optional)">
                        <textarea
                          name="problem"
                          rows={4}
                          placeholder="What goes wrong today between the organizations involved?"
                          className={`${inputCls} resize-y`}
                        />
                      </Field>
                    </div>
                    <label className="flex gap-3 text-[13px] leading-snug text-ink-muted sm:col-span-2">
                      <input type="checkbox" required className="mt-0.5 h-4 w-4 shrink-0 accent-[#261a42]" />
                      I agree that Zoiko Sports may use these details to respond to this request, as described in the
                      Privacy Policy.
                    </label>
                  </div>

                  {status === "error" && (
                    <p role="alert" className="mt-5 rounded-lg bg-red-50 px-4 py-3 text-[13.5px] text-red-700">
                      Your request could not be sent. Please try again, or contact us through the Contact page.
                    </p>
                  )}

                  <div className="mt-7 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => setStep(0)}
                      className="inline-flex items-center gap-2 font-heading text-[14px] font-semibold text-ink transition-colors hover:text-brand-blue"
                    >
                      <ArrowLeft className="h-4 w-4" /> Back
                    </button>
                    <button
                      type="submit"
                      disabled={status === "sending"}
                      className="rounded-lg bg-brand-yellow px-7 py-3 font-heading text-[14.5px] font-semibold text-ink shadow-[0_12px_28px_-10px_rgba(254,207,35,0.9)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-yellow-hover disabled:opacity-60"
                    >
                      {status === "sending" ? "Sending…" : "Send request"}
                    </button>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
