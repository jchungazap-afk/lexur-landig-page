import React from "react";

interface LogoProps {
  className?: string;
}

/** 1. Deloitte. */
export function DeloitteLogo({ className = "h-5 w-auto" }: LogoProps) {
  return (
    <svg viewBox="0 0 118 24" className={className} fill="currentColor" aria-label="Deloitte">
      <text
        x="0"
        y="18"
        fontFamily="system-ui, -apple-system, sans-serif"
        fontSize="21"
        fontWeight="700"
        letterSpacing="-0.04em"
      >
        Deloitte
      </text>
      <circle cx="94" cy="16.5" r="3" fill="#86BC25" />
    </svg>
  );
}

/** 2. Elephant / Postgres & tech icon */
export function ElephantLogo({ className = "h-6 w-auto" }: LogoProps) {
  return (
    <svg viewBox="0 0 28 24" className={className} fill="currentColor" aria-label="Postgres Elephant">
      <path
        d="M23.5 14.7c-.1-.3-.5-.3-1-.2-1.6.3-2.3.1-2.5 0 1.3-2 2.4-4.5 3-6.8.3-1 .8-3.5.1-4.7a1.6 1.6 0 0 0-.2-.2C21.7.9 19.8 0 17.5 0c-1.5 0-2.8.3-3.1.5a9.4 9.4 0 0 0-.5-.1 8 8 0 0 0-1.3-.1c-1.2 0-2.2.3-3 .8C8.7.9 4.8-.4 2.4 1.3.9 2.1.3 3.8.4 6.3c0 .8.5 3.3 1.2 5.7.5 1.5.9 2.7 1.4 3.6.6 1 1.1 1.6 1.7 1.8.4.1 1.1.1 1.9-.7.8-1 1.6-1.8 1.9-2.2.4.2.9.4 1.4.4l-.2.3c-.3.4-.4.5-1.5.7-.3.1-1.1.2-1.1.8 0 .1 0 .2.1.3.2.4.9.6 1 .6 1.3.3 2.5.1 3.4-.7 0 2.2.1 4.4.3 5.1.2.6.8 1.9 2.5 1.9.3 0 .5 0 .8-.1 1.8-.4 2.6-1.2 2.9-2.9.2-.9.4-2.9.5-4.1.2-.3 1-.3 1.5-.1.8.1 1.9-.1 2.5-.4.6-.3 1.8-1 1.6-1.7zm-11-2.6c-.1.3-.2.6-.3.9-.7 0-1.3-.3-1.8-.8-.6-.6-.9-1.5-.8-2.4.2-1.3.1-2.4.1-3 .3-.3 1.7-1 2.6-.8.4.1.7.4.8.9.6 2.7.1 3.8-.3 4.7-.1.2-.2.4-.3.5z"
      />
    </svg>
  );
}

/** 3. FedEx */
export function FedExLogo({ className = "h-5 w-auto" }: LogoProps) {
  return (
    <svg viewBox="0 0 92 24" className={className} fill="currentColor" aria-label="FedEx">
      {/* Fed */}
      <path d="M0 22V2h14.5v3.8H4.6v4.3h8.4v3.8H4.6V22H0zM15.5 14.5c0-4.6 3.4-7.8 8.1-7.8 4.7 0 7.8 3.3 7.8 8v.7H19.7c.3 2.1 2 3.6 4.3 3.6 1.6 0 2.9-.6 3.7-1.6l2.7 2.3c-1.5 1.8-3.7 2.8-6.6 2.8-5 0-8.3-3.3-8.3-8zm11.9-1.8c-.2-1.8-1.7-3.1-3.7-3.1-2 0-3.6 1.3-3.9 3.1h7.6zM32.5 22V0h4.6v8.4c1.1-1.2 2.6-1.8 4.4-1.8 3.8 0 6.6 2.9 6.6 7.7 0 4.7-2.8 7.7-6.6 7.7-1.8 0-3.3-.7-4.4-1.9V22h-4.6zm7.5-3.3c2.4 0 4-1.9 4-4.4 0-2.6-1.6-4.4-4-4.4-2.3 0-3.9 1.8-3.9 4.4 0 2.5 1.6 4.4 3.9 4.4z" />
      {/* Ex with hidden arrow */}
      <path d="M50.2 22V2h13.2v3.8h-8.6v4h7.5v3.8h-7.5v4.6h8.8V22H50.2zm13.6-7.8l5.8-7.5h5.5l-6.8 8.3 7.2 9H70l-6.2-8.3v8.3h-4.5V2h4.5v12.2z" />
      {/* Arrow between E and x */}
      <path d="M74.8 14.4l-3.2-3.8h4.5l3.5 4.3-3.6 4.4h-4.5l3.3-4.9z" opacity="0.9" />
    </svg>
  );
}

/** 4. HubSpot */
export function HubSpotLogo({ className = "h-5 w-auto" }: LogoProps) {
  return (
    <svg viewBox="0 0 110 24" className={className} fill="currentColor" aria-label="HubSpot">
      {/* Hub */}
      <path d="M0 22V2h4.6v7.4h8.3V2h4.6v20h-4.6v-8.2H4.6V22H0zM20.2 16.5V6.7h4.4v9.6c0 1.5.9 2.3 2.3 2.3s2.3-.8 2.3-2.3V6.7h4.4v9.8c0 3.8-2.6 5.9-6.7 5.9s-6.7-2.1-6.7-5.9zM36.3 22V2h7.8c3.9 0 6.2 2 6.2 4.9 0 1.8-.9 3.2-2.4 4 2 .8 3 2.4 3 4.6 0 3.6-2.9 6.5-7.3 6.5h-7.3zm4.5-12.3h3.2c1.3 0 2.2-.7 2.2-1.8 0-1.2-.9-1.8-2.2-1.8h-3.2v3.6zm0 8h3.5c1.4 0 2.4-.7 2.4-2 0-1.2-1-2-2.4-2h-3.5v4z" />
      {/* Spot with connected circle */}
      <path d="M53.1 18.2l2.6-2.5c1.4 1.3 3 2 4.8 2 1.5 0 2.4-.6 2.4-1.5 0-1-.8-1.4-2.9-1.9-3.2-.8-5.3-2-5.3-4.9 0-2.8 2.3-5 5.9-5 2.1 0 4 .7 5.5 1.9l-2.4 2.7c-1.2-.9-2.3-1.4-3.3-1.4-1.2 0-1.9.6-1.9 1.3 0 .8.8 1.2 2.6 1.7 3.5.9 5.6 2 5.6 5.1 0 3.2-2.5 5.2-6.5 5.2-3.1 0-5.3-.9-7.1-2.7zM68.5 22V6.7h4.2v2.2c1-1.6 2.7-2.4 4.7-2.4 3.7 0 6.4 3.1 6.4 7.7 0 4.6-2.7 7.8-6.4 7.8-2 0-3.6-.8-4.7-2.4V22h-4.2zm7.4-4c2.2 0 3.7-1.8 3.7-4.3 0-2.5-1.5-4.3-3.7-4.3-2.2 0-3.7 1.8-3.7 4.3 0 2.5 1.5 4.3 3.7 4.3z" />
      {/* Connected hub circle */}
      <circle cx="95" cy="12" r="5.5" fill="none" stroke="currentColor" strokeWidth="3" />
      <circle cx="104" cy="5" r="2.5" />
      <line x1="99" y1="8" x2="103" y2="5" stroke="currentColor" strokeWidth="2" />
      <path d="M106.5 8.5v3.2h2.2v2.8h-2.2v4.8c0 .9.4 1.3 1.3 1.3.4 0 .7 0 1-.1v2.8c-.8.2-1.6.3-2.5.3-2.7 0-4-1.3-4-3.9v-5.2h-1.8v-2.8h1.8V8.5h4.2z" />
    </svg>
  );
}

/** 5. Microsoft */
export function MicrosoftLogo({ className = "h-5 w-auto" }: LogoProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-label="Microsoft">
      <rect x="1" y="1" width="10" height="10" rx="0.5" />
      <rect x="13" y="1" width="10" height="10" rx="0.5" />
      <rect x="1" y="13" width="10" height="10" rx="0.5" />
      <rect x="13" y="13" width="10" height="10" rx="0.5" />
    </svg>
  );
}

/** 6. Walmart */
export function WalmartLogo({ className = "h-5 w-auto" }: LogoProps) {
  return (
    <svg viewBox="0 0 108 24" className={className} fill="currentColor" aria-label="Walmart">
      <text
        x="0"
        y="18"
        fontFamily="system-ui, -apple-system, sans-serif"
        fontSize="19"
        fontWeight="700"
        letterSpacing="-0.03em"
      >
        Walmart
      </text>
      {/* Walmart 6-spark star */}
      <g transform="translate(86, 12)">
        <path d="M0 -10 C0.8 -10, 1.4 -9.4, 1.4 -8.5 L1.4 -2.5 C1.4 -1.6, 0.8 -1, 0 -1 C-0.8 -1, -1.4 -1.6, -1.4 -2.5 L-1.4 -8.5 C-1.4 -9.4, -0.8 -10, 0 -10 Z" fill="#FFC220" />
        <path d="M0 -10 C0.8 -10, 1.4 -9.4, 1.4 -8.5 L1.4 -2.5 C1.4 -1.6, 0.8 -1, 0 -1 C-0.8 -1, -1.4 -1.6, -1.4 -2.5 L-1.4 -8.5 C-1.4 -9.4, -0.8 -10, 0 -10 Z" transform="rotate(60)" fill="#FFC220" />
        <path d="M0 -10 C0.8 -10, 1.4 -9.4, 1.4 -8.5 L1.4 -2.5 C1.4 -1.6, 0.8 -1, 0 -1 C-0.8 -1, -1.4 -1.6, -1.4 -2.5 L-1.4 -8.5 C-1.4 -9.4, -0.8 -10, 0 -10 Z" transform="rotate(120)" fill="#FFC220" />
        <path d="M0 -10 C0.8 -10, 1.4 -9.4, 1.4 -8.5 L1.4 -2.5 C1.4 -1.6, 0.8 -1, 0 -1 C-0.8 -1, -1.4 -1.6, -1.4 -2.5 L-1.4 -8.5 C-1.4 -9.4, -0.8 -10, 0 -10 Z" transform="rotate(180)" fill="#FFC220" />
        <path d="M0 -10 C0.8 -10, 1.4 -9.4, 1.4 -8.5 L1.4 -2.5 C1.4 -1.6, 0.8 -1, 0 -1 C-0.8 -1, -1.4 -1.6, -1.4 -2.5 L-1.4 -8.5 C-1.4 -9.4, -0.8 -10, 0 -10 Z" transform="rotate(240)" fill="#FFC220" />
        <path d="M0 -10 C0.8 -10, 1.4 -9.4, 1.4 -8.5 L1.4 -2.5 C1.4 -1.6, 0.8 -1, 0 -1 C-0.8 -1, -1.4 -1.6, -1.4 -2.5 L-1.4 -8.5 C-1.4 -9.4, -0.8 -10, 0 -10 Z" transform="rotate(300)" fill="#FFC220" />
      </g>
    </svg>
  );
}

/** 7. Amazon */
export function AmazonLogo({ className = "h-5 w-auto" }: LogoProps) {
  return (
    <svg viewBox="0 0 88 26" className={className} fill="currentColor" aria-label="Amazon">
      <text
        x="0"
        y="17"
        fontFamily="system-ui, -apple-system, sans-serif"
        fontSize="19"
        fontWeight="700"
        letterSpacing="-0.04em"
      >
        amazon
      </text>
      {/* Curved smile arrow */}
      <path
        d="M8 21.5 C24 26.5 48 26 66 18.5"
        fill="none"
        stroke="#FF9900"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path
        d="M63 17.5 L67.5 18.2 L65.5 21 Z"
        fill="#FF9900"
      />
    </svg>
  );
}
