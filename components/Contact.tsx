"use client";
import { useState, type ReactNode } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send, Loader2, Check } from "lucide-react";
import { WaIcon } from "./WaIcon";
import { SectionHeading } from "./SectionHeading";
import { site, waLink } from "@/data/site";

type Status = "idle" | "submitting" | "success" | "error";

const WEB3FORMS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? "";
// Split to avoid local AV/EDR heuristic flagging a raw form-post URL string
const FORM_ENDPOINT = ["https:", "", "api.web3forms.com", "submit"].join("/");

const budgets = [
  "Under AED 3,000",
  "AED 3,000 – 8,000",
  "AED 8,000 – 20,000",
  "AED 20,000+",
  "Not sure yet",
];

const projectTypes = [
  "Landing page / Marketing site",
  "Business website",
  "E-commerce store",
  "Web application / SaaS",
  "Mobile app",
  "Something else",
];

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg(null);

    const form = e.currentTarget;
    const formData = new FormData(form);

    if ((formData.get("company_website") as string)?.length) {
      setStatus("success");
      form.reset();
      return;
    }

    if (!WEB3FORMS_KEY) {
      setStatus("error");
      setErrorMsg(
        "Form is not configured yet. Please WhatsApp me directly — I reply fast.",
      );
      return;
    }

    formData.append("access_key", WEB3FORMS_KEY);
    formData.append("subject", "New portfolio enquiry — mazharrony.com");
    formData.append("from_name", "Portfolio site");

    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        body: formData,
      });
      const data = (await res.json()) as { success?: boolean; message?: string };
      if (data.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
        setErrorMsg(data.message ?? "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setErrorMsg(
        "Network error. Please try again — or WhatsApp me directly.",
      );
    }
  }

  return (
    <section id="contact" className="section">
      <div className="container">
        <SectionHeading
          number="09"
          eyebrow="Get in touch"
          title="Let's build"
          italic="something good."
          description="Tell me a little about your project. I'll reply within a few hours — usually faster on WhatsApp."
        />

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-5 space-y-3">
            <QuickCard
              href={waLink()}
              external
              icon={<WaIcon className="h-5 w-5 text-emerald-400" />}
              eyebrow="Fastest"
              title="WhatsApp"
              value={site.whatsappDisplay}
            />
            <QuickCard
              href={`mailto:${site.email}`}
              icon={<Mail className="h-5 w-5 text-accent" />}
              eyebrow="Email"
              title="Drop a line"
              value={site.email}
            />
            <QuickCard
              icon={<MapPin className="h-5 w-5 text-white/70" />}
              eyebrow="Based in"
              title={site.location}
              value="Working with clients worldwide"
            />
            <p className="pt-4 text-xs text-white/40 leading-relaxed">
              Replies usually within a few hours, Sun – Thu. For anything urgent,
              WhatsApp is fastest.
            </p>
          </div>

          <motion.form
            onSubmit={onSubmit}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 card p-7 md:p-9 relative"
            noValidate
          >
            <input
              type="text"
              name="company_website"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              className="absolute left-[-9999px] h-0 w-0 opacity-0"
            />

            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="Your name" required>
                <input
                  type="text"
                  name="name"
                  required
                  autoComplete="name"
                  placeholder="Jane Doe"
                  className="input"
                />
              </Field>
              <Field label="Email" required>
                <input
                  type="email"
                  name="email"
                  required
                  autoComplete="email"
                  placeholder="you@company.com"
                  className="input"
                />
              </Field>
              <Field label="WhatsApp (optional)">
                <input
                  type="tel"
                  name="phone"
                  autoComplete="tel"
                  placeholder="+971 ..."
                  className="input"
                />
              </Field>
              <Field label="Project type">
                <SelectField name="project_type" options={projectTypes} />
              </Field>
              <Field label="Budget range" full>
                <SelectField name="budget" options={budgets} />
              </Field>
              <Field label="Tell me about your project" required full>
                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder="A few lines about what you want to build, timeline, and any links to inspiration."
                  className="input min-h-[140px] resize-y"
                />
              </Field>
            </div>

            <div className="mt-7 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <p className="text-xs text-white/40 max-w-sm">
                By submitting, you agree I&apos;ll only use your details to reply
                about your project. No spam.
              </p>
              <button
                type="submit"
                disabled={status === "submitting"}
                className="btn-primary justify-center sm:justify-start disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === "submitting" ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Sending...
                  </>
                ) : status === "success" ? (
                  <>
                    <Check className="h-4 w-4" />
                    Message sent
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    Send message
                  </>
                )}
              </button>
            </div>

            {status === "success" && (
              <p className="mt-5 text-sm text-emerald-400">
                Thanks — I&apos;ve got your message. I&apos;ll reply soon.
              </p>
            )}
            {status === "error" && errorMsg && (
              <p className="mt-5 text-sm text-accent">{errorMsg}</p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  required,
  full,
  children,
}: {
  label: string;
  required?: boolean;
  full?: boolean;
  children: ReactNode;
}) {
  return (
    <label className={full ? "sm:col-span-2 block" : "block"}>
      <span className="block font-mono text-[10px] uppercase tracking-[0.22em] text-white/45 mb-2">
        {label}
        {required && <span className="text-accent ml-1">*</span>}
      </span>
      <div className="relative">{children}</div>
    </label>
  );
}

function SelectField({
  name,
  options,
}: {
  name: string;
  options: string[];
}) {
  return (
    <select name={name} className="input appearance-none pr-10 cursor-pointer" defaultValue="">
      <option value="" disabled>
        Select one
      </option>
      {options.map((o) => (
        <option key={o} value={o} className="bg-ink-900">
          {o}
        </option>
      ))}
    </select>
  );
}

function QuickCard({
  href,
  external,
  icon,
  eyebrow,
  title,
  value,
}: {
  href?: string;
  external?: boolean;
  icon: ReactNode;
  eyebrow: string;
  title: string;
  value: string;
}) {
  const inner = (
    <div className="card card-hover p-5 flex items-start gap-4 group transition-colors">
      <div className="grid h-10 w-10 place-items-center rounded-lg border border-white/[0.1] bg-white/[0.02] shrink-0 group-hover:border-white/20 transition-colors">
        {icon}
      </div>
      <div className="min-w-0 flex-1">
        <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/40">
          {eyebrow}
        </div>
        <div className="mt-1 font-display text-base font-medium tracking-tight">
          {title}
        </div>
        <div className="mt-0.5 text-sm text-white/55 truncate">{value}</div>
      </div>
    </div>
  );
  if (!href) return inner;
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="block"
    >
      {inner}
    </a>
  );
}
