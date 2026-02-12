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
} from "lucide-react";

const PROJECTS: Record<
  string,
  {
    title: string;
    desc: string;
    detail: string;
    tags: string[];
    github: string;
    screenshots: string[];
    videoUrl?: string;
  }
> = {
  "multi-cloud-kubernetes-platform": {
    title: "Multi-Cloud Kubernetes Platform",
    desc: "Unified dashboard for managing Kubernetes clusters across AWS, Azure, and GCP.",
    detail:
      "A platform that abstracts cloud provider differences so teams can deploy workloads across EKS, AKS, and GKE from one place. Centralized logging with Loki, metrics with Prometheus and Grafana, cluster provisioning via Terraform, and a custom CLI. Supports multi-tenancy, RBAC, and per-namespace cost allocation.",
    tags: ["Kubernetes", "Terraform", "Go", "Prometheus"],
    github: "https://github.com",
    screenshots: [],
  },
  "serverless-data-pipeline": {
    title: "Serverless Data Pipeline",
    desc: "Event-driven pipeline processing 1M+ events/day with sub-second latency.",
    detail:
      "End-to-end serverless data processing on AWS. Events flow from API Gateway through Kinesis, get processed by Lambda, and land in DynamoDB with automatic TTL. Dead-letter queues for errors, CloudWatch dashboards, auto-scaling. Handles schema validation, data enrichment, and fan-out to S3 and Elasticsearch.",
    tags: ["AWS Lambda", "Kinesis", "DynamoDB", "Python"],
    github: "https://github.com",
    screenshots: [],
  },
  "infrastructure-cost-optimizer": {
    title: "Cloud Cost Optimizer",
    desc: "Analyzes multi-cloud spending and recommends optimizations. Avg 35% savings.",
    detail:
      "Connects to AWS, Azure, and GCP billing APIs for unified cost visibility. Predicts future spending, spots underutilized resources, recommends reserved instances, and flags anomalous patterns. Includes right-sizing suggestions, scheduled reports, Slack notifications, and a React dashboard with drill-down views.",
    tags: ["Python", "AWS SDK", "React", "PostgreSQL"],
    github: "https://github.com",
    screenshots: [],
  },
  "zero-downtime-migration-framework": {
    title: "Zero-Downtime Migration Framework",
    desc: "Live-migrate databases and services across providers with zero downtime.",
    detail:
      "Battle-tested framework for performing live migrations between cloud providers. Supports database replication (PostgreSQL, MySQL, MongoDB), DNS-based traffic shifting, health checks, and automatic rollback. Terraform modules for provisioning, Ansible playbooks for config, shell scripts for orchestration. Includes runbooks and automated pre-flight checks.",
    tags: ["Terraform", "Ansible", "Docker", "Shell"],
    github: "https://github.com",
    screenshots: [],
  },
};

export default function ProjectPage() {
  const params = useParams();
  const slug = params.slug as string;
  const project = PROJECTS[slug];

  if (!project) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#0a0a0f] text-zinc-100">
        <div className="text-center px-5">
          <h1 className="text-3xl font-bold mb-3">not found</h1>
          <p className="text-zinc-500 mb-6 text-sm">
            This project doesn&apos;t exist.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors"
          >
            <ArrowLeft size={14} />
            back home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-zinc-100 font-sans">
      {/* nav */}
      <header className="fixed top-0 z-50 w-full bg-[#0a0a0f]/90 backdrop-blur-md border-b border-white/5">
        <div className="mx-auto max-w-3xl flex items-center justify-between px-5 py-3.5">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-[13px] text-zinc-500 hover:text-zinc-200 transition-colors"
          >
            <ArrowLeft size={14} />
            back
          </Link>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-[13px] bg-white text-[#0a0a0f] font-medium px-3.5 py-1.5 rounded-md hover:bg-zinc-200 transition-colors"
          >
            <Github size={13} />
            view code
          </a>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-5 pt-24 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          {/* tags */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.tags.map((t) => (
              <span
                key={t}
                className="text-[11px] font-mono text-zinc-500 bg-white/[0.04] border border-white/[0.06] rounded px-2 py-0.5"
              >
                {t}
              </span>
            ))}
          </div>

          {/* title */}
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-3 leading-tight">
            {project.title}
          </h1>
          <p className="text-zinc-500 leading-relaxed mb-10 max-w-xl">
            {project.desc}
          </p>
        </motion.div>

        {/* media section */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.4 }}
          className="mb-10"
        >
          <span className="text-[12px] font-mono text-zinc-600 uppercase tracking-wider">
            demo
          </span>

          {/* video */}
          {project.videoUrl ? (
            <div className="mt-4 overflow-hidden rounded-lg border border-white/[0.06]">
              <video controls className="w-full">
                <source src={project.videoUrl} type="video/mp4" />
              </video>
            </div>
          ) : (
            <div className="mt-4 flex aspect-video items-center justify-center rounded-lg border border-dashed border-white/[0.08] bg-white/[0.02]">
              <div className="text-center">
                <Play size={28} className="mx-auto mb-2 text-zinc-700" />
                <p className="text-[12px] text-zinc-600">
                  add a video URL to showcase this project
                </p>
              </div>
            </div>
          )}

          {/* screenshots */}
          {project.screenshots.length > 0 ? (
            <div className="grid gap-3 sm:grid-cols-2 mt-4">
              {project.screenshots.map((src, i) => (
                <div
                  key={i}
                  className="overflow-hidden rounded-lg border border-white/[0.06]"
                >
                  <img
                    src={src}
                    alt={`${project.title} screenshot ${i + 1}`}
                    className="w-full"
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="grid gap-3 sm:grid-cols-2 mt-4">
              {[1, 2].map((n) => (
                <div
                  key={n}
                  className="flex aspect-video items-center justify-center rounded-lg border border-dashed border-white/[0.08] bg-white/[0.02]"
                >
                  <div className="text-center">
                    <ImageIcon size={24} className="mx-auto mb-2 text-zinc-700" />
                    <p className="text-[11px] text-zinc-600">
                      screenshot {n}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </motion.div>

        {/* detail */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.4 }}
          className="mb-12"
        >
          <span className="text-[12px] font-mono text-zinc-600 uppercase tracking-wider">
            about this project
          </span>
          <p className="mt-4 text-zinc-400 text-[15px] leading-relaxed">
            {project.detail}
          </p>
        </motion.div>

        {/* github cta */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.4 }}
          className="flex items-center gap-4 border border-white/[0.06] rounded-lg p-5 bg-white/[0.02]"
        >
          <div className="flex-1">
            <p className="font-medium text-zinc-200 text-[15px] mb-1">
              Check out the source code
            </p>
            <p className="text-[13px] text-zinc-600">
              Full code, docs, and setup instructions on GitHub.
            </p>
          </div>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 bg-white text-[#0a0a0f] text-sm font-medium px-4 py-2 rounded-md hover:bg-zinc-200 transition-colors shrink-0"
          >
            <Github size={14} />
            repo
            <ExternalLink size={12} />
          </a>
        </motion.div>
      </main>
    </div>
  );
}
