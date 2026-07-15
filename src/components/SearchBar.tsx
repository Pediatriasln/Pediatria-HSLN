import { useState } from "react";

export default function SearchBar() {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    alert(`Você pesquisou: ${query}`);
  };

  return (
    <div className="flex gap-2 mt-4">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Digite sua busca..."
        className="border p-2 flex-1"
      />
      <button onClick={handleSearch} className="bg-blue-900 text-white px-4 py-2">
        Buscar
      </button>
    </div>
  );
}
