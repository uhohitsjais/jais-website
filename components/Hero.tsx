export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-white overflow-hidden pt-16">
      {/* Subtle background texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at 70% 30%, rgba(126,131,255,0.06) 0%, transparent 60%), radial-gradient(ellipse at 20% 80%, rgba(58,73,163,0.04) 0%, transparent 50%)",
        }}
      />

      <div className="relative max-w-5xl mx-auto px-6 sm:px-8 py-12 sm:py-16 w-full">
        {/* Availability badge */}
        <div className="inline-flex items-center gap-2 bg-[#7E83FF]/10 border border-[#7E83FF]/20 rounded-full px-4 py-1.5 mb-7">
          <span className="w-2 h-2 rounded-full bg-[#7E83FF] animate-pulse" />
          <span className="text-xs font-medium text-[#3A49A3] tracking-wide uppercase">
            Taking on 1–2 new clients
          </span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#374151] leading-[1.1] tracking-tight max-w-3xl mb-5">
          Your users love the product.{" "}
          <span className="text-[#3A49A3]">They just don&apos;t come back.</span>
        </h1>

        <div className="w-20 mb-6" style={{ height: "2px", backgroundColor: "#FFA8EA" }} />

        <p className="text-lg sm:text-xl text-[#6b7280] leading-relaxed max-w-2xl mb-10">
          I&apos;m a fractional Product Manager for health and wellness brands. I
          help early-to-mid stage teams build women&apos;s lifestyle products that
          turn good intentions into habits that stick.
        </p>

        <div className="flex flex-col items-start gap-3">
          <a
            href="#contact"
            className="inline-flex items-center justify-center bg-[#3A49A3] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#2e3a82] transition-all hover:shadow-lg hover:shadow-[#3A49A3]/20 text-base"
          >
            Work With Me
          </a>
          <a
            href="#work"
            className="text-sm text-[#6b7280] underline underline-offset-4 decoration-[#FFA8EA] hover:text-[#3A49A3] transition-colors pl-1"
          >
            View selected work
          </a>
        </div>

        {/* Stats strip */}
        <div className="mt-14 pt-8 border-t border-gray-100 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl">
          <div>
            <p className="text-3xl font-bold text-[#3A49A3]">80%+</p>
            <p className="text-sm text-[#6b7280] mt-1">
              of company revenue from products I owned
            </p>
          </div>
          <div>
            <p className="text-3xl font-bold text-[#3A49A3]">4 hrs → 10 min</p>
            <p className="text-sm text-[#6b7280] mt-1">
              Program setup time reduced via admin tooling and infrastructure work
            </p>
          </div>
          <div>
            <p className="text-3xl font-bold text-[#3A49A3]">0 → 1</p>
            <p className="text-sm text-[#6b7280] mt-1">
              End-to-end product builds across wellness and marketplace products
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
