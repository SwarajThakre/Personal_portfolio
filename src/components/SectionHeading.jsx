export default function SectionHeading({ icon: Icon, children }) {
  return (
    <h2 className="section-heading">
      {Icon && <Icon className="section-heading__icon" />}
      {children}
    </h2>
  );
}
