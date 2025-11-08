type Persona = {
  name: string;
  goal: string;
  needs: string[];
};

type PersonaGridProps = {
  personas: Persona[];
};

export function PersonaGrid({ personas }: PersonaGridProps) {
  return (
    <section className="rounded-3xl border border-white/10 bg-slate-950/60 p-8">
      <header className="mb-6">
        <p className="text-sm uppercase tracking-wide text-cyan-200">Personas</p>
        <h2 className="text-3xl font-semibold text-white">Built for the full buying group</h2>
        <p className="mt-2 text-sm text-slate-300">
          Map messaging, flows, and success metrics to the priorities of each role.
        </p>
      </header>
      <div className="grid gap-4 md:grid-cols-3">
        {personas.map((persona) => (
          <article
            key={persona.name}
            className="rounded-2xl border border-white/5 bg-slate-900/40 p-5"
          >
            <h3 className="text-lg font-semibold text-white">{persona.name}</h3>
            <p className="mt-2 text-sm text-slate-300">{persona.goal}</p>
            <ul className="mt-4 space-y-2 text-sm text-slate-200">
              {persona.needs.map((need) => (
                <li key={need} className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-cyan-400" />
                  <span>{need}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
