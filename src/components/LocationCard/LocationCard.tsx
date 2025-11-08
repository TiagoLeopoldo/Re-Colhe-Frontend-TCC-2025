import type { Location } from '../../mocks/locations';

type LocationCardProps = {
  location: Location;
  className?: string;
};

function LocationCard({ location, className }: LocationCardProps) {
  return (
    <div className={className}>
      <div>
        <h3 className="location-title">{location.name}</h3>
        <p className="location-info">📍 {location.address}</p>
        <p className="location-info">🕒 {location.hours}</p>
        <p className="location-info">📞 {location.phone}</p>
      </div>
      <button
        className="favorite-button"
        title="Favoritar (em breve)"
      >
        ❤️
      </button>
    </div>
  );
}

export default LocationCard;
