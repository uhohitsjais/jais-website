const fits = [
  "Your users love the product but churn is creeping up",
  "You have traction but no structured onboarding",
  "Your team is shipping features but nobody owns the experience end-to-end",
  "Your internal systems are held together by Slack threads and good intentions",
  "Cross-functional communication is slowing you down more than the actual work",
  "You know you need a PM but you're not ready to hire one full-time",
];

export default function IdealFit() {
  return (
    <section className="py-24 sm:py-32 bg-[#3A49A3] relative overflow-hidden">
      {/* Subtle pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, white 1px, transparent 1px), radial-gradient(circle at 60% 60%, white 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative max-w-5xl mx-auto px-6 sm:px-8">
        <div className="mb-12">
          <p className="text-xs font-semibold text-[#7E83FF] uppercase tracking-widest mb-4">
            Ideal Fit
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight mb-4">
            You might need me if&hellip;
          </h2>
          <div className="w-16" style={{ height: "2px", backgroundColor: "#FFA8EA" }} />
        </div>

        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {fits.map((fit) => (
            <li
              key={fit}
              className="flex items-start gap-4 bg-white/10 backdrop-blur-sm rounded-xl px-6 py-4 border border-white/10"
            >
              <span className="text-[#FFA8EA] text-xs mt-1 shrink-0">◆</span>
              <span className="text-white font-medium leading-snug">{fit}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
