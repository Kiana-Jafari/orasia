import type { SVGProps } from "react";

export function InstagramIcon(props: SVGProps<SVGSVGElement>) {
    return (
        <svg viewBox="0 0 24 24" fill="none" {...props}>
            <rect x="2.5" y="2.5" width="19" height="19" rx="5" stroke="currentColor" strokeWidth="1.6" />
            <circle cx="12" cy="12" r="4.3" stroke="currentColor" strokeWidth="1.6" />
            <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" />
        </svg>
    );
}

export function LinkedInIcon(props: SVGProps<SVGSVGElement>) {
    return (
        <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
            <path d="M6.94 8.5H3.56V20h3.38V8.5ZM5.25 3.2a1.96 1.96 0 1 0 0 3.92 1.96 1.96 0 0 0 0-3.92ZM20.44 20h-3.37v-5.9c0-1.4-.03-3.2-1.95-3.2-1.96 0-2.26 1.53-2.26 3.1V20H9.5V8.5h3.24v1.57h.05c.45-.85 1.55-1.75 3.2-1.75 3.42 0 4.05 2.25 4.05 5.18V20Z" />
        </svg>
    );
}