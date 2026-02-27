import { apps } from "../data/apps";
import AppCard from "../components/AppCard";

export default function AppsPage() {
  return (
    <main className="px-6 py-16 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold mb-10">Our Applications</h1>

      <div className="grid md:grid-cols-2 gap-8">
        {apps.map((app) => (
          <AppCard key={app.id} app={app} />
        ))}
      </div>
    </main>
  );
}