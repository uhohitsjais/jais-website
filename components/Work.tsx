const projects = [
  {
    number: "01",
    company: "TaskHuman",
    title: "Programs Infrastructure",
    tags: ["Infrastructure", "Ops", "Scale"],
    summary:
      "Led the strategy and 0-to-1 development of TaskHuman's personalized coaching programs, which drove over 80% of company revenue. This product line was specifically designed to accelerate activation and drive repeat usage. Backend infrastructure reduced manual setup time from 4+ hours to 10 minutes and supported deployment at scale, while UX improvements led to a 30% increase in program completion.",
    metrics: [
      { value: "4 hrs → 10 min", label: "Setup time" },
      { value: "80%+", label: "Revenue impact" },
    ],
  },
  {
    number: "02",
    company: "TaskHuman",
    title: "Group Sessions & Engagement",
    tags: ["Engagement", "Product Design", "API Integration", "Automation"],
    summary:
      "Redesigned the group session experience to improve discoverability and drive participation. Work included navigation redesign, improved session visibility, and a Zoom SDK integration that automated attendance tracking and improved data accuracy. Registration-to-attendance conversion increased 33%.",
    metrics: [
      { value: "↑ 33%", label: "Registration-to-attendance" },
      { value: "Zoom SDK", label: "Attendance automation" },
    ],
  },
  {
    number: "03",
    company: "TaskHuman",
    title: "Pricing & Revenue Model Infrastructure",
    tags: ["Revenue Model", "Business Strategy", "Marketplace Pricing"],
    summary:
      "TaskHuman's original pricing model offered unlimited usage to all employees, which was eroding gross margins. Tasked with solving this as a top priority for the business, I designed and shipped two new pricing models for the B2B marketplace: a coupon code system and a usage-based model with monthly minute caps. Both required navigating complex edge cases across employer-funded licensing tiers and careful phasing to avoid disrupting live revenue. Clients who adopted the new models saw gross margins improve by over 40%.",
    metrics: [
      { value: "↑ 40%+", label: "Gross margin improvement" },
      { value: "$0 disruption", label: "Live revenue protected" },
    ],
  },
  {
    number: "04",
    company: "CartWheel",
    title: "Cartwheel — Cooking Support for Home Cooks",
    tags: ["0-to-1", "Consumer", "Behavior Design", "AI-Native Development"],
    summary:
      "Building a consumer app that helps home cooks figure out what to make with what they already have. Cartwheel is designed around a core insight: most people don't need more recipes, they need help making a decision. The product reduces friction at the moment of \"what's for dinner\" by turning available ingredients into actionable options.",
    metrics: [
      { value: "0 → 1", label: "Founder & product lead" },
      { value: "In progress", label: "Active development" },
    ],
  },
];

export default function Work() {
  return (
    <section id="work" className="py-24 sm:py-32 bg-white">
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        {/* Header */}
        <div className="mb-16">
          <p className="text-xs font-semibold text-[#7E83FF] uppercase tracking-widest mb-4">
            Selected Work
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#3A49A3] leading-tight">
            Projects & case studies
          </h2>
          <div className="w-16 mt-4" style={{ height: "2px", backgroundColor: "#FFA8EA" }} />
        </div>

        {/* Project list */}
        <div className="flex flex-col gap-6">
          {projects.map((project) => (
            <div
              key={project.number}
              className="group border border-gray-100 rounded-2xl p-8 sm:p-10 hover:border-[#7E83FF]/40 hover:shadow-lg hover:shadow-[#7E83FF]/5 transition-all duration-300 bg-white"
            >
              <div className="flex flex-col sm:flex-row sm:items-start gap-6">
                {/* Number */}
                <span className="text-5xl font-bold text-[#7E83FF]/20 group-hover:text-[#7E83FF]/40 transition-colors leading-none shrink-0 select-none">
                  {project.number}
                </span>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="text-xs font-bold text-[#3A49A3] uppercase tracking-widest">
                      {project.company}
                    </span>
                    <span className="text-[#FFA8EA]">·</span>
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs bg-[#f3f4f6] text-[#374151] px-2.5 py-0.5 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-[#374151] mb-3">
                    {project.title}
                  </h3>

                  <p className="text-[#6b7280] leading-relaxed mb-6 max-w-2xl">
                    {project.summary}
                  </p>

                  {/* Metrics */}
                  <div className="flex flex-wrap gap-6">
                    {project.metrics.map((m) => (
                      <div key={m.label}>
                        <p className="text-base font-bold text-[#3A49A3]">
                          {m.value}
                        </p>
                        <p className="text-xs text-[#9ca3af] mt-0.5">{m.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
