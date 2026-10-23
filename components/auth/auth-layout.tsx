import * as React from "react";

export interface AuthLayoutProps {
  children: React.ReactNode;
}

export function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="flex min-h-screen w-full bg-bg-base text-text-primary">
      {/* Left panel: large screens only */}
      <div className="hidden lg:flex lg:w-1/2 flex-col justify-between p-12 border-r border-border-default bg-bg-surface">
        <div>
          {/* Compact logo */}
          <div className="flex items-center gap-2.5">
            <div className="h-7 w-7 rounded-lg bg-accent-primary/10 border border-accent-primary/30 flex items-center justify-center text-accent-primary font-bold text-sm">
              G
            </div>
            <span className="text-lg font-semibold tracking-tight text-text-primary">
              Ghost AI
            </span>
          </div>

          {/* Tagline */}
          <div className="mt-16 max-w-md">
            <h1 className="text-2xl font-medium tracking-tight text-text-primary">
              Collaborative system design workspace
            </h1>
            <p className="mt-3 text-sm text-text-secondary leading-relaxed">
              Design distributed architectures together, iterate with AI assistance, and generate technical specifications.
            </p>

            {/* Short text-only feature list */}
            <ul className="mt-8 space-y-3 text-sm text-text-muted">
              <li className="flex items-start gap-2.5">
                <span className="text-accent-primary font-mono select-none">—</span>
                <span>Map complex architectures from natural language prompts</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-accent-primary font-mono select-none">—</span>
                <span>Real-time canvas collaboration with shared presence</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-accent-primary font-mono select-none">—</span>
                <span>Convert system designs into technical Markdown specs</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-xs text-text-faint">
          Ghost AI — minimal technical workspace
        </div>
      </div>

      {/* Right panel: centered Clerk form (full screen on small devices) */}
      <div className="flex flex-1 items-center justify-center p-6 sm:p-10">
        <div className="w-full max-w-[420px] flex justify-center">
          <React.Suspense fallback={null}>
            {children}
          </React.Suspense>
        </div>
      </div>
    </div>
  );
}
