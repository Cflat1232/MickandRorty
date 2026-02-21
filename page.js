import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-950 text-white flex flex-col items-center justify-center p-6">
      <h1 className="text-5xl md:text-6xl font-bold mb-6 text-green-400 text-center">
        Welcome to Rick and Morty Explorer
      </h1>
      <p className="text-xl md:text-2xl mb-10 text-center max-w-3xl">
        Discover characters from the multiverse using the Rick and Morty API
      </p>

      <div className="relative w-72 h-72 md:w-96 md:h-96 mb-10 rounded-2xl overflow-hidden shadow-2xl shadow-green-700/40">
        <Image
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="Rick Sanchez"
          fill
          className="object-cover"
          priority
        />
      </div>
    </main>
  );
}
