import { useState } from 'react';

type SearchBarProps = {
  onSearch: (term: string) => void;
  className?: string;
};

function SearchBar({ onSearch, className }: SearchBarProps) {
  const [input, setInput] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(input.trim().toLowerCase());
  };

  return (
    <form onSubmit={handleSubmit} className={className}>
      <button type="submit" className="search-button">
        Buscar
      </button>
      <input
        type="text"
        placeholder="Digite o material: papel, plástico, metal ou vidro"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="search-input"
      />

    </form>
  );
}

export default SearchBar;
