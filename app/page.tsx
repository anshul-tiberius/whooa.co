"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

// Helper Components
const Section: React.FC<React.PropsWithChildren<{ id?: string; className?: string }>> = ({ id, className, children }) => (
  <section id={id} className={`relative py-16 md:py-20 scroll-mt-24 ${className || ""}`}>
    {children}
  </section>
);

const Badge: React.FC<React.PropsWithChildren> = ({ children }) => (
  <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-white/80 shadow backdrop-blur">
    <Sparkles className="h-4 w-4 text-red-500" /> {children}
  </span>
);

// Navbar
const Navbar: React.FC = () => (
  <div className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur">
    <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
      <a href="#top" className="group inline-flex items-center gap-2">
        <div className="h-8 w-8 rounded-lg bg-red-500" />
        <span className="font-semibold tracking-tight text-white group-hover:text-red-400 transition-colors">Whoaa.co</span>
      </a>
      <nav className="hidden items-center gap-6 md:flex">
        {[
          { href: "#about", label: "About" },
          { href: "#products", label: "Products" },
          { href: "#industries", label: "Industries" },
          { href: "#logos", label: "Clients" },
          { href: "#testimonials", label: "Testimonials" },
          { href: "#contact", label: "Contact" },
        ].map((i) => (
          <a key={i.href} href={i.href} className="text-sm text-white/70 hover:text-white transition-colors">
            {i.label}
          </a>
        ))}
        <a href="#contact">
          <Button className="bg-red-500 hover:bg-red-400 text-white">Talk to Us</Button>
        </a>
      </nav>
    </div>
  </div>
);

// HERO
const Hero: React.FC = () => (
  <Section id="top" className="pt-28">
    <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 px-4 md:grid-cols-2">
      <div className="space-y-4">
        <Badge>Human-first AI Agents for brands</Badge>
        <h1 className="text-4xl font-semibold tracking-tight text-white md:text-6xl">
          Digital beings that talk, sell, teach, and help.
        </h1>
        <p className="max-w-xl text-white/70">
          Human-first AI agents that feel real — voices, faces, and personalities for truly personal interactions.
        </p>
        <div className="flex flex-wrap items-center gap-3">
          <a href="#products">
            <Button className="bg-red-500 hover:bg-red-400 text-white">
              Explore Suite <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </a>
          <a href="#about">
            <Button variant="outline" className="border-white/20 bg-white/5 text-white hover:bg-white/10">
              How it works
            </Button>
          </a>
        </div>
        <div className="mt-4 flex items-center gap-4 text-white/60">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-red-400" /> Human-like
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-red-400" /> Omnichannel
          </div>
        </div>
      </div>
      <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="relative">
        {/* Minimal Hero Visual: single premium shot */}
        <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
          <img src="/hero-whoaa.jpg" alt="Whoaa AI Agent — premium visual" className="h-full w-full object-cover" />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        </div>
      </motion.div>
    </div>
  </Section>
);

// CONTACT wired to Google Sheets (simple method)
const Contact: React.FC = () => {
  const [status, setStatus] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    try {
      // 1) After you create your Apps Script web app, paste its URL below:
      const scriptURL = "https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec";
      await fetch(scriptURL, { method: "POST", body: formData });
      setStatus("Thanks! We'll be in touch.");
      form.reset();
    } catch (err) {
      setStatus("Something went wrong. Please try again.");
    }
  };

  return (
    <Section id="contact">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white">Let’s build your digital workforce</h2>
            <p className="mt-3 text-white/70">Tell us about your use-case and we’ll tailor a demo.</p>
            {status && <p className="mt-4 text-sm text-red-400">{status}</p>}
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <form className="grid gap-4" onSubmit={handleSubmit}>
              <input name="name" className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-red-500" placeholder="Name" />
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <input name="email" type="email" className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-red-500" placeholder="Work email" />
                <input name="company" className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-red-500" placeholder="Company" />
              </div>
              <textarea name="usecase" className="min-h-[120px] w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-red-500" placeholder="Use-case" />
              <Button type="submit" className="bg-red-500 hover:bg-red-400 text-white">
                Request demo
              </Button>
            </form>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default function WhoaaLanding() {
  return (
    <main className="scroll-smooth bg-black text-white selection:bg-red-500/40">
      <Navbar />
      <Hero />
      {/* Add your About / Products / Industries / Logos / Testimonials sections here if you want, or keep just Hero+Contact for now */}
      <Contact />
    </main>
  );
}
