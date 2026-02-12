"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Menu,
  X,
  ArrowRight,
  Terminal,
  Award,
  Cloud,
  Code2,
  Container,
  GitBranch,
  Lock,
  Eye,
} from "lucide-react";

const NAV = [
  { href: "#about", label: "about" },
  { href: "#skills", label: "skills" },
  { href: "#projects", label: "projects" },
  { href: "#certs", label: "credentials" },
  { href: "#contact", label: "contact" },
];

const SKILLS = {
  "Cloud Platforms": ["AWS", "Azure", "Google Cloud", "DigitalOcean"],
  "Infra as Code": ["Terraform", "Ansible", "CloudFormation", "Pulumi"],
  Containers: ["Docker", "Kubernetes", "Helm", "Istio"],
  "CI/CD": ["GitHub Actions", "Jenkins", "ArgoCD", "GitLab CI"],
  "Security & Net": ["IAM / RBAC", "VPC Design", "Vault", "SSL / TLS"],
  Observability: ["Prometheus", "Grafana", "ELK Stack", "Datadog"],
};

const SKILL_COLORS: Record<string, string> = {
  "Cloud Platforms": "border-sky-500/40 text-sky-300 bg-sky-500/5",
  "Infra as Code": "border-violet-500/40 text-violet-300 bg-violet-500/5",
  Containers: "border-orange-500/40 text-orange-300 bg-orange-500/5",
  "CI/CD": "border-emerald-500/40 text-emerald-300 bg-emerald-500/5",
  "Security & Net": "border-amber-500/40 text-amber-300 bg-amber-500/5",
  Observability: "border-rose-500/40 text-rose-300 bg-rose-500/5",
};

const SKILL_ICONS: Record<string, any> = {
  "Cloud Platforms": Cloud,
  "Infra as Code": Code2,
  Containers: Container,
  "CI/CD": GitBranch,
  "Security & Net": Lock,
  Observability: Eye,
};

const PROJECTS = [
  {
    title: "Multi-Cloud K8s Platform",
    slug: "multi-cloud-kubernetes-platform",
    desc: "Unified dashboard for managing Kubernetes clusters across AWS, Azure, and GCP. Centralized logging, metrics, and cost tracking.",
    tags: ["Kubernetes", "Terraform", "Go", "Prometheus"],
  },
  {
    title: "Serverless Data Pipeline",
    slug: "serverless-data-pipeline",
    desc: "Event-driven pipeline processing 1M+ events/day using Lambda, Kinesis, and DynamoDB with sub-second latency.",
    tags: ["AWS Lambda", "Kinesis", "Python"],
  },
  {
    title: "Cloud Cost Optimizer",
    slug: "infrastructure-cost-optimizer",
    desc: "Open-source CLI + dashboard that analyzes multi-cloud spending and suggests savings. Avg 35% cost reduction.",
    tags: ["Python", "React", "AWS SDK"],
  },
  {
    title: "Zero-Downtime Migration",
    slug: "zero-downtime-migration-framework",
    desc: "Framework for live-migrating databases and services across providers using blue-green deploys and automated rollback.",
    tags: ["Terraform", "Ansible", "Docker"],
  },
];

const CERTS = [
  {
    name: "AWS Solutions Architect Professional",
    org: "Amazon Web Services",
    year: "2024",
    url: "https://www.credly.com/badges/aws-solutions-architect-professional",
  },
  {
    name: "Certified Kubernetes Administrator",
    org: "CNCF",
    year: "2023",
    url: "https://www.credly.com/badges/cka",
  },
  {
    name: "GCP Professional Cloud Architect",
    org: "Google Cloud",
    year: "2023",
    url: "https://www.credential.net/google-cloud-architect",
  },
  {
    name: "Terraform Associate",
    org: "HashiCorp",
    year: "2022",
    url: "https://www.credly.com/badges/terraform-associate",
  },
  {
    name: "Azure Solutions Architect Expert",
    org: "Microsoft",
    year: "2022",
    url: "https://learn.microsoft.com/en-us/certifications/azure-solutions-architect/",
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-zinc-100 font-sans">
      {/* --- NAV --- */}
      <header className="fixed top-0 z-50 w-full bg-[#0a0a0f]/80 backdrop-blur-xl border-b border-zinc-800/50">
        <div className="mx-auto max-w-6xl flex items-center justify-between px-6 py-4">
          <a href="#" className="font-mono text-xs tracking-widest text-zinc-500 hover:text-zinc-300 transition-colors uppercase">
            Portfolio
          </a>
          <nav className="hidden md:flex gap-8">
            {NAV.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-xs text-zinc-500 hover:text-zinc-200 transition-colors font-medium tracking-wide uppercase"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <button
            className="md:hidden text-zinc-500 hover:text-zinc-300"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
        {menuOpen && (
          <nav className="md:hidden border-t border-zinc-800/50 px-6 py-4 flex flex-col gap-3 bg-[#0a0a0f]/40 backdrop-blur">
            {NAV.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="text-sm text-zinc-500 hover:text-zinc-200 py-2 font-medium"
              >
                {l.label}
              </a>
            ))}
          </nav>
        )}
      </header>

      {/* --- HERO --- */}
      <section 
        className="relative min-h-screen flex items-center justify-center px-6 pt-20 overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(10, 10, 15, 0.5) 0%, rgba(10, 10, 15, 0.7) 100%), url('https://images.unsplash.com/photo-1526374965328-7f5ae4e8a006?w=1920&h=1080&fit=crop')`
        }}
      >
        <div className="mx-auto max-w-6xl w-full text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-zinc-500 text-sm mb-6 font-mono tracking-widest">CLOUD ENGINEER</p>
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.1] mb-6 bg-clip-text text-transparent bg-gradient-to-r from-zinc-100 via-zinc-100 to-zinc-400">
              Your Name
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="max-w-2xl mx-auto text-lg text-zinc-400 leading-relaxed mb-12 font-light"
          >
            Building & managing cloud infrastructure with a focus on reliability, automation, and cost efficiency. AWS, Azure, GCP. Infrastructure as Code. Kubernetes.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35, duration: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <a
              href="#projects"
              className="group relative inline-flex items-center gap-2 bg-white text-[#0a0a0f] text-sm font-semibold px-6 py-3 rounded-lg hover:bg-zinc-100 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              View Work
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 border border-zinc-700 text-sm font-semibold px-6 py-3 rounded-lg text-zinc-300 hover:border-zinc-500 hover:text-zinc-100 hover:bg-white/[0.02] transition-all duration-200"
            >
              <Mail size={16} />
              Get in touch
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex justify-center gap-4"
          >
            {[
              { icon: Github, href: "https://github.com", label: "GitHub" },
              { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
              { icon: Mail, href: "mailto:hello@example.com", label: "Email" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.icon !== Mail ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="p-3 rounded-lg border border-zinc-800 text-zinc-500 hover:text-zinc-200 hover:border-zinc-700 hover:bg-white/[0.02] transition-all duration-200"
                aria-label={s.label}
              >
                <s.icon size={20} />
              </a>
            ))}
          </motion.div>
        </div>

        {/* Decorative gradient orbs */}
        <div className="absolute top-20 right-10 w-80 h-80 bg-sky-500/10 rounded-full blur-3xl opacity-20 pointer-events-none" />
        <div className="absolute bottom-40 left-10 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl opacity-20 pointer-events-none" />
      </section>

      {/* --- ABOUT --- */}
      <section id="about" className="px-6 py-32 border-t border-zinc-800/50">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-12">
              <div className="h-px flex-1 max-w-[50px] bg-zinc-800" />
              <span className="text-xs font-mono text-zinc-600 uppercase tracking-widest">about</span>
              <div className="h-px flex-1 max-w-[50px] bg-zinc-800" />
            </div>

            <div className="grid md:grid-cols-2 gap-16">
              <div>
                <h2 className="text-4xl font-bold leading-tight mb-6">
                  Building reliable infrastructure at scale.
                </h2>
                <p className="text-zinc-400 leading-relaxed text-base font-light">
                  Cloud infrastructure shouldn&apos;t be overcomplicated. I focus on designing systems that are observable, secure, and cost-efficient from day one.
                </p>
              </div>
              <div className="space-y-6 text-zinc-400 text-base leading-relaxed font-light">
                <p>
                  With years working across AWS, Azure, and GCP, I&apos;ve learned that the best infrastructure is the one that doesn&apos;t require constant babysitting. That&apos;s why I prioritize solid fundamentals: clear IaC, proper CI/CD pipelines, and comprehensive observability.
                </p>
                <p>
                  Beyond code, I enjoy contributing to open source projects, writing technical documentation, and mentoring teams on cloud best practices. I believe great infrastructure comes from understanding both the business goals and the operational constraints.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- SKILLS --- */}
      <section 
        id="skills" 
        className="px-6 py-32 border-t border-zinc-800/50 relative overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(10, 10, 15, 0.8) 0%, rgba(10, 10, 15, 0.9) 100%), url('https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1920&h=1080&fit=crop')`
        }}
      >
        <div className="mx-auto max-w-6xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-12">
              <Terminal size={18} className="text-zinc-700" />
              <span className="text-xs font-mono text-zinc-600 uppercase tracking-widest">technical toolkit</span>
            </div>
            <h2 className="text-4xl font-bold mb-16">Technologies & Tools</h2>
          </motion.div>

          <div className="space-y-10">
            {Object.entries(SKILLS).map(([category, items], catIdx) => {
              const bgGradients: Record<string, string> = {
                "Cloud Platforms": "bg-gradient-to-r from-sky-500/15 to-transparent",
                "Infra as Code": "bg-gradient-to-r from-violet-500/15 to-transparent",
                Containers: "bg-gradient-to-r from-orange-500/15 to-transparent",
                "CI/CD": "bg-gradient-to-r from-emerald-500/15 to-transparent",
                "Security & Net": "bg-gradient-to-r from-amber-500/15 to-transparent",
                Observability: "bg-gradient-to-r from-rose-500/15 to-transparent",
              };

              const borderColors: Record<string, string> = {
                "Cloud Platforms": "border-l-sky-500",
                "Infra as Code": "border-l-violet-500",
                Containers: "border-l-orange-500",
                "CI/CD": "border-l-emerald-500",
                "Security & Net": "border-l-amber-500",
                Observability: "border-l-rose-500",
              };

              const IconComponent = SKILL_ICONS[category];

              return (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: catIdx * 0.08 }}
                  className={`border-l-4 ${borderColors[category]} ${bgGradients[category]} rounded-r-xl px-7 py-8 backdrop-blur-sm border border-l-4 border-transparent`}
                >
                  <div className="flex items-center gap-3 mb-6">
                    <IconComponent size={20} className="text-zinc-500" />
                    <h3 className="text-xy font-bold text-zinc-200 tracking-wide">
                      {category}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2.5">
                    {items.map((skill, idx) => (
                      <motion.span
                        key={skill}
                        whileHover={{ y: -3, scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                        className={`rounded-lg text-xs font-semibold px-3.5 py-2 border transition-all duration-200 cursor-default
                          ${idx === 0 
                            ? `${SKILL_COLORS[category]} shadow-lg`
                            : "bg-zinc-900/40 border-zinc-700/50 text-zinc-400 hover:border-zinc-600 hover:text-zinc-300 hover:bg-zinc-800/60"
                          }
                        `}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* --- PROJECTS --- */}
      <section 
        id="projects" 
        className="px-6 py-32 border-t border-zinc-800/50 relative overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(10, 10, 15, 0.8) 0%, rgba(10, 10, 15, 0.9) 100%), url('https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=1920&h=1080&fit=crop&crop=entropy&cs=tinysrgb&q=80')`
        }}
      >
        <div className="mx-auto max-w-6xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-12">
              <div className="h-px flex-1 max-w-[50px] bg-zinc-800" />
              <span className="text-xs font-mono text-zinc-600 uppercase tracking-widest">projects</span>
              <div className="h-px flex-1 max-w-[50px] bg-zinc-800" />
            </div>
            <h2 className="text-4xl font-bold mb-16">Featured Work</h2>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2">
            {PROJECTS.map((p, i) => (
              <motion.div
                key={p.slug}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <Link
                  href={`/projects/${p.slug}`}
                  className="group block h-full border border-zinc-800/80 rounded-xl p-7 bg-zinc-900/20 hover:bg-zinc-900/40 hover:border-zinc-700/80 transition-all duration-300 backdrop-blur-sm"
                >
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="font-bold text-lg text-zinc-100 group-hover:text-white transition-colors leading-snug">
                      {p.title}
                    </h3>
                    <ArrowRight
                      size={18}
                      className="text-zinc-600 group-hover:text-zinc-300 group-hover:translate-x-1 transition-all mt-1 shrink-0"
                    />
                  </div>
                  <p className="text-sm text-zinc-400 leading-relaxed mb-6 font-light">
                    {p.desc}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="text-xs font-mono text-zinc-500 bg-zinc-800/40 border border-zinc-700/50 rounded-md px-2.5 py-1.5 group-hover:border-zinc-700 group-hover:text-zinc-400 transition-colors"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CERTIFICATIONS --- */}
      <section 
        id="certs" 
        className="px-6 py-32 border-t border-zinc-800/50 relative overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(10, 10, 15, 0.5) 0%, rgba(10, 10, 15, 0.7) 100%), url('https://images.unsplash.com/photo-1579546929662-711aa33e6b14?w=1920&h=1080&fit=crop')`
        }}
      >
        <div className="mx-auto max-w-6xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-12">
              <Award size={18} className="text-zinc-700" />
              <span className="text-xs font-mono text-zinc-600 uppercase tracking-widest">credentials</span>
            </div>
            <h2 className="text-4xl font-bold mb-12">Certifications</h2>
          </motion.div>

          <div className="space-y-3">
            {CERTS.map((c, i) => (
              <motion.a
                key={c.name}
                href={c.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="group flex items-center gap-4 py-4 px-5 mx-0 rounded-lg hover:bg-zinc-900/30 border border-transparent hover:border-zinc-800/80 transition-all duration-200"
              >
                <span className="text-xs font-mono text-zinc-600 shrink-0 w-12 font-bold">
                  {c.year}
                </span>
                <div className="flex-1 min-w-0">
                  <span className="text-sm font-semibold text-zinc-200 group-hover:text-white transition-colors block">
                    {c.name}
                  </span>
                  <span className="text-xs text-zinc-600">{c.org}</span>
                </div>
                <ExternalLink
                  size={16}
                  className="text-zinc-700 group-hover:text-zinc-400 transition-colors shrink-0"
                />
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* --- CONTACT --- */}
      <section 
        id="contact" 
        className="px-6 py-32 border-t border-zinc-800/50 relative overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(10, 10, 15, 0.5) 0%, rgba(10, 10, 15, 0.7) 100%), url('https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920&h=1080&fit=crop')`
        }}
      >
        <div className="mx-auto max-w-6xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-bold mb-6">Let&apos;s work together.</h2>
            <p className="text-lg text-zinc-400 leading-relaxed mb-10 max-w-xl font-light">
              Got a cloud challenge, need infrastructure help, or want to discuss best practices? I&apos;d love to hear from you.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="mailto:hello@example.com"
                className="group inline-flex items-center gap-2 bg-white text-[#0a0a0f] text-sm font-semibold px-6 py-3 rounded-lg hover:bg-zinc-100 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                <Mail size={16} />
                Get in touch
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-zinc-700 text-sm font-semibold px-6 py-3 rounded-lg text-zinc-300 hover:border-zinc-600 hover:text-zinc-100 hover:bg-white/[0.02] transition-all duration-200"
              >
                <Linkedin size={16} />
                LinkedIn
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="border-t border-zinc-800/50 px-6 py-8">
        <div className="mx-auto max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-xs text-zinc-600 font-mono">
            &copy; {new Date().getFullYear()}. All rights reserved.
          </span>
          <div className="flex gap-4">
            {[
              { icon: Github, href: "https://github.com", label: "GitHub" },
              { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
              { icon: Mail, href: "mailto:hello@example.com", label: "Email" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg border border-zinc-800 text-zinc-600 hover:text-zinc-300 hover:border-zinc-700 hover:bg-white/[0.02] transition-all duration-200"
                aria-label={s.label}
              >
                <s.icon size={16} />
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
