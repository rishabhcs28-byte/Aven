/** Decorative line art. Hidden from screen readers. */
export function HeroIllustration({ className = '' }: { className?: string }) {
  const line = 'fill-none stroke-teal-deep'
  return (
    <svg
      viewBox="0 0 360 240"
      aria-hidden="true"
      focusable="false"
      className={className}
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="258" cy="96" r="48" className="fill-terracotta/15" />
      <rect x="196" y="28" width="124" height="150" rx="3" className={line} />
      <path d="M258 28v150M196 103h124" className={line} />
      <path d="M36 198h308" className={line} />
      <circle cx="98" cy="96" r="19" className={line} />
      <path
        d="M84 113c-22 6-33 30-28 54 2 13 11 21 25 21h52c10 0 15-8 12-17-6-19-22-32-38-38"
        className={line}
      />
      <path d="M212 176h34v8c0 9-6 14-17 14s-17-5-17-14z" className={line} />
      <path d="M246 181h5a5 5 0 0 1 0 10h-5" className={line} />
      <path
        d="M222 166c-4-6 4-8 0-14M234 166c-4-6 4-8 0-14"
        className="fill-none stroke-terracotta"
      />
    </svg>
  )
}
