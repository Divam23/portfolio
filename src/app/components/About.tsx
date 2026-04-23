const stack = [
  {
    label: "Backend",
    items: ["Node.js", "Express", "WebSockets"],
  },
  {
    label: "Databases",
    items: ["MongoDB", "PostgreSQL", "Redis"],
  },
  {
    label: "Infrastructure",
    items: ["Docker", "AWS"],
  },
];

export default function About() {
  return (
    <section id="about" className="py-28 scroll-mt-24">
      <div className="max-w-5xl  mx-auto px-6">

        {/* Header */}
        <div className="mb-12">
          <h2 className="text-3xl font-semibold text-white">About</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12">

          {/* Left — concise profile */}
          <div className="space-y-4">
            <p className="text-neutral-300 text-sm leading-relaxed">
              Backend-focused developer building scalable systems, real-time applications,
              and data-driven architectures. I focus on designing APIs, handling concurrency,
              and structuring systems for performance and maintainability.
            </p>

            <p className="text-neutral-500 text-sm leading-relaxed">
              Currently working on systems involving real-time communication, background
              job processing, and hybrid database architectures.
            </p>

            {/* CTA */}
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-sm text-neutral-400 hover:text-white transition"
            >
              Contact →
            </a>
          </div>

          {/* Right — stack */}
          <div className="space-y-6">
            {stack.map(({ label, items }) => (
              <div key={label}>
                <p className="text-[11px] text-neutral-500 uppercase tracking-wider mb-2">
                  {label}
                </p>

                <div className="flex flex-wrap gap-2">
                  {items.map((item) => (
                    <span
                      key={item}
                      className="text-xs px-3 py-1 rounded-full bg-neutral-900 text-neutral-300 border border-neutral-800"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}

            {/* Availability */}
            <p className="text-xs text-neutral-500 mt-4">
              Open to backend engineering opportunities
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}