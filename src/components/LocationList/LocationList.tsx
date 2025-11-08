import LocationCard from '../LocationCard/LocationCard';
import type { Location } from '../../mocks/locations';

type LocationListProps = {
  locations: Location[];
  className?: string;
};

function LocationList({ locations, className }: LocationListProps) {
  if (locations.length === 0) {
    return (
      <p className="location-list-empty">
        Nenhum local encontrado para esse material.
      </p>
    );
  }

  return (
    <div className={`location-list ${className ?? ''}`}>
      {locations.map((loc) => (
        <LocationCard key={loc.id} location={loc} />
      ))}
    </div>
  );
}

export default LocationList;
