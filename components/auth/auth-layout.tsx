import * as React from "react";
import { Timer, Share2, FileText } from "lucide-react";

export interface AuthLayoutProps {
  children: React.ReactNode;
}

export function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="flex min-h-screen w-full bg-[#050507] text-white">
      {/* Left panel: exactly 50% on large screens, hidden on small screens */}
      <div className="hidden lg:flex lg:w-1/2 flex-col justify-between p-12 lg:px-20 lg:py-16 bg-[#0e0e15] select-none">
        {/* Top left logo */}
        <div className="flex items-center gap-3">
          <div className="h-7 w-7 rounded-md bg-[#00c8d4] shrink-0" />
          <span className="text-sm font-semibold tracking-tight text-white">
            Ghost AI
          </span>
        </div>

        {/* Center content */}
        <div className="my-auto max-w-lg py-6">
          <h1 className="text-3xl lg:text-[2.65rem] font-bold tracking-tight text-white leading-[1.14]">
            Design systems at the<br />
            speed of thought.
          </h1>

          <p className="mt-4 text-sm text-[#9ca3af] leading-relaxed max-w-[440px]">
            Describe your architecture in plain English. Ghost AI maps it to a shared canvas your whole team can refine in real time.
          </p>

          <div className="mt-10 space-y-6">
            {/* Feature 1 */}
            <div className="flex items-start gap-4">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-[#00c8d4]/40 bg-[#00c8d4]/10 text-[#00c8d4]">
                <Timer className="h-4 w-4" />
              </div>
              <div className="pt-0.5">
                <h3 className="text-sm font-semibold text-white">
                  AI Architecture Generation
                </h3>
                <p className="mt-1 text-xs text-[#9ca3af] leading-relaxed">
                  Describe your system, AI maps it to nodes and edges on a live canvas.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex items-start gap-4">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-[#00c8d4]/40 bg-[#00c8d4]/10 text-[#00c8d4]">
                <Share2 className="h-4 w-4" />
              </div>
              <div className="pt-0.5">
                <h3 className="text-sm font-semibold text-white">
                  Real-time Collaboration
                </h3>
                <p className="mt-1 text-xs text-[#9ca3af] leading-relaxed">
                  Live cursors, presence indicators, and shared node editing across your team.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex items-start gap-4">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-[#00c8d4]/40 bg-[#00c8d4]/10 text-[#00c8d4]">
                <FileText className="h-4 w-4" />
              </div>
              <div className="pt-0.5">
                <h3 className="text-sm font-semibold text-white">
                  Instant Spec Generation
                </h3>
                <p className="mt-1 text-xs text-[#9ca3af] leading-relaxed">
                  Export a complete Markdown technical spec directly from the canvas graph.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-xs text-[#52525b]">
          © 2026 Ghost AI. All rights reserved.
        </div>
      </div>

      {/* Right panel: exactly 50% on large screens, full width on small screens */}
      <div className="flex flex-1 lg:w-1/2 items-center justify-center p-6 sm:p-10 bg-[#050507]">
        <div className="w-full max-w-[420px] flex justify-center">
          <React.Suspense fallback={null}>
            {children}
          </React.Suspense>
        </div>
      </div>
    </div>
  );
}
