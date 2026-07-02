export function AvailabilityDot() {
  return (
    <span
      className="relative inline-flex shrink-0"
      style={{ width: 10, height: 10 }}
      aria-hidden
    >
      <span
        className="absolute inset-0 rounded-full motion-reduce:hidden"
        style={{
          backgroundColor: '#22c55e',
          animation: 'availability-dot-pulse 2.75s ease-in-out infinite'
        }}
      />
      <svg
        width={10}
        height={10}
        viewBox="0 0 10 10"
        className="relative block"
        aria-hidden
      >
        <circle cx="5" cy="5" r="4.5" fill="#22c55e" />
      </svg>
    </span>
  )
}
