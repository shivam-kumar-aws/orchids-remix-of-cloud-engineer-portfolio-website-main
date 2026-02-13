"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Github,
  ExternalLink,
  Play,
  Image as ImageIcon,
  Zap,
  BadgeCheck,
} from "lucide-react";

const PROJECTS: Record<
  string,
  {
    title: string;
    desc: string;
    detail: string;
    tags: string[];
    github: string;
    demo?: string; // Added demo property
    screenshots: string[];
    videoUrl?: string;
  }
> = {
  "cloudbox-serverless-storage": {
    title: "CloudBox (Serverless Storage)",
    desc: "A fully serverless file-storage platform using AWS S3, Lambda, API Gateway, and DynamoDB.",
    detail:
      "CloudBox is a robust, serverless clone of Dropbox/Google Drive built entirely on AWS. It leverages S3 for scalable object storage and DynamoDB for metadata indexing. Authenticated users (via Cognito) can upload multi-part files, which triggers a Lambda pipeline for virus scanning and thumbnail generation. The infrastructure is defined as code using Terraform, ensuring reproducible deployments.",
    tags: ["AWS Lambda", "S3", "API Gateway", "DynamoDB", "Terraform", "GitHub Actions"],
    github: "https://github.com/shivam-kumar-aws/cloudbox",
    demo: "https://cloudbox.demo.shivam.dev",
    screenshots: [
      "https://placehold.co/1920x1080/1e1e2e/6366f1?text=CloudBox+Dashboard&font=roboto",
      "https://placehold.co/1920x1080/1e1e2e/8b5cf6?text=File+Upload+Interface&font=roboto"
    ],
    videoUrl: "", // Placeholder for user to add later
  },
  "bid-brush-auction": {
    title: "Bid Brush - Art Auction Platform",
    desc: "Real-time e-commerce platform for artists to auction artwork.",
    detail:
      "Bid Brush connects independent artists with collectors through a real-time bidding system. Built with Flutter for a cross-platform mobile experience, it uses Firebase Realtime Database to push live bid updates without polling. Secure payments are handled via Razorpay integration, and the backend logic enforces auction expiry and winner declaration automatically.",
    tags: ["Flutter", "Dart", "Firebase", "Razorpay"],
    github: "https://github.com/shivam-kumar-aws/bid-brush",
    demo: "https://bidbrush.demo.shivam.dev",
    screenshots: [
      "https://placehold.co/1080x1920/1e1e2e/ec4899?text=Bid+Brush+Feed&font=roboto",
      "https://placehold.co/1080x1920/1e1e2e/14b8a6?text=Auction+Detail+View&font=roboto"
    ],
  },
};

export default function ProjectPage() {
  const params = useParams();
  const slug = params.slug as string;
  const project = PROJECTS[slug];

  if (!project) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#0a0a0f] text-zinc-100 relative overflow-hidden">
        <div className="mesh-bg opacity-30">
          <div className="mesh-blob mesh-blob-1" />
          <div className="mesh-blob mesh-blob-2" />
        </div>
        <div className="text-center px-5 relative z-10">
          <h1 className="text-3xl font-bold mb-3">Project Not Found</h1>
          <Link href="/" className="btn-glow px-6 py-2 inline-flex items-center gap-2">
            <ArrowLeft size={16} /> Return Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-zinc-100 font-sans selection:bg-indigo-500/30">
      {/* --- IDLE BACKGROUND --- */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="mesh-bg opacity-20">
          <div className="mesh-blob mesh-blob-1 top-[-20%]" />
          <div className="mesh-blob mesh-blob-3 bottom-[-20%] right-[-10%]" />
        </div>
        <div className="absolute inset-0 tech-grid opacity-20" />
      </div>

      {/* --- NAV --- */}
      <header className="fixed top-0 z-50 w-full bg-[#0a0a0f]/80 backdrop-blur-xl border-b border-white/5">
        <div className="mx-auto max-w-7xl flex items-center justify-between px-6 py-4">
          <Link
            href="/#projects"
            className="group inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Back to Projects
          </Link>

          <div className="flex gap-4">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-zinc-400 hover:text-white transition-colors"
            >
              <Github size={16} /> Source Code
            </a>
          </div>
        </div>
      </header>

      <main className="relative z-10 pt-32 pb-20 px-6">
        <div className="mx-auto max-w-7xl">
          {/* --- HERO HEADER --- */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto mb-20"
          >
            <div className="flex justify-center gap-2 mb-6">
              {project.tags.slice(0, 3).map(t => (
                <span key={t} className="px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-xs font-mono uppercase tracking-wider">
                  {t}
                </span>
              ))}
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-500 leading-tight">
              {project.title}
            </h1>
            <p className="text-xl text-zinc-400 leading-relaxed max-w-2xl mx-auto">
              {project.desc}
            </p>

            <div className="flex justify-center gap-4 mt-10">
              {project.demo && (
                <a
                  href={project.demo} // Updated to use demo link
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-glow px-8 py-4 flex items-center gap-2"
                >
                  <Play size={18} fill="currentColor" /> Live Demo
                </a>
              )}
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-lg border border-zinc-700 hover:bg-white/5 transition-colors flex items-center gap-2 font-semibold"
              >
                <Github size={18} /> View Source
              </a>
            </div>
          </motion.div>

          {/* --- BENTO LAYOUT --- */}
          <div className="grid lg:grid-cols-3 gap-8">
            {/* LEFT: MEDIA SHOWCASE (Span 2) */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="lg:col-span-2 space-y-8"
            >
              {/* Main Preview Window */}
              <div className="rounded-2xl border border-white/10 bg-black/40 backdrop-blur-sm overflow-hidden shadow-2xl">
                {/* Browser Toolbar */}
                <div className="h-12 bg-white/5 border-b border-white/5 flex items-center px-4 gap-4">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/20" />
                    <div className="w-3 h-3 rounded-full bg-amber-500/20" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500/20" />
                  </div>
                  <div className="flex-1 h-8 rounded-md bg-black/20 flex items-center px-4 text-xs text-zinc-600 font-mono">
                    https://{slug}.shivam.dev
                  </div>
                </div>

                {/* Content */}
                <div className="aspect-video bg-zinc-900/50 flex items-center justify-center relative group">
                  {project.videoUrl ? (
                    <video controls className="w-full h-full object-cover">
                      <source src={project.videoUrl} type="video/mp4" />
                    </video>
                  ) : (
                    <div className="text-center p-12">
                      <div className="w-20 h-20 rounded-full bg-indigo-500/10 flex items-center justify-center mx-auto mb-4 border border-indigo-500/20 text-indigo-400 group-hover:scale-110 transition-transform">
                        <ImageIcon size={32} />
                      </div>
                      <p className="text-zinc-500">Interactive Demo Preview</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Screenshot Grid */}
              {project.screenshots.length > 0 && (
                <div className="grid grid-cols-2 gap-4">
                  {project.screenshots.map((src, i) => (
                    <div key={i} className="rounded-xl border border-white/10 overflow-hidden hover:border-white/20 transition-colors">
                      <img src={src} alt="" className="w-full h-auto opacity-70 hover:opacity-100 transition-opacity" />
                    </div>
                  ))}
                </div>
              )}
            </motion.div>

            {/* RIGHT: DETAILS & TECH (Span 1) */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="space-y-6"
            >
              {/* Story Card */}
              <div className="p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <Zap size={20} className="text-amber-400" /> The Challenge
                </h3>
                <p className="text-zinc-400 leading-relaxed text-sm">
                  {project.detail.split(".")[0]}.
                </p>

                <div className="my-6 border-t border-white/5" />

                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <BadgeCheck size={20} className="text-emerald-400" /> The Solution
                </h3>
                <p className="text-zinc-400 leading-relaxed text-sm">
                  {project.detail}
                </p>
              </div>

              {/* Tech Stack Card */}
              <div className="p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md">
                <h3 className="text-sm font-mono uppercase tracking-widest text-zinc-500 mb-6">Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1.5 rounded bg-black/40 border border-white/5 text-zinc-300 text-xs font-semibold hover:border-indigo-500/50 transition-colors cursor-default">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  );
}
