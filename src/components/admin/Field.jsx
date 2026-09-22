"use client";

const inputClass =
  "w-full px-3 py-2.5 bg-transparent border border-hairline text-ink placeholder:text-zinc-600 text-sm focus:outline-none focus:border-gold transition-colors";

export function Field({ label, children }) {
  return (
    <label className="block space-y-1.5">
      <span className="type-label text-zinc-500">{label}</span>
      {children}
    </label>
  );
}

export function TextInput(props) {
  return <input {...props} className={inputClass} />;
}

export function TextArea(props) {
  return <textarea {...props} className={`${inputClass} resize-y`} />;
}

export function Select({ children, ...props }) {
  return (
    <select {...props} className={inputClass}>
      {children}
    </select>
  );
}
