import { useState, useEffect } from 'react';
import type { Location } from '../../mocks/locations';
import {
  isFavorite,
  toggleFavorite,
} from '../../services/favorites';
import favorito from '../../assets/icons/location-card/favoritado.png';
import favoritar from '../../assets/icons/location-card/favoritar.png';
import paper from '../../assets/icons/map/pin-paper.png';
import plastic from '../../assets/icons/map/pin-plastic.png';
import metal from '../../assets/icons/map/pin-metal.png';
import glass from '../../assets/icons/map/pin-glass.png';

type LocationCardProps = {
  location: Location;
  className?: string;
  onToggle?: (id: number, isFav: boolean) => void; // callback para avisar o pai
};

function LocationCard({ location, className, onToggle }: LocationCardProps) {
  const [favorite, setFavorite] = useState(false);

  // Verifica se já está favoritado ao montar
  useEffect(() => {
    const checkFavorite = async () => {
      const fav = await isFavorite(location.id);
      setFavorite(fav);
    };
    checkFavorite();
  }, [location.id]);

  const handleFavorite = async () => {
    await toggleFavorite(location);
    const fav = await isFavorite(location.id);
    setFavorite(fav);

    // avisa o componente pai
    if (onToggle) {
      onToggle(location.id, fav);
    }
  };

  const renderMaterialIcons = () => {
    return (
      <span className="materials-icons">
        {location.materials.includes('papel') && (
          <img src={paper} alt="Papel" className="material-icon" />
        )}
        {location.materials.includes('plástico') && (
          <img src={plastic} alt="Plástico" className="material-icon" />
        )}
        {location.materials.includes('metal') && (
          <img src={metal} alt="Metal" className="material-icon" />
        )}
        {location.materials.includes('vidro') && (
          <img src={glass} alt="Vidro" className="material-icon" />
        )}
      </span>
    );
  };

  return (
    <div className={className}>
      <div>
        <h3 className="location-title">
          {renderMaterialIcons()}
          {location.name}
        </h3>
        <p className="location-info">{location.address}</p>
        <p className="location-info">{location.hours}</p>
        <p className="location-info">{location.phone}</p>
      </div>
      <button
        className="favorite-button"
        onClick={handleFavorite}
        title={favorite ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}
      >
        {favorite ? (
          <img src={favorito} alt="Marcado como favorito" />
        ) : (
          <img src={favoritar} alt="Marcar como favorito" />
        )}
      </button>
    </div>
  );
}

export default LocationCard;
