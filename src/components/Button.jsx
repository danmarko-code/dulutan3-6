// Reusable button component.
// Props:
//   label    -> text rendered inside the button
//   onClick   -> click handler
//   variant  -> 'primary' | 'danger'
//   children -> optional extra content rendered after the label
const variants = {
  primary:
    'bg-indigo-600 text-white hover:bg-indigo-700 focus-visible:outline-indigo-600',
  danger:
    'bg-rose-600 text-white hover:bg-rose-700 focus-visible:outline-rose-600',
}

export default function Button({
  label,
  onClick,
  variant = 'primary',
  children,
  type = 'button',
  className = '',
}) {
  const styles = variants[variant] ?? variants.primary

  return (
    <button
      type={type}
      onClick={onClick}
      className={`inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${styles} ${className}`}
    >
      {label}
      {children}
    </button>
  )
}