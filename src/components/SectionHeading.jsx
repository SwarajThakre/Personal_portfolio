export default function SectionHeading({ icon: Icon, children }) {
  return (
    <div className="mb-8 flex flex-col items-center justify-center">
      <h2 className="flex items-center justify-center gap-4 text-center text-[clamp(2.8rem,4vw,3.6rem)]">
        {Icon && <Icon className="text-[2.8rem] text-[color:var(--accent)]" />}
        {children}
      </h2>
      <div className="mt-4 h-[0.3rem] w-28 rounded-full bg-[linear-gradient(90deg,var(--accent),var(--secondary))]" />
    </div>
  );
}
