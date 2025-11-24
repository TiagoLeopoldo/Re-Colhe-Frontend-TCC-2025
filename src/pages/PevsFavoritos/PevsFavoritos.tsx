import Header from '../../components/Header/Header';
import FooterNavBar from '../../components/FooterNavBar/FooterNavBar';
import { useState, useEffect } from 'react';
import LocationCard from '../../components/LocationCard/LocationCard';
import { getFavorites } from '../../services/favorites';
import type { Location } from '../../mocks/locations';
import heart from '../../assets/icons/menu/heart.png';
import './PevsFavoritos.css';

function PevsFavoritos() {
  const [favorites, setFavorites] = useState<Location[]>([]);

  const refreshFavorites = async () => {
    const favs = await getFavorites();
    setFavorites(favs);
  };

  useEffect(() => {
    refreshFavorites();

    // Atualiza se houver mudanças no localStorage (mock)
    const handleStorage = () => refreshFavorites();
    window.addEventListener('storage', handleStorage);

    return () => {
      window.removeEventListener('storage', handleStorage);
    };
  }, []);

  // callback que recebe do LocationCard
  const handleToggle = (id: number, isFav: boolean) => {
    if (!isFav) {
      // remove da lista
      setFavorites((prev) => prev.filter((loc) => loc.id !== id));
    }
  };

  return (
    <>
      <Header />
      <main className="favoritos-page">
        <section className="favoritos-title">
          <img src={heart} alt="Ícone de um coração" />
          <div>
            <h1>PEVs favoritos</h1>
            <span>Pontos de Entrega Voluntária</span>
          </div>
        </section>

        {favorites.length === 0 ? (
          <section className="favoritos-list">
            <p className="favoritos-empty">
              Você ainda não favoritou nenhum ponto de coleta.
            </p>
          </section>
        ) : (
          <section className="favoritos-list">
            {favorites.map((loc) => (
              <LocationCard
                key={loc.id}
                location={loc}
                onToggle={handleToggle}
              />
            ))}
          </section>
        )}
      </main >
      <FooterNavBar />
    </>
  );
}

export default PevsFavoritos;
