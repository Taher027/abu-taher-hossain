"use client";

import { ArrowUpRight, Download, FolderOpen, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import profileImage from "../assets/profile.png";
import SocialLinks from "./SocialLinks";

export default function Sidebar() {
  return (
    <aside
      className="px-5 py-10
    lg:sticky
    lg:top-0
    lg:flex
    lg:h-screen
    lg:w-96
    lg:shrink-0
    lg:flex-col
    lg:justify-center
    lg:px-0
    lg:py-8"
    >
      <div className="flex flex-col items-center gap-6 text-center lg:items-start lg:text-left">
        {/* Profile Image */}
        <div className="relative mx-auto max-w-65 lg:mx-0">
          {/* Glow */}
          <div
            aria-hidden="true"
            className="absolute -inset-3 rounded-2xl bg-linear-to-br from-electric/50 via-sky-accent/30 to-violet-500/30 opacity-60 blur-2xl"
          />
          {/* Offset border */}
          <div
            aria-hidden="true"
            className="absolute inset-0 translate-x-2 translate-y-2 rounded-lg border-2 border-sky-accent/60"
          />

          <Image
            src={profileImage}
            alt="Abu Taher Hossain - Full Stack Web Developer"
            priority
            className="relative z-10 block rounded-lg ring-1 ring-white/15"
          />
        </div>

        {/* Availability */}
        <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-300">
          <span className="relative flex size-2">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex size-2 rounded-full bg-emerald-400" />
          </span>
          Available for work
        </span>

        {/* Name & Designation */}
        <div className="space-y-3">
          <h1 className="bg-linear-to-r from-white via-primary-heading to-sky-accent bg-clip-text text-4xl font-extrabold tracking-tight text-transparent">
            Abu Taher Hossain
          </h1>

          <p className="flex items-center justify-center gap-3 text-sm font-semibold uppercase tracking-[0.2em] text-sky-accent lg:justify-start">
            <span className="h-px w-8 bg-linear-to-r from-sky-accent to-transparent" />
            Full-Stack Web Developer
          </p>

          <p className="text-[15px] leading-relaxed text-body-text">
            Full-Stack Developer focused on building clean, fast, and
            user-friendly web applications.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 lg:justify-start">
          <Link
            href="/resume.pdf"
            download
            className="group inline-flex w-fit items-center gap-2 rounded-lg bg-linear-to-r from-electric to-sky-accent px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-electric/30 transition duration-300 hover:scale-[1.03] hover:shadow-electric/50"
          >
            <Download size={16} />
            Get my resume
            <ArrowUpRight
              size={15}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>

          <Link
            href="/#projects"
            className="inline-flex w-fit items-center gap-2 rounded-lg border border-white/15 px-4 py-2.5 text-sm font-semibold text-body-text transition duration-300 hover:border-sky-accent/60 hover:text-sky-accent"
          >
            <FolderOpen size={16} />
            View Projects
          </Link>
        </div>
      </div>

      {/* Divider */}
      <div
        aria-hidden="true"
        className="mt-10 h-px w-full bg-linear-to-r from-sky-accent/40 via-white/10 to-transparent"
      />

      {/* Social Links & Contact */}
      <div className="mt-6 flex items-center justify-between md:justify-evenly lg:justify-between">
        <SocialLinks />

        <Link
          href="/#contact"
          className="group inline-flex items-center gap-2 rounded-lg border border-white/10 bg-surface/60 px-3.5 py-2 text-sm font-medium text-body-text transition-all duration-300 hover:border-sky-accent/50 hover:text-sky-accent"
        >
          <Mail size={17} strokeWidth={1.8} className="text-sky-accent" />

          <span>Get in touch</span>

          <ArrowUpRight
            size={14}
            className="opacity-50 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
          />
        </Link>
      </div>
    </aside>
  );
}
