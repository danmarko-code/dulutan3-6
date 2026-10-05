// Loading indicator shown while data is being "fetched".
export default function Loader({ text = 'Loading...' }) {
  return (
    <div
      role="status"
      aria-live="polite"
      className="flex flex-col items-center justify-center gap-4 py-16"
    >
      <div className="h-12 w-12 animate-spin rounded-full border-4 border-slate-200 border-t-indigo-600 dark:border-slate-700 dark:border-t-indigo-400" />
      <p className="text-base font-medium text-slate-600 dark:text-slate-300">
        {text}
      </p>
    </div>
  )
}