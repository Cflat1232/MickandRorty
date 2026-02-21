import Link from "next/link";

async function fetchCharacters() {
  const res = await fetch("https://rickandmortyapi.com/api/character");
  if (!res.ok) throw new Error("Could not load characters");
  const { results } = await res.json();
  return results;
}

export default async function Characters() {
  const characters = await fetchCharacters();

  return (
    <main className="min-h-screen bg-gray-950 text-white p-6">
      <h1 className="text-4xl font-bold mb-10 text-center text-green-400">
        All Characters
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {characters.map((char) => (
          <Link
            key={char.id}
            href={`/characters/${char.id}`}
            className="bg-gray-800 p-4 rounded-xl hover:bg-gray-700 transition hover:scale-105 shadow-md"
          >
            <h3 className="text-xl font-semibold">{char.name}</h3>
          </Link>
        ))}
      </div>
    </main>
  );
}