type MediaPlaceholderProps = {
  label: string;
  helper?: string;
  className?: string;
};

export function MediaPlaceholder({ label, helper, className }: MediaPlaceholderProps) {
  return (
    <div
      className={`flex h-full w-full flex-col items-center justify-center rounded-xl border border-dashed border-neutral-300 bg-white/60 p-6 text-center ${className ?? ""}`}
    >
      <p className="text-sm font-semibold text-neutral-600">{label}</p>
      {helper && <p className="mt-2 text-xs text-neutral-400">{helper}</p>}
    </div>
  );
}
