import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * Architectural Section Divider inspired by Shadcn Studio Flow Landing Page.
 * Renders a hairline horizontal border with precision T-crosshair markers at both ends.
 */
export function SectionDivider({ className }: { className?: string }) {
  return (
    <div className={cn("relative w-full z-20", className)} aria-hidden="true">
      <div
        data-orientation="horizontal"
        role="none"
        data-slot="separator"
        className="h-px w-full bg-white/10"
      />
      <div className="pointer-events-none mx-auto max-w-[1360px] relative">
        <svg
          width="15"
          height="20"
          viewBox="0 0 15 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-1/2 -right-0.5 -translate-y-1/2 text-zinc-400"
        >
          <path
            d="M13.1589 20V0M0 10.0215H14"
            stroke="currentColor"
            strokeWidth="1.75"
          />
        </svg>
        <svg
          width="15"
          height="20"
          viewBox="0 0 15 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-1/2 -left-0.5 -translate-y-1/2 rotate-180 text-zinc-400"
        >
          <path
            d="M13.1589 20V0M0 10.0215H14"
            stroke="currentColor"
            strokeWidth="1.75"
          />
        </svg>
      </div>
    </div>
  );
}
