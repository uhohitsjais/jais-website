const services = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.35-4.35" />
      </svg>
    ),
    title: "Product Audit",
    tagline: "Clarity in 2–3 weeks",
    description:
      "Sometimes you need an objective third-party perspective. I'll review your onboarding, engagement, and retention flows and identify concrete opportunities to improve activation and retention. You get a written findings doc and prioritized recommendations, straight from your target audience. No generic decks.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
    title: "Fractional PM Support",
    tagline: "Embedded partnership",
    description:
      "Need a senior PM-level thought partner but not ready for a full-time hire? I'll embed with your team to bring vision and strategy, roadmap acceleration, cross-functional coordination, and product execution. Don't let your backlog become your graveyard.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
    title: "Program & Experience Design",
    tagline: "Structure that sticks",
    description:
      "Your product does a lot. That's the good news and the problem. I'll help turn your broad appeal into focused, structured experiences that guide users toward a specific goal. Especially useful for health, coaching, and content-driven products where users need a clear path, not just more options.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20h9" />
        <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
      </svg>
    ),
    title: "Product Operations",
    tagline: "Systems that scale",
    description:
      "Your team has the talent and the vision. What's missing is the scaffolding. I'll build the internal workflows, communication structures, and operational systems that help your team ship with clarity and stay aligned as you grow. Ideal for teams where great ideas keep getting lost between Slack, sprints, and good intentions.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 sm:py-32 bg-[#f9fafb]">
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        {/* Header */}
        <div className="mb-16">
          <p className="text-xs font-semibold text-[#7E83FF] uppercase tracking-widest mb-4">
            Services
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#3A49A3] leading-tight">
            Pick your starting point
          </h2>
          <div className="w-16 mt-4" style={{ height: "2px", backgroundColor: "#FFA8EA" }} />
        </div>

        {/* Service cards — 2x2 grid on md+ */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white rounded-2xl p-8 border border-gray-100 hover:border-[#7E83FF]/30 hover:shadow-lg hover:shadow-[#7E83FF]/5 transition-all duration-300 flex flex-col"
            >
              <div className="w-12 h-12 rounded-xl bg-[#7E83FF]/10 text-[#7E83FF] flex items-center justify-center mb-5">
                {service.icon}
              </div>
              <p className="text-xs font-semibold text-[#7E83FF] uppercase tracking-widest mb-1">
                {service.tagline}
              </p>
              <h3 className="text-xl font-bold text-[#374151] mb-3">
                {service.title}
              </h3>
              <p className="text-[#6b7280] leading-relaxed text-sm flex-1">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-[#3A49A3] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#2e3a82] transition-all hover:shadow-lg hover:shadow-[#3A49A3]/20"
          >
            Not sure what fits? I&apos;ll help you figure it out.
          </a>
        </div>
      </div>
    </section>
  );
}
