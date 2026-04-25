import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center text-white overflow-hidden py-28 scroll-mt-24">
      
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.12),transparent_60%)]" />

      <div className="relative max-w-5xl mx-auto px-6 text-center">

        <p className="text-xs tracking-widest text-zinc-500 uppercase">
          Hi, I’m
        </p>

        <h1 className="text-5xl sm:text-7xl font-bold mt-2 tracking-tight">
          Divam
        </h1>

        <h2 className="mt-4 text-lg sm:text-xl text-zinc-300">
          Backend Engineer focused on scalable systems
        </h2>
        <p className="mt-6 max-w-xl mx-auto text-zinc-400 leading-relaxed text-sm sm:text-base">
          I design and build real-time applications, distributed systems,
          and high-performance APIs using Node.js and modern data architectures.
        </p>

        <p className="mt-3 text-xs text-zinc-500">
          Focus: Real-time systems • Distributed processing • Backend architecture
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <Link
            href="#projects"
            className="
              px-6 py-3 rounded-lg bg-indigo-500
              hover:bg-indigo-400 transition-colors
              text-sm font-medium
            "
          >
            View Systems
          </Link>

          <Link
            href="#contact"
            className="
              px-6 py-3 rounded-lg border border-zinc-700
              hover:border-zinc-500 hover:bg-zinc-900
              transition-all text-sm font-medium
            "
          >
            Contact
          </Link>
        </div>
      </div>
    </section>
  );
}