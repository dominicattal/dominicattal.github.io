export default function Hero() {
  return (
    <section className="flex min-h-screen items-center px-8">
      <div className="mx-auto max-w-4xl">
        <p className="mb-4 text-zinc-400">
          Hello, I'm
        </p>

        <h1 className="mb-4 text-6xl font-bold tracking-tight md:text-8xl">
          Dominic Attalienti
        </h1>

        <h2 className="mb-6 text-2xl text-zinc-300 md:text-3xl">
          Software Engineer & Computer Science Graduate
        </h2>

        <p className="mb-8 max-w-2xl text-lg leading-relaxed text-zinc-400">
          I build full-stack web applications, software tools,
          and systems projects using React, TypeScript,
          C++, Python, and SQL.
        </p>

        <div className="flex gap-4">
          <button className="rounded-lg bg-white px-6 py-3 font-medium text-black transition hover:opacity-90">
            View Projects
          </button>

          <button className="rounded-lg border border-zinc-700 px-6 py-3 transition hover:bg-zinc-900">
            Resume
          </button>
        </div>
      </div>
    </section>
  );
}
