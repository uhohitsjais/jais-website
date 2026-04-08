const testimonials = [
  {
    quote:
      "Jais is the most knowledgeable and trusted go-to person for any platform-related question. Her depth of expertise, combined with exceptional clarity of thought, makes her stand out as someone who can break down even the most complex problems and explain them with remarkable simplicity and detail.",
    name: "Former Manager",
    title: "TaskHuman — 2025 Performance Review",
    isPlaceholder: false,
  },
  {
    quote:
      "Jais is an 'unblocker.' She has a strong sense of empathy for her colleagues and drives contentious meetings with diplomacy and purpose. She listens to multiple parties and puts forth alternative viewpoints to facilitate a collaborative relationship between teams. I really appreciate that Jais speaks her mind — this allows us to challenge each other respectfully towards the right solution.",
    name: "Former Manager",
    title: "TaskHuman — 2024 Performance Review",
    isPlaceholder: false,
  },
  {
    quote:
      "Jais is a strong, grounded force. She bases her decisions on reason and logic, making her beyond trustworthy. She has an amazing eye for detail, excellent taste design-wise, and yet, is data-driven and logically sound. This balance of skill sets is hard to come by, but you absolutely find it in Jais.",
    name: "Jessica",
    title: "Former Colleague, TaskHuman",
    isPlaceholder: false,
  },
];

export default function Testimonials() {
  const live = testimonials.filter((t) => !t.isPlaceholder);

  return (
    <section className="py-24 sm:py-32 bg-white">
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        <div className="mb-16">
          <p className="text-xs font-semibold text-[#7E83FF] uppercase tracking-widest mb-4">
            What People Say
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#3A49A3] leading-tight">
            Trusted by the teams I work with
          </h2>
          <div className="w-16 mt-4" style={{ height: "2px", backgroundColor: "#FFA8EA" }} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Always show the real one */}
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={`rounded-2xl p-8 flex flex-col gap-6 border transition-all duration-300 ${
                t.isPlaceholder
                  ? "border-dashed border-gray-200 bg-[#f9fafb] opacity-40 pointer-events-none"
                  : "border-gray-100 bg-white hover:border-[#7E83FF]/30 hover:shadow-lg hover:shadow-[#7E83FF]/5"
              }`}
            >
              {/* Quote mark */}
              <span className="text-4xl text-[#7E83FF]/30 leading-none font-serif select-none">
                &ldquo;
              </span>

              <p
                className={`leading-relaxed flex-1 ${
                  t.isPlaceholder
                    ? "text-[#9ca3af] text-sm italic"
                    : "text-[#374151] text-base"
                }`}
              >
                {t.quote}
              </p>

              <div className="flex items-center gap-3 pt-2 border-t border-gray-100">
                <div className="w-8 h-8 rounded-full bg-[#7E83FF]/15 flex items-center justify-center shrink-0">
                  <span className="text-[#7E83FF] text-xs font-bold">
                    {t.name[0]}
                  </span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#374151]">
                    {t.name}
                  </p>
                  <p className="text-xs text-[#9ca3af]">{t.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {live.length < 3 && (
          <p className="text-center text-xs text-[#9ca3af] mt-8">
            {/* Reminder visible only in dev — remove before going live */}
            Faded cards are placeholders. Replace with real testimonials in{" "}
            <code className="font-mono">components/Testimonials.tsx</code>.
          </p>
        )}
      </div>
    </section>
  );
}
