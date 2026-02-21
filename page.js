

import Character from '@/components/Character'; 

async function fetchCharacter(id) {
  const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
  if (!res.ok) {
    throw new Error(`Failed to fetch character with id ${id}`);
  }
  return res.json();
}

export default async function CharacterDetail({ params }) {
  const resolvedParams = await params;
  const { id } = resolvedParams;  

  let character;
  try {
    character = await fetchCharacter(id);
  } catch (error) {
    return (
      <main className="min-h-screen bg-gray-950 text-white p-8 flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-red-500 mb-6">Error</h1>
        <p className="text-xl">Could not load character (ID: {id})</p>
        <p className="text-lg mt-4 text-gray-400">{error.message}</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-950 text-white p-6 md:p-12 flex flex-col items-center">
      <h1 className="text-4xl md:text-5xl font-bold mb-10 text-green-400 text-center">
        {character.name}
      </h1>

      <Character
        id={character.id}
        name={character.name}
        species={character.species}
        image={character.image}
      />

      
      <div className="mt-12 w-full max-w-2xl bg-gray-800/50 rounded-xl p-6 border border-green-900/30">
        <h2 className="text-2xl font-semibold mb-4 text-green-300">More Details</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-lg">
          <p><strong>Status:</strong> {character.status}</p>
          <p><strong>Gender:</strong> {character.gender}</p>
          <p><strong>Origin:</strong> {character.origin?.name || 'Unknown'}</p>
          <p><strong>Location:</strong> {character.location?.name || 'Unknown'}</p>
        </div>
      </div>
    </main>
  );
}