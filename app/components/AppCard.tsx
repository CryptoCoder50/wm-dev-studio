import { App } from "../data/apps";

export default function AppCard({ app }: { app: App }) {
  return (
    <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 hover:border-blue-500/40 transition">
      <h3 className="text-xl font-semibold text-white">{app.title}</h3>
      <p className="mt-3 text-white/70">{app.description}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {app.tech.map((tech) => (
          <span
            key={tech}
            className="text-xs px-3 py-1 bg-white/10 rounded-full text-white/80"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}