// Red alert box used for empty search results and missing users.
export default function ErrorMessage({ message = 'Something went wrong.' }) {
  return (
    <div
      role="alert"
      className="flex items-center gap-3 rounded-lg border border-rose-300 bg-rose-50 px-4 py-3 text-rose-800 dark:border-rose-800 dark:bg-rose-950 dark:text-rose-200"
    >
      <span aria-hidden="true" className="text-lg leading-none">
        &#9888;
      </span>
      <p className="text-sm font-semibold">{message}</p>
    </div>
  )
}