import { caseStudies } from "@/data/caseStudy";
import { notFound } from "next/navigation";
import Link from "next/link"

type Props = {
  params: Promise<{ slug: string }>;
};

function Section({
  title,
  content,
}: {
  title: string;
  content: string;
}) {
  return (
    <div className="mt-14">
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="mt-3 text-zinc-400 leading-relaxed max-w-2xl">
        {content}
      </p>
    </div>
  );
}

function ArchitectureBlock({
  architecture,
}: {
  architecture: string;
}) {
  return (
    <div className="mt-14">
      <h2 className="text-xl font-semibold">Architecture</h2>

      <div className="mt-4 bg-zinc-900 border border-zinc-800 rounded-xl p-4 font-mono text-sm text-zinc-300">
        {architecture}
      </div>
    </div>
  );
}

function ListSection({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  return (
    <div className="mt-14">
      <h2 className="text-xl font-semibold">{title}</h2>
      <ul className="mt-4 space-y-2">
        {items.map((item, i) => (
          <li key={i} className="text-zinc-400">
            • {item}
          </li>
        ))}
      </ul>
    </div>
  );
}


export default async function Page({ params }: Props) {

  
  const { slug } = await params;

  const project = caseStudies[slug as keyof typeof caseStudies];
  if (!project) return notFound();

  return (
    <main className="bg-[#0B0F19] text-white min-h-screen">
      <div className="max-w-4xl mx-auto px-6 py-24">

        <Link
          href="/"
          className="text-sm text-zinc-500 hover:text-white transition"
        >
          ← Back
        </Link>

        <div className="mt-6">
          <h1 className="text-4xl font-semibold tracking-tight">
            {project.title}
          </h1>

          <p className="mt-4 text-zinc-400 max-w-2xl">
            {project.tagline}
          </p>

          <div className="flex flex-wrap gap-2 mt-4">
            {project.focus.map((item, i) => (
              <span
                key={i}
                className="text-xs px-3 py-1 rounded-full bg-zinc-800 text-zinc-300 border border-zinc-700"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
        <Section title="Problem" content={project.problem} />
        <Section title="Solution" content={project.solution} />

        <ListSection title="System Flow" items={project.systemFlow} />

        <ArchitectureBlock architecture={project.architecture} />

        <ListSection title="API Design" items={project.apiDesign} />
        <ListSection title="Data Modeling" items={project.dataModeling} />
        <ListSection title="System Highlights" items={project.highlights} />
        <ListSection title="Technical Decisions" items={project.decisions} />
        <ListSection title="Scalability" items={project.scalability} />
        <ListSection title="Challenges" items={project.challenges} />
        <ListSection title="Trade-offs" items={project.tradeoffs} />

        <Section title="Outcome" content={project.outcome} />
        <ListSection title="What I Learned" items={project.learnings} />

      </div>
    </main>
  );
}