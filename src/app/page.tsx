"use client";

import { useState, useEffect } from "react";
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
  FileText,
  Cpu,
  Infinity,
  Shield,
  Zap,
  BadgeCheck,
  Globe,
  Database,
  Server,
  Layers,
  Smartphone,
} from "lucide-react";

const NAV = [
  { href: "#about", label: "about" },
  { href: "#skills", label: "skills" },
  { href: "#projects", label: "projects" },
  { href: "#certs", label: "credentials" },
  { href: "#contact", label: "contact" },
];

const SKILLS = {
  "Cloud Platforms": ["AWS (EC2, S3, Lambda)", "VPC/IAM/RDS", "DynamoDB/CloudFront", "Route53/SNS/SQS"],
  "Infra as Code": ["Terraform", "CloudFormation"],
  Containers: ["Docker", "Kubernetes"],
  "OS & Scripting": ["Linux (Ubuntu)", "Shell Scripting", "Windows Server"],
  "Networking/Sec": ["VPC Design", "Security Groups", "Nginx/Apache", "SSH/SSL/TLS"],
  "Dev & Tools": ["Git/GitHub Actions", "VS Code", "Flutter/Dart", "Firebase"],
};

const SKILL_COLORS: Record<string, string> = {
  "Cloud Platforms": "border-sky-500/40 text-sky-300 bg-sky-500/5",
  "Infra as Code": "border-violet-500/40 text-violet-300 bg-violet-500/5",
  Containers: "border-orange-500/40 text-orange-300 bg-orange-500/5",
  "OS & Scripting": "border-emerald-500/40 text-emerald-300 bg-emerald-500/5",
  "Networking/Sec": "border-amber-500/40 text-amber-300 bg-amber-500/5",
  "Dev & Tools": "border-rose-500/40 text-rose-300 bg-rose-500/5",
};

const SKILL_ICONS: Record<string, any> = {
  "Cloud Platforms": Cloud,
  "Infra as Code": Code2,
  Containers: Container,
  "OS & Scripting": Terminal,
  "Networking/Sec": Lock,
  "Dev & Tools": GitBranch,
};
// projects section
const PROJECTS = [
  {
    title: "CloudBox (Serverless Storage)",
    slug: "cloudbox-serverless-storage",
    desc: "A fully serverless file-storage platform using AWS S3, Lambda, API Gateway, and DynamoDB. Features multi-part chunk uploads for faster transfers, event-driven processing, and secure API access.",
    tags: ["AWS Lambda", "S3", "API Gateway", "DynamoDB", "Terraform", "GitHub Actions"],
  },
  {
    title: "Bid Brush - Art Auction Platform",
    slug: "bid-brush-auction",
    desc: "Designed and developed an e-commerce platform for artists to sell and auction artwork. Integrated real-time database management with Firebase and secure transactions via Razorpay.",
    tags: ["Flutter", "Dart", "Firebase", "Razorpay"],
  },
];
// certification section 

const CERTS = [
  {
    name: "AWS Solution Architect Certification - Classroom Training",
    org: "Amazon Web Services",
    year: "2024",
    url: "https://drive.google.com/file/d/1uWBU2HWCm1XGa7YhQTz7-MYV9pEN-6g-/view",
  },
  {
    name: "AWS Cloud Technical Essence",
    org: "Amazon Web Services",
    year: "2023",
    url: "https://www.coursera.org/account/accomplishments/verify/X4FQY8DJX4HZ?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=pdf_header_button&utm_product=course",
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
      <section className="relative min-h-screen flex items-center justify-center px-6 pt-20 overflow-hidden">
        {/* Mesh Background */}
        <div className="mesh-bg">
          <div className="mesh-blob mesh-blob-1" />
          <div className="mesh-blob mesh-blob-2" />
          <div className="mesh-blob mesh-blob-3" />
        </div>

        {/* Tech Grid Overlay */}
        <div className="absolute inset-0 tech-grid opacity-30 pointer-events-none" />

        <div className="mx-auto max-w-6xl w-full text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-zinc-500 text-sm mb-6 font-mono tracking-widest">
              CLOUD ENGINEER &bull; FRESHER &bull; 2024 GRAD
            </p>
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.1] mb-6 text-shimmer min-h-[1.1em]">
              <Typewriter text={["Shivam Kumar", "AWS Certified", "DevOps Engineer", "Open Source"]} speed={150} wait={2000} />
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="max-w-2xl mx-auto text-lg text-zinc-400 leading-relaxed mb-12 font-light"
          >
            Building reliable cloud infrastructure with code. AWS Solution Architect Certified. Passionate about automating workflows and optimizing costs.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35, duration: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <a
              href="#projects"
              className="group relative inline-flex items-center gap-2 btn-glow px-6 py-3"
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
            <a
              href="/resume.pdf"
              download="Shivam_Kumar_Resume.pdf"
              className="inline-flex items-center gap-2 border border-zinc-700 text-sm font-semibold px-6 py-3 rounded-lg text-zinc-300 hover:border-zinc-500 hover:text-zinc-100 hover:bg-white/[0.02] transition-all duration-200"
            >
              <FileText size={16} />
              Resume
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex justify-center gap-4"
          >
            {[
              { icon: Github, href: "https://github.com/shivam-kumar-aws", label: "GitHub" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/shivam-kumar22740/", label: "LinkedIn" },
              { icon: Mail, href: "mailto:shivamkumar8021@gmail.com", label: "Email" },
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

      {/* --- SKILLS MARQUEE --- */}
      <section className="border-y border-zinc-800/50 bg-zinc-900/20 backdrop-blur overflow-hidden py-4">
        <div className="marquee-container flex overflow-hidden whitespace-nowrap">
          <div className="marquee-content flex gap-8 items-center pr-8">
            {Object.values(SKILLS).flat().map((skill, i) => (
              <span key={i} className="text-zinc-500 font-mono text-sm uppercase tracking-wider flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500/50" /> {skill}
              </span>
            ))}
          </div>
          {/* Duplicate for infinite loop */}
          <div className="marquee-content flex gap-8 items-center pr-8" aria-hidden="true">
            {Object.values(SKILLS).flat().map((skill, i) => (
              <span key={`dup-${i}`} className="text-zinc-500 font-mono text-sm uppercase tracking-wider flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500/50" /> {skill}
              </span>
            ))}
          </div>
        </div>
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

            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <div>
                  <h2 className="text-4xl font-bold leading-tight mb-6">
                    Certified Cloud Engineer & Computer Science Graduate.
                  </h2>
                  <p className="text-zinc-400 leading-relaxed text-base font-light">
                    As a recent 2024 graduate, I combine strong academic foundations in Computer Science with practical, hands-on cloud expertise. I don't just "use" the cloud; I engineer architectures that are scalable, secure, and cost-effective.
                  </p>
                </div>
                <div className="space-y-4 text-zinc-400 text-base leading-relaxed font-light">
                  <p>
                    My journey into cloud computing started during my engineering degree, where I realized the power of on-demand infrastructure. Since then, I've dived deep into AWS, earning certification and building real-world projects like serverless storage platforms and event-driven pipelines.
                  </p>
                  <p>
                    I am eager to launch my career as a Cloud/DevOps Engineer, bringing a hunger to learn, a certification-backed skillset, and a "code-first" mindset to infrastructure problems.
                  </p>
                </div>
              </div>

              {/* Focus Cards */}
              <div className="grid gap-4">
                {[
                  { icon: Cloud, title: "Cloud Native", desc: "Scalable Architectures on AWS/Azure", bg: "bg-sky-500/10", border: "border-sky-500/20" },
                  { icon: Infinity, title: "DevOps & CI/CD", desc: "Automated Pipelines & IaC", bg: "bg-violet-500/10", border: "border-violet-500/20" },
                  { icon: Shield, title: "SecOps", desc: "IAM, Compliance & Network Security", bg: "bg-emerald-500/10", border: "border-emerald-500/20" },
                ].map((item, i) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + (i * 0.1) }}
                    className={`p-4 rounded-xl border ${item.border} ${item.bg} backdrop-blur-sm flex items-center gap-4 hover:-translate-y-1 transition-transform duration-300`}
                  >
                    <div className="p-3 rounded-lg bg-white/5 text-white">
                      <item.icon size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-zinc-100">{item.title}</h4>
                      <p className="text-sm text-zinc-400">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-20 border border-zinc-800/50 rounded-2xl p-8 bg-zinc-900/20"
          >
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <Award className="text-indigo-400" size={20} /> Education
            </h3>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <h4 className="text-lg font-semibold text-zinc-200">Atria Institute of Technology</h4>
                <p className="text-zinc-400">Bachelor of Engineering - Computer Science</p>
              </div>
              <div className="text-right">
                <span className="block text-zinc-200 font-mono">2020 — 2024</span>
                <span className="text-sm text-zinc-500">Bangalore, India</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- SKILLS --- */}
      <section
        id="skills"
        className="px-6 py-32 border-t border-zinc-800/50 relative overflow-hidden"
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(SKILLS).map(([category, items], catIdx) => {
              const IconComponent = SKILL_ICONS[category];

              const gradients: Record<string, string> = {
                "Cloud Platforms": "from-sky-500/20 to-sky-500/5",
                "Infra as Code": "from-violet-500/20 to-violet-500/5",
                Containers: "from-orange-500/20 to-orange-500/5",
                "OS & Scripting": "from-emerald-500/20 to-emerald-500/5",
                "Networking/Sec": "from-amber-500/20 to-amber-500/5",
                "Dev & Tools": "from-rose-500/20 to-rose-500/5",
              };

              return (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: catIdx * 0.08 }}
                  className="h-full"
                >
                  <div className={`
                    relative h-full overflow-hidden rounded-2xl border border-white/10 
                    bg-gradient-to-br ${gradients[category] || "from-zinc-800 to-zinc-900"} 
                    p-6 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-indigo-500/20
                    group backdrop-blur-md
                  `}>
                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                      <IconComponent size={80} />
                    </div>

                    <div className="flex items-center gap-3 mb-6 relative z-10">
                      <div className="p-2.5 rounded-lg bg-white/10 backdrop-blur-md">
                        <IconComponent size={24} className="text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-white tracking-wide">{category}</h3>
                    </div>

                    <div className="flex flex-wrap gap-2 relative z-10">
                      {items.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1.5 rounded-md text-xs font-medium bg-black/40 text-zinc-300 border border-white/5 shadow-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
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
        className="px-6 py-32 border-t border-zinc-800/50 relative overflow-hidden"
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

          <div className="grid gap-8 md:grid-cols-2">
            {PROJECTS.map((p, i) => (
              <motion.div
                key={p.slug}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <div className="group h-full glass-panel rounded-2xl p-0 overflow-hidden flex flex-col hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-300">
                  {/* Card Header (Mac OS Window Style) */}
                  <div className="px-4 py-3 border-b border-white/5 bg-white/[0.02] flex items-center justify-between">
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-500/20" />
                      <div className="w-2.5 h-2.5 rounded-full bg-amber-500/20" />
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/20" />
                    </div>
                    <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-wider">Case Study</span>
                  </div>

                  <div className="p-8 flex-1 flex flex-col relative">
                    {/* Floating Tech Icon */}
                    <div className="absolute top-6 right-6 p-2 rounded-lg bg-zinc-800/50 border border-white/5 text-zinc-400 group-hover:text-white group-hover:border-white/20 transition-all">
                      {p.slug.includes("cloud") ? <Cloud size={20} /> : <Smartphone size={20} />}
                    </div>

                    <h3 className="font-bold text-2xl text-zinc-100 mb-4 group-hover:text-indigo-400 transition-colors">
                      {p.title}
                    </h3>
                    <p className="text-sm text-zinc-400 leading-relaxed mb-6 font-light flex-1">
                      {p.desc}
                    </p>

                    <div className="space-y-4">
                      <div className="flex flex-wrap gap-2">
                        {p.tags.map((t) => (
                          <span
                            key={t}
                            className="text-[10px] uppercase tracking-wider font-semibold text-zinc-500 bg-zinc-900/50 border border-zinc-700/30 rounded px-2 py-1"
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                      <div className="flex gap-4 pt-4 border-t border-white/5">
                        <Link
                          href={`/projects/${p.slug}`}
                          className="text-sm font-semibold text-zinc-300 hover:text-white flex items-center gap-2 transition-colors"
                        >
                          <Github size={16} /> Source
                        </Link>
                        <Link
                          href={`/projects/${p.slug}`}
                          className="text-sm font-semibold text-indigo-400 hover:text-indigo-300 flex items-center gap-2 transition-colors"
                        >
                          <Globe size={16} /> Live Demo
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CERTIFICATIONS --- */}
      <section
        id="certs"
        className="px-6 py-32 border-t border-zinc-800/50 relative overflow-hidden"
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
            <h2 className="text-4xl font-bold mb-12">Courses & Training</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {CERTS.map((c, i) => (
              <motion.a
                key={c.name}
                href={c.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.3, delay: i * 0.1 }}
                className="group relative flex items-center gap-5 p-6 rounded-xl border border-zinc-800 bg-zinc-900/10 hover:bg-zinc-900/30 hover:border-amber-500/30 transition-all duration-300"
              >
                <div className="absolute top-0 right-0 p-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ExternalLink size={14} className="text-zinc-500" />
                </div>

                {/* Badge Icon */}
                <div className="w-12 h-12 rounded-full bg-amber-500/10 flex items-center justify-center border border-amber-500/20 group-hover:border-amber-500/50 group-hover:shadow-lg group-hover:shadow-amber-500/10 transition-all shrink-0">
                  <Award className="text-amber-500" size={24} />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="font-bold text-zinc-100 truncate pr-4 text-sm sm:text-base group-hover:text-amber-400 transition-colors">
                      {c.name}
                    </h4>
                    <BadgeCheck size={16} className="text-sky-500 shrink-0" fill="rgba(14, 165, 233, 0.1)" />
                  </div>
                  <div className="flex items-center justify-between text-xs text-zinc-500 font-mono">
                    <span>{c.org}</span>
                    <span>Issued {c.year}</span>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* --- CONTACT --- */}
      <section
        id="contact"
        className="px-6 py-32 border-t border-zinc-800/50 relative overflow-hidden"
      >
        <div className="mx-auto max-w-4xl relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="glass-panel p-8 md:p-12 rounded-3xl text-center relative overflow-hidden"
          >
            {/* Background Decoration */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-[500px] pointer-events-none opacity-20">
              <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/20 to-transparent blur-3xl" />
            </div>

            <Zap size={48} className="mx-auto text-indigo-400 mb-6 relative z-10" />

            <h2 className="text-4xl md:text-5xl font-bold mb-6 relative z-10">Let&apos;s work together.</h2>
            <p className="text-lg text-zinc-400 leading-relaxed mb-10 max-w-2xl mx-auto font-light relative z-10">
              Got a cloud challenge, need infrastructure help, or want to discuss best practices? I&apos;m ready to join your team and make an impact.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
              <a
                href="mailto:shivamkumar8021@gmail.com"
                className="group inline-flex items-center gap-2 btn-glow px-8 py-4 text-base"
              >
                <Mail size={18} />
                Send me an Email
              </a>
              <a
                href="https://www.linkedin.com/in/shivam-kumar22740/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-zinc-700 text-base font-semibold px-8 py-4 rounded-lg text-zinc-300 hover:border-zinc-600 hover:text-zinc-100 hover:bg-white/[0.05] transition-all duration-200"
              >
                <Linkedin size={18} />
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
              { icon: Github, href: "https://github.com/shivam-kumar-aws", label: "GitHub" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/shivam-kumar22740/", label: "LinkedIn" },
              { icon: Mail, href: "mailto:shivamkumar8021@gmail.com", label: "Email" },
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

function Typewriter({ text, speed = 100, wait = 3000 }: { text: string[], speed?: number, wait?: number }) {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);
  const [blink, setBlink] = useState(true);

  // Blinking cursor effect
  useEffect(() => {
    const timeout2 = setInterval(() => {
      setBlink((prev) => !prev);
    }, 500);
    return () => clearInterval(timeout2);
  }, []);

  // Typing effect
  useEffect(() => {
    if (subIndex === text[index].length + 1 && !reverse) {
      const timeout = setTimeout(() => {
        setReverse(true);
      }, wait);
      return () => clearTimeout(timeout);
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % text.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, Math.max(reverse ? 75 : subIndex === text[index].length ? 1000 : speed, parseInt(String(Math.random() * 350))));

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, speed, wait, text]);

  return (
    <>
      {text[index].substring(0, subIndex)}
      <span className={`typewriter-cursor ${blink ? "opacity-100" : "opacity-0"}`}>&nbsp;</span>
    </>
  );
}
