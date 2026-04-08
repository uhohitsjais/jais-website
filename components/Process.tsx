const steps = [
  {
    number: "01",
    title: "Understand",
    description:
      "We dig into your product, your users, and where things are breaking down. I read the docs, poke around the product, and ask the uncomfortable questions.",
  },
  {
    number: "02",
    title: "Align",
    description:
      "I bring findings back with clear prioritization and a point of view. We align on what matters most before writing a line of a roadmap.",
  },
  {
    number: "03",
    title: "Ship",
    description:
      "I work alongside your team to design, spec, and move work forward — not as an outside advisor, but as an embedded partner accountable to outcomes.",
  },
];

export default function Process() {
  return (
    <section className="py-24 sm:py-32 bg-white">
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        <div className="mb-16">
          <p className="text-xs font-semibold text-[#7E83FF] uppercase tracking-widest mb-4">
            How I Work
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#3A49A3] leading-tight">
            Embedded, not advisory
          </h2>
          <div className="w-16 mt-4" style={{ height: "2px", backgroundColor: "#FFA8EA" }} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
          {steps.map((step, index) => (
            <div key={step.number} className="flex md:flex-col items-start gap-4 md:gap-0 pb-8 md:pb-0">
              {/* Connector line (desktop) */}
              <div className="hidden md:flex items-center mb-6">
                <span className="text-4xl font-bold text-[#7E83FF]/20 mr-4">
                  {step.number}
                </span>
                {index < steps.length - 1 && (
                  <div className="flex-1 h-px bg-gradient-to-r from-[#7E83FF]/30 to-transparent min-w-[80px]" />
                )}
              </div>

              {/* Mobile number */}
              <span className="md:hidden text-3xl font-bold text-[#7E83FF]/20 shrink-0">
                {step.number}
              </span>

              <div className="md:pr-8">
                <h3 className="text-lg font-bold text-[#374151] mb-2">
                  {step.title}
                </h3>
                <p className="text-[#6b7280] text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
