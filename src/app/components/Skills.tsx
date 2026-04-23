const skills = [
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
  {
    label: "Tools",
    items: ["Git", "Postman"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-28">
      <div className="max-w-5xl mx-auto px-6">

        {/* Header */}
        <div className="mb-12">
          <h2 className="text-3xl font-semibold text-white">
            Technical Stack
          </h2>
        </div>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
          {skills.map(({ label, items }) => (
            <div key={label}>
              <p className="text-[11px] text-neutral-500 uppercase tracking-wider mb-3">
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
        </div>

      </div>
    </section>
  );
}