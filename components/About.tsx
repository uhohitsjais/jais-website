import Image from "next/image";

export default function About() {
  const tags = [
    "Product Strategy",
    "0-to-1 Builds",
    "Onboarding & Retention",
    "Behavior Change",
    "Marketplace Dynamics",
    "Product Operations",
    "Internal Tooling",
    "Holistic Wellness",
    "Cross-functional Execution",
  ];

  return (
    <section id="about" className="py-24 sm:py-32 bg-[#f9fafb]">
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text column */}
          <div>
            <p className="text-xs font-semibold text-[#7E83FF] uppercase tracking-widest mb-4">
              About
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#3A49A3] leading-tight mb-4">
              Product thinking grounded in real life
            </h2>
            <div className="w-16 mb-8" style={{ height: "2px", backgroundColor: "#FFA8EA" }} />
            <p className="text-[#374151] leading-relaxed text-lg mb-6">
              I&apos;m a Senior Product Manager with experience across product,
              operations, revenue model design, and behavior change. I&apos;ve led
              0&rarr;1 product development, built pricing and infrastructure
              systems, and helped teams turn complex ideas into something they
              can actually execute.
            </p>
            <p className="text-[#374151] leading-relaxed text-lg mb-6">
              I&apos;m known for bringing clarity to messy problems, taking edge
              cases, competing priorities, and half-formed ideas and turning them
              into structured, usable plans.
            </p>
            <p className="text-[#374151] leading-relaxed text-lg">
              As a health coach and mom, I&apos;m especially drawn to products that
              support women in real life, not idealized routines. That
              perspective shapes how I think about what actually drives
              activation, engagement, and long-term use.
            </p>
          </div>

          {/* Right column: tags + headshot placeholder */}
          <div className="flex flex-col gap-8">
            {/* Headshot */}
            <div className="relative w-52 h-64 sm:w-60 sm:h-72 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/headshot.png"
                alt="Jais Tollette"
                fill
                className="object-cover object-top"
                priority
              />
            </div>

            {/* Skill tags */}
            <div>
              <p className="text-xs font-semibold text-[#374151] uppercase tracking-widest mb-3">
                Areas of depth
              </p>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-sm bg-white border border-[#7E83FF]/30 text-[#3A49A3] px-3 py-1.5 rounded-full font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
