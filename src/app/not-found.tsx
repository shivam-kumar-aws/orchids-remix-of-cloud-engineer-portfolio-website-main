"use client";

import Link from "next/link";
import { MoveLeft, CloudOff } from "lucide-react";

export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-[#0a0a0f] relative overflow-hidden text-zinc-100">
            {/* Mesh Background */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-indigo-500/30 blur-[120px] rounded-full" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-violet-500/30 blur-[120px] rounded-full" />
            </div>

            <div className="relative z-10 text-center px-6">
                <div className="mb-8 flex justify-center">
                    <div className="p-6 rounded-3xl bg-white/[0.03] border border-white/[0.08] shadow-2xl backdrop-blur-xl">
                        <CloudOff size={64} className="text-zinc-500" />
                    </div>
                </div>

                <h1 className="text-8xl font-bold tracking-tighter mb-4 text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-600">
                    404
                </h1>
                <h2 className="text-2xl font-medium text-zinc-300 mb-2">Page Not Found</h2>
                <p className="text-zinc-500 max-w-md mx-auto mb-10 leading-relaxed">
                    The resource you are looking for might have been moved, deleted, or possibly never existed in this availability zone.
                </p>

                <Link
                    href="/"
                    className="inline-flex items-center gap-2 btn-glow px-8 py-3"
                >
                    <MoveLeft size={18} />
                    Return Home
                </Link>
            </div>
        </div>
    );
}
