export default function SectionHeading({ icon: Icon, children }) {
  return (
    <div className="mb-10 flex items-center gap-4">
      <span className="grid h-11 w-11 place-items-center rounded-xl border border-amber-500/20 bg-[color:var(--accent-soft)]"><>{Icon && <Icon className="text-[1.8rem] text-[color:var(--accent)]" />}</></span>
      <h2 className="text-[clamp(3.4rem,5vw,6.4rem)] leading-tight tracking-tight">
        {children}
      </h2>
    </div>
  );
}
