import React from "react";

export function GoogleCloudIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"
        fill="#4285F4"
      />
      <path
        d="M6 14c0-3.31 2.69-6 6-6 1.8 0 3.42.8 4.52 2.08L14 12.55l-2.05-1.55L8.5 13l-2.5 1z"
        fill="#34A853"
        opacity="0.9"
      />
      <path
        d="M19 18H6c-2.21 0-4-1.79-4-4 0-2.05 1.53-3.76 3.56-3.97l1.07-.11.5-.95C8.08 7.14 9.94 6 12 6c2.62 0 4.88 1.86 5.39 4.44l.35 1.77 1.8.18C20.6 12.5 21.4 13.3 21.4 14.5c0 1.93-1.57 3.5-3.4 3.5z"
        fill="#EA4335"
        opacity="0.3"
      />
    </svg>
  );
}

export function AzureIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M13.05 4.24l-6.1 11.23L2 17.5h8.5l2.55-4.76 4.9 4.76H22l-8.95-13.26z"
        fill="#0089D6"
      />
      <path
        d="M13.05 4.24l-3.3 6.07 3.29 2.43 4.91 4.76H22l-8.95-13.26z"
        fill="#0072C6"
      />
    </svg>
  );
}

export function AwsIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M6.7 10.2c0-.5.4-.8 1.1-.8.7 0 1.4.2 2 .6v-1.6c-.6-.3-1.3-.4-2-.4-1.9 0-3 1-3 2.5 0 2.2 3.1 1.7 3.1 3 0 .6-.5.9-1.3.9-.8 0-1.7-.3-2.3-.8v1.6c.7.4 1.5.5 2.3.5 2.1 0 3.2-1.1 3.2-2.6 0-2.3-3.1-1.8-3.1-2.9zm6.6-2h-1.9l2 7.2h1.8l1.4-5 1.4 5h1.8l2-7.2h-1.9l-1.2 4.9-1.3-4.9h-1.6l-1.3 4.9-1.2-4.9z"
        fill="#FF9900"
      />
      <path
        d="M3.2 19c6.4 3.7 14.5 1.5 18.2-2.8-.2-.3-.8-.5-1.4-.3-2.7 3.1-9.1 4.8-14.8 1.9-.5-.3-1 .8-1.4 1.5l-.6-.3z"
        fill="#FF9900"
      />
    </svg>
  );
}

export function StripeIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="24" height="24" rx="4" fill="#635BFF" />
      <path
        d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-4.329C17.656 1.968 15.011 1.5 12.43 1.5 6.84 1.5 3.12 4.417 3.12 9.075c0 6.012 8.358 6.304 8.358 9.537 0 .991-.842 1.488-2.302 1.488-2.548 0-5.594-1.185-7.447-2.327L.84 22.096C2.868 23.164 6.275 24 9.477 24c5.875 0 9.774-2.88 9.774-7.618 0-6.425-8.528-6.666-8.528-9.732 0-.84.66-1.25 1.83-1.25 2.01 0 4.1.75 5.56 1.43l-.7-3.79c-1.34-.62-3.14-.94-4.8-.94-4.66 0-7.85 2.37-7.85 6.2 0 5.17 7.02 5.59 7.02 8.37 0 .86-.73 1.3-1.99 1.3-2.15 0-4.67-.93-6.27-1.89l-.75 4.09c1.78.89 4.67 1.57 7.37 1.57 4.95 0 8.31-2.43 8.31-6.52-.01-5.46-7.07-5.91-7.07-8.66z"
        fill="#FFFFFF"
        transform="scale(0.7) translate(5, 5)"
      />
    </svg>
  );
}

export function PostgresIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.2 4.8c1.3.2 2.3.8 2.8 1.7.5.9.4 2.1-.2 3.1-.4.7-1 1.2-1.7 1.5v2.4c0 .8-.5 1.5-1.2 1.8-.7.3-1.5.2-2.1-.3l-1.3-1.1c-.4-.3-.6-.8-.6-1.3v-2.3c-.6-.3-1.1-.8-1.4-1.4-.4-1-.3-2.1.2-3 .5-.9 1.5-1.5 2.8-1.7.9-.1 1.8-.1 2.7.3z"
        fill="#336791"
      />
    </svg>
  );
}

export function VercelIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2L24 22H0L12 2Z" fill="#FFFFFF" />
    </svg>
  );
}

export function DockerIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M13.98 10.97h2.23V8.75h-2.23v2.22zm-2.78 0h2.22V8.75H11.2v2.22zm-2.77 0h2.22V8.75H8.43v2.22zm-2.78 0h2.22V8.75H5.65v2.22zm8.33-2.78h2.23V5.97h-2.23v2.22zm-2.78 0h2.22V5.97H11.2v2.22zm-2.77 0h2.22V5.97H8.43v2.22zm8.33 5.56h2.23V11.53h-2.23v2.22zm7.65-1.28c-.37-.24-.96-.34-1.53-.19-.17-.79-.69-1.42-1.36-1.75l-.36-.18-.25.32c-.52.68-.78 1.57-.73 2.45-.48.24-.98.39-1.5.45H1.42c-.28 1.4.15 2.85 1.13 3.88 1.34 1.41 3.29 2.06 6.36 2.06 6.46 0 11.23-3.08 12.83-7.52.92.1 1.7-.13 2.2-.62.3-.28.43-.6.43-.9zm0 0"
        fill="#2496ED"
      />
    </svg>
  );
}

export function KubernetesIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M11.64 2.06a.75.75 0 01.72 0l8.7 5.02c.22.13.36.37.36.62v10.05c0 .26-.14.49-.36.62l-8.7 5.02a.75.75 0 01-.72 0l-8.7-5.02a.72.72 0 01-.36-.62V7.7c0-.25.14-.49.36-.62l8.7-5.02z"
        fill="#326CE5"
      />
      <circle cx="12" cy="12" r="3" fill="#ffffff" />
    </svg>
  );
}

export function CloudflareIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M18.2 10.2c-.3-2.4-2.4-4.2-4.9-4.2-2.1 0-3.9 1.3-4.6 3.1-.5-.2-1.1-.3-1.7-.3-2.5 0-4.5 2-4.5 4.5 0 .2 0 .4.1.6C1.1 14.5 0 15.9 0 17.5 0 19.4 1.6 21 3.5 21h15c2.5 0 4.5-2 4.5-4.5 0-2.3-1.7-4.2-4-4.5-.3-.7-.5-1.3-.8-1.8z"
        fill="#F38020"
      />
    </svg>
  );
}

export function SupabaseIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M11.9 1.1c.4-.7 1.5-.5 1.6.4l1.3 9.4h7.6c.9 0 1.4 1.1.8 1.8l-9.8 11.2c-.6.7-1.7.3-1.7-.6l.3-9.5H3.6c-.9 0-1.4-1-.8-1.7L11.9 1.1z"
        fill="#3ECF8E"
      />
    </svg>
  );
}

export function RedisIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M2 7.5L12 2l10 5.5v9L12 22 2 16.5v-9zm10 2.5l7-3.8-7-3.9-7 3.9 7 3.8zm-8 1.7v4.6l7 3.9v-4.7l-7-3.8zm16 0l-7 3.8v4.7l7-3.9v-4.6z"
        fill="#DC382D"
      />
    </svg>
  );
}

export function NextJsIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="11" fill="#000000" stroke="#ffffff" strokeWidth="1.5" />
      <path
        d="M15.5 8.5v7m-7-7v7l8.2-7"
        stroke="#ffffff"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export const BRAND_ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  gcp: GoogleCloudIcon,
  azure: AzureIcon,
  aws: AwsIcon,
  stripe: StripeIcon,
  postgres: PostgresIcon,
  vercel: VercelIcon,
  docker: DockerIcon,
  kubernetes: KubernetesIcon,
  cloudflare: CloudflareIcon,
  supabase: SupabaseIcon,
  redis: RedisIcon,
  nextjs: NextJsIcon,
};
