"use client";

import emailjs from "@emailjs/browser";
import {
  ArrowUpRight,
  AtSign,
  Loader2,
  type LucideIcon,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  Send,
  User,
} from "lucide-react";
import { type FormEvent, useRef, useState } from "react";
import toast from "react-hot-toast";
import SectionHead from "./SectionHead";
import SectionTitle from "./SectionTitle";

const SERVICE_ID = "your_service_id";
const TEMPLATE_ID = "template_erxssvr";
const PUBLIC_KEY = "HqYxmPToHpnMf5eMz";

type ContactInfo = {
  icon: LucideIcon;
  label: string;
  value: string;
  href?: string;
  tone: string;
};

const contactInfo: ContactInfo[] = [
  {
    icon: Mail,
    label: "Email",
    value: "abutaherh27@gmail.com",
    href: "mailto:abutaherh27@gmail.com",
    tone: "from-sky-500/25 to-sky-500/5 text-sky-400 ring-sky-400/30",
  },
  {
    icon: Phone,
    label: "Phone / WhatsApp",
    value: "+880 1956156665",
    href: "tel:+8801956156665",
    tone: "from-emerald-500/25 to-emerald-500/5 text-emerald-400 ring-emerald-400/30",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Bangladesh",
    tone: "from-violet-500/25 to-violet-500/5 text-violet-400 ring-violet-400/30",
  },
];

const fieldBase =
  "w-full rounded-lg border border-white/10 bg-midnight/60 py-2.5 pl-10 pr-3 text-sm text-primary-text placeholder:text-secondary-text/60 outline-none transition duration-300 hover:border-white/20 focus:border-sky-accent/60 focus:ring-4 focus:ring-sky-accent/10";

const Label = ({
  htmlFor,
  children,
}: {
  htmlFor: string;
  children: string;
}) => (
  <label
    htmlFor={htmlFor}
    className="mb-2 block text-sm font-medium text-body-text"
  >
    {children} <span className="text-red-400">*</span>
  </label>
);

const Contact = () => {
  const props = {
    Icon: AtSign,
    text: "Contact Me",
  };

  const form = useRef<HTMLFormElement>(null);
  const [sending, setSending] = useState(false);

  const sendEmail = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current || sending) return;

    setSending(true);
    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY);
      form.current.reset();
      toast.success(
        "I got your message! I will contact you as soon as possible.",
      );
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="mb-16 md:mb-20 lg:mb-16">
      <SectionTitle {...props} />
      <SectionHead>
        Let&apos;s Work{" "}
        <span className="bg-gradient-to-r from-sky-accent to-electric bg-clip-text text-transparent">
          Together
        </span>
      </SectionHead>

      <div className="grid gap-6 lg:grid-cols-12">
        {/* Left: info */}
        <div
          className="space-y-3 lg:col-span-5"
          data-aos="fade-right"
          data-aos-delay="100"
        >
          <p className="text-[15px] leading-relaxed text-body-text">
            Have a project in mind or just want to say hello? Send me a message
            and I will get back to you as soon as possible.
          </p>

          {contactInfo.map(({ icon: Icon, label, value, href, tone }) => {
            const content = (
              <>
                <span
                  className={`grid size-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br ring-1 ${tone}`}
                >
                  <Icon size={20} />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-xs uppercase tracking-wider text-secondary-text">
                    {label}
                  </span>
                  <span className="block break-all text-[15px] font-semibold text-primary-text">
                    {value}
                  </span>
                </span>
                {href && (
                  <ArrowUpRight
                    size={16}
                    className="shrink-0 text-secondary-text opacity-50 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-sky-accent group-hover:opacity-100"
                  />
                )}
              </>
            );

            const cls =
              "group flex items-center gap-3.5 rounded-2xl border border-white/10 bg-surface/70 p-3.5 transition-all duration-300 hover:-translate-y-0.5 hover:border-sky-accent/40";

            return href ? (
              <a key={label} href={href} className={cls}>
                {content}
              </a>
            ) : (
              <div key={label} className={cls}>
                {content}
              </div>
            );
          })}
        </div>

        {/* Right: form */}
        <div
          className="lg:col-span-7"
          data-aos="fade-left"
          data-aos-delay="200"
        >
          <form
            ref={form}
            onSubmit={sendEmail}
            className="relative overflow-hidden rounded-2xl border border-white/10 bg-surface/70 p-5 sm:p-7"
          >
            {/* Top glow line + corner glow */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-sky-accent/70 via-electric/30 to-transparent"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-16 -top-16 size-48 rounded-full bg-electric/20 blur-3xl"
            />

            <div className="relative space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <Label htmlFor="client-name">Full Name</Label>
                  <div className="relative">
                    <User
                      size={16}
                      className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-secondary-text"
                    />
                    <input
                      id="client-name"
                      type="text"
                      name="client-name"
                      placeholder="Your Name"
                      autoComplete="name"
                      className={fieldBase}
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="client-email">Email</Label>
                  <div className="relative">
                    <Mail
                      size={16}
                      className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-secondary-text"
                    />
                    <input
                      id="client-email"
                      type="email"
                      name="client-email"
                      placeholder="Your Email"
                      autoComplete="email"
                      className={fieldBase}
                      required
                    />
                  </div>
                </div>
              </div>

              <div>
                <Label htmlFor="message">Message</Label>
                <div className="relative">
                  <MessageSquare
                    size={16}
                    className="pointer-events-none absolute left-3.5 top-3.5 text-secondary-text"
                  />
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about your project..."
                    rows={6}
                    className={`${fieldBase} resize-none`}
                    required
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={sending}
                className="group inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-electric to-sky-accent px-8 py-3 text-base font-semibold text-white shadow-lg shadow-electric/30 transition duration-300 hover:scale-[1.02] hover:shadow-electric/50 disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:scale-100 sm:w-auto"
              >
                {sending ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send
                      size={18}
                      className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-1"
                    />
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
