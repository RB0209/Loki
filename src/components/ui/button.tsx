export function Button({ children, className, ...props }) {
  return <button className={`rounded px-4 py-2 font-semibold transition ${className}`} {...props}>{children}</button>;
}